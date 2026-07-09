import type {FormEvent} from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { createCurso,  } from "../api/curso.api";

export default function CreateCursosPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");
        setLoading(true);

        try {
        await createCurso(Curso);
        navigate("/dashboard");
        } catch (error){
        setError("Error al crear el curso.");
        } finally {
        setLoading(false);
        }
    }
    

    return (<></>);
}