import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import InputEmail from "./components/comp-10";
import InputClaveLogin from "./components/InputClaveLogin";

interface LoginProps {
  onLoginSuccess?: (token: string) => void;
}

function Login({ onLoginSuccess }: LoginProps) {
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const navigate = useNavigate();

  const manejarSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const datos = { correo, clave };

    try {
      const resp = await fetch("http://localhost:3000/api/usuarios/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });

      const resultado = await resp.json();

      if (resp.ok) {
        const tokenRecibido = resultado.token;
        localStorage.setItem("token", tokenRecibido);

        if (onLoginSuccess) onLoginSuccess(tokenRecibido);

        navigate("/plataforma");
      } else {
        alert("Error de credenciales: " + (resultado.error || "Inténtalo de nuevo"));
      }
    } catch (error) {
      console.error("Error de conexión " + error);
      alert("Ocurrió un error al conectar con el servidor");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-300">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Iniciar sesión
        </h2>

        <form onSubmit={manejarSubmit} className="space-y-4">
          <InputEmail
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <InputClaveLogin
            value={clave}
            onChange={(e) => setClave(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-all duration-200"
          >
            Ingresar
          </button>

          <div className="text-center">
            <Link
              to="/registro"
              className="text-sm text-blue-700 hover:underline"
            >
              ¿No tienes una cuenta? Crea una aquí
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
