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
    console.log("Token inválido o expirado. Redirigiendo al login...");
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
}
if (error.response?.status == 404) {
    console.log("No se encontró el recurso.");
    
}

if (error.response?.status == 400) {
    console.log("La validacion de datos no fue correcta.");
}
if (error.response?.status == 409){
    console.log("Datos duplicados (email, username), ya existe.");
}

if (error.response?.status == 500){
    console.log("Error interno del servidor.");
}
return Promise.reject(error);
}
);
