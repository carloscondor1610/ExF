import axios from "axios";
import type { AxiosError, InternalAxiosRequestConfig} from "axios";


export interface ApiError {
    error? : string;
    message?: string;
    [key:string]: unknown;
}

export const api = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL || "https://cs2031-2026-1-pc2-studytrack-production.up.railway.app",
        headers: {
            "Content-Type": "application/json",
        }
    })


    api.interceptors.request.use(
(config: InternalAxiosRequestConfig) => {
const token = localStorage.getItem('token');
if (token && config.headers) {
config.headers.Authorization = `Bearer ${token}`;
}
return config;
},
(error: AxiosError) => {
return Promise.reject(error);
}
);
api.interceptors.response.use(
(response: any) => response,
(error: AxiosError<ApiError>) => {

if (error.response?.status === 401) {

localStorage.removeItem('token');
localStorage.removeItem('user');
window.location.href = '/login';
}
return Promise.reject(error);
}
);
