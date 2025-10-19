import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import InputEmail from "./components/comp-10";
import InputNombre from "./components/InputNombre";

function Registro(){
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
            const resp = await fetch('http://localhost:3000/api/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos),
            });

            const resultado = await resp.json();
            if (resp.ok) {
            alert('Usuario registrado con éxito, ahora puedes iniciar sesión');
            navigate('/');
            } else {
            alert('Error al registrar: ' + (resultado.error || 'Datos inválidos'));
            }
        } catch (error) {
            console.error('Error de conexión ' + error);
            alert('No se pudo registrar. Inténtalo más tarde');
        }
    };


    return (
        <div className="registro">
            <form onSubmit={manejarRegistro}>
                <h2>Crear cuenta</h2>
                <div>
                    <InputNombre value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label>Primer apellido: </label><br/>
                    <input type="text" value={apellido1} onChange={e => setApellido1(e.target.value)} required ></input>
                </div>
                <div>
                    <label>Segundo apellido: </label><br/>
                    <input type="text" value={apellido2} onChange={e => setApellido2(e.target.value)} required ></input>
                </div>
                <div>
                    <InputEmail value={correo} onChange={(e) => setCorreo(e.target.value)} />
                </div>
                <div>
                    <label>Número telefónico: </label><br/>
                    <input type="number" value={telefono} onChange={e => setTelefono(e.target.value)} required ></input>
                </div>
                <div>
                    <label>Contraseña: </label><br/>
                    <input type="password" value={clave} onChange={e => setClave(e.target.value)} required ></input>
                </div>
                <button type="submit">Registrarse</button>
                <Link to="/login" className="link-login">
                    Ya tienes una cuenta? Iniciar sesión
                </Link>
            </form>
        </div>
    );
}

export default Registro;