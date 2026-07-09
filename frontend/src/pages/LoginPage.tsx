import type {FormEvent} from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { AuthProvider } from "../auth/AuthContext";

export default function LoginPage() {
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
        await Login(email, password);
        navigate("/dashboard");
        } catch (error){
        setError("Error al iniciar sesión. Por favor, verifica tus credenciales.");
        } finally {
        setLoading(false);
        }
    }
    

    return ();
}