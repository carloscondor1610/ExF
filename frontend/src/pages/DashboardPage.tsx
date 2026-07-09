import {useNavigate} from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import  { APP_NAME }  from "../constants/app";

export default function DashboardPage() {
    const {userName, Logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        Logout();
        navigate("/login");
    }

    return ( <div className = "min-h-screen bg-slate-100 p-8">
        <section className = "bg-white rounded-xl shadow p-8">
            <h1 className = "text-3xl font-bold mb-2">
                Bienvenido, {userName || "usuario"}!
            </h1>
            <p className = "text-slate-600 mb-6">
                Estás dentro de  ({APP_NAME}). Aquí puedes gestionar tus cursos y ver tu progreso académico.
            </p>
            <button
                onClick={handleLogout}
                className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600">
                Cerrar sesión
            </button>
        </section>
    </div>
    )
}
