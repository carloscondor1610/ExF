import { createContext, useContext, useState} from "react";
import type { ReactNode } from "react";
import {LoginRequest, RegisterRequest } from "../api/auth.api";


interface AuthContextType {
    token: string | null;
    userName: string;
    isAuthenticated: boolean;
    Login: (data: LoginRequest) => Promise<void>;
    Register: (data: RegisterRequest) => Promise<void>;
    Logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

    export function AuthProvider({children}: AuthProviderProps){
        const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
        const [userName, setUserName] = useState<string>(localStorage.getItem("user") || "");


        async function Login(email: string, password: string): Promise<void> {
            const response = await LoginRequest({email,password});
            localStorage.setItem("token", response.token);
            localStorage.setItem("user", email);
            setToken(response.token);
            setUserName(email);
        }

        async function Register(name: string, email: string, password: string): Promise<void> {
            const response = await RegisterRequest({name,email,password});
            localStorage.setItem("token", response.token);
            localStorage.setItem("user", name);
            setToken(response.token);
            setUserName(name);
            
        }

        function Logout() {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            setToken(null);
            setUserName("");
        }

        return (
            <AuthContext.Provider value={{ token, userName, isAuthenticated, Login, Register, Logout }}>
                {children}
            </AuthContext.Provider>
        );

    }

    export function useAuth() {
        const context = useContext(AuthContext);
        if (!context){
            throw new Error("useAuth debe autenticarse dentro de uthProvider");


        }

        return context;
    }
}
