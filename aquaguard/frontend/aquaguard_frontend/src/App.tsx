import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import Registro from './Registro';
import Login from './Login';
import Plataforma from './Plataforma';
import CountdownTimer from './Temporizador';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Inicio';
import Sobre_nosotros from './Sobre_nosotros';
import Productos from './Productos';
import Contacto from './Contacto';
import Chatbot from "./Chatbot";

// ✅ Componente de protección
function ProtectedRoute({ children }: { children: React.ReactElement }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
}

// Interface para el payload del JWT
interface JwtPayload {
  id: string; // ⚡ Coincide con el token real
  iat?: number;
  exp?: number;
}

function App() {
  const [userId, setUserId] = useState<string | null>(null);

  // 🔹 Detecta token en localStorage al montar App
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode<JwtPayload>(token);
        setUserId(decoded.id);
        console.log("userId detectado:", decoded.id);
      } catch (err) {
        console.error("Token inválido", err);
        setUserId(null);
      }
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<Sobre_nosotros />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />

        <Route path="/registro" element={<Registro />} />

        <Route
          path="/login"
          element={
            <Login
              onLoginSuccess={(token) => {
                // Guardar token en localStorage
                localStorage.setItem("token", token);

                // Actualizar userId en App
                try {
                  const decoded = jwtDecode<JwtPayload>(token);
                  setUserId(decoded.id); // ⚡ usar 'id'
                  console.log("userId actualizado:", decoded.id);
                } catch {
                  setUserId(null);
                }
              }}
            />
          }
        />

        {/* 🔒 Rutas protegidas */}
        <Route
          path="/plataforma"
          element={
            <ProtectedRoute>
              <Plataforma userId={userId} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/plataforma/reloj"
          element={
            <ProtectedRoute>
              {userId ? (
                <CountdownTimer userId={userId} />
              ) : (
                <p>Cargando temporizador...</p>
              )}
            </ProtectedRoute>
          }
        />

        <Route
          path="/plataforma/chatbot"
          element={
            <ProtectedRoute>
              <Chatbot />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
