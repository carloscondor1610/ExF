import { api } from "./api";
export interface LoginRequest{
    email: string;
    password: string;
}

export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
}

export interface AuthResponse {
    token: string;
}

export async function LoginRequest(data: LoginRequest): Promise <AuthResponse> {
    const response = await api.post<AuthResponse>("/auth/login", data);
    return response.data;
}

export async function RegisterRequest(data: RegisterRequest): Promise <AuthResponse> {
    const response = await api.post<AuthResponse>("/auth/register", data);
    return response.data;
}