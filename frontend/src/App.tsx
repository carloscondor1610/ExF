import { BrowserRouter, Navigate, Route, Routes } from "react_router_dom";
import { AuthProvider, useAuth } from "./auth/AuthContext";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/DashboardPage";


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