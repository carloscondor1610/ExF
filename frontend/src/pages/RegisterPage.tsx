import type {FormEvent} from "react";


async function handleSubmit(event: FormEvent<HTMLFormElement>) {
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