import {useState, type FormEvent} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";



async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
        await Register(name, email, password);
        navigate("/dashboard");
    } catch (error){
        setError("Error al registrar. Por favor, intenta de nuevo.");
    } finally {
        setLoading(false);
    }
    
}

export  function RegisterPage() {
    return (<></>);
}