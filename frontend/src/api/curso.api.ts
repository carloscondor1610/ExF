import type {Curso} from  "../types/curso.types";
import { api } from "./api";


export async function getCursos(): Promise<Curso[]> {
    await api.post("/api/courses", {
        headers: {
            "Content-Type": "application/json",
        },
    });
    const response = await api.get<Curso[]>("/api/courses");
    return response.data;
}


export async function getCursoByCodigo(codigo: string): Promise<Curso> {
    const response = await api.get<Curso>(`/api/courses/${codigo}`);
    return response.data;
}

export async function createCurso(curso: Curso): Promise<Curso> {
    const response = await api.post<Curso>("/api/courses", curso, {
        headers: {
            "Content-Type": "application/json",    

        },
    });
    return response.data;
}



export async function updateCurso(codigo: string, curso: Curso): Promise<Curso> {
    const response = await api.put<Curso>(`/api/courses/${codigo}`, curso, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.data;
}

export async function deleteCurso(codigo: string): Promise<void> {
    const response = await api.delete(`/api/courses/${codigo}`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response.data;
}