import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./auth/AuthContext";
import LoginPage from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import HomePage from "./pages/DashboardPage";
import { ProtectedRoute }from "./auth/ProtectedRoute";


function App(){
  return (<BrowserRouter>
  <AuthProvider>
    <Routes>
      <Route path = "/" element = {<Navigate to = "/login" replace />} />
      <Route path = "/login" element = {<LoginPage />} />
      <Route path = "/register" element = {<RegisterPage />} />
      <Route path = "/home" element = {<ProtectedRoute><HomePage /></ProtectedRoute>} />
    </Routes>
  </AuthProvider>
  </BrowserRouter>

  )
}