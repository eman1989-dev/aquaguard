import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import InputEmail from "./components/comp-10";
import InputNombre from "./components/InputNombre";
import InputApellido1 from "./components/InputApellido1";
import InputApellido2 from "./components/InputApellido2";
import InputTelefono from "./components/InputTelefono";
import InputClave from "./components/comp-51";

function Registro() {
  const [nombre, setNombre] = useState('');
  const [apellido1, setApellido1] = useState('');
  const [apellido2, setApellido2] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [clave, setClave] = useState('');
  const navigate = useNavigate();

  const manejarRegistro = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const datos = { nombre, apellido1, apellido2, correo, telefono, clave };

    try {
      const resp = await fetch("http://localhost:3000/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });

      const resultado = await resp.json();
      if (resp.ok) {
        alert("Usuario registrado con éxito, ahora puedes iniciar sesión");
        navigate("/");
      } else {
        alert("Error al registrar: " + (resultado.error || "Datos inválidos"));
      }
    } catch (error) {
      console.error("Error de conexión " + error);
      alert("No se pudo registrar. Inténtalo más tarde");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-300 mt-10">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Crear cuenta
        </h2>

        <form onSubmit={manejarRegistro} className="space-y-4">
          <InputNombre
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <InputApellido1
            value={apellido1}
            onChange={(e) => setApellido1(e.target.value)}
          />
          <InputApellido2
            value={apellido2}
            onChange={(e) => setApellido2(e.target.value)}
          />
          <InputEmail
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <InputTelefono
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
          <InputClave
            value={clave}
            onChange={(e) => setClave(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-all duration-200"
          >
            Registrarse
          </button>

          <div className="text-center">
            <Link
              to="/login"
              className="text-sm text-blue-700 hover:underline"
            >
              ¿Ya tienes una cuenta? Inicia sesión
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registro;
