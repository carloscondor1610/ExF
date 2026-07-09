import type {FormEvent} from "react";


async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
        await Login(email, password);
        navigate("/home");
    } catch (error){
        setError("Error al iniciar sesión. Por favor, verifica tus credenciales.");
    } finally {
        setLoading(false);
    }
    
}