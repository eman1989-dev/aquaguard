import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registro(){
    const [nombre, setNombre] = useState('');
    const [apellido1, setApellido1] = useState('');
    const [apellido2, setApellido2] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [clave, setClave] = useState('');
    const navigate = useNavigate();

    const manejarRegistro = async(e) => {
        e.preventDefault();
        const datos = {nombre, apellido1, apellido2, correo, telefono, clave};

        try{
            const resp = await fetch('http://localhost:3000/api/usuarios', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(datos)
            });

            const resultado = await resp.json();
            if(resp.ok){
                alert('Usuario registrado con éxito, ahora puedes iniciar sesión');
                navigate("/");
            }else{
                alert("Error al registrar: " +(resultado.error || 'Datos inválidos'));
            }
        }catch(error){
            console.error('Error de conexion '+error);
            alert('No se pudo registrar. Inténtalo más tarde');
        }
    };

    return (
        <div className="registro">
            <form onSubmit={manejarRegistro}>
                <h2>Crear cuenta</h2>
                <div>
                    <label>Nombre: </label><br/>
                    <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} required ></input>
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
                    <label>Correo electrónico: </label><br/>
                    <input type="email" value={correo} onChange={e => setCorreo(e.target.value)} required ></input>
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
                <button type="button" onClick={() => navigate("/login")}>Ya tienes una cuenta? Iniciar sesión</button>
            </form>
        </div>
    );
}

export default Registro;