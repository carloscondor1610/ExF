export interface Curso {
    nombre_curso: string;
    codigo: string;
    creditos: number;
    nota_actual: number;
    estado: "APROBADO" | "EN CURSO" | "DESAPROBADO";
}

