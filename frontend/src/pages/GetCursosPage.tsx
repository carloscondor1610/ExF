import type {FormEvent} from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { getCursos,  } from "../api/curso.api";

export default function GetCursosPage() {
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
        await getCursos(Curso);
        navigate("/dashboard");
        } catch (error){
        setError("Buscando cursos.");
        } finally {
        setLoading(false);
        }
    }
    

    return (<></>);
}