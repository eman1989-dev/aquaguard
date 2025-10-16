import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login(props){
    const [correo, setCorreo] = useState("");
    const [clave, setClave] = useState("");
    const navigate = useNavigate();

    const manejarSubmit = async(evento) => {
        evento.preventDefault();

        const datos = {correo,clave};

        try{
            const resp = await fetch("http://localhost:3000/api/usuarios/login", {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(datos)
            });

            const resultado = await resp.json();

            if(resp.ok){
                const tokenRecibido = resultado.token;
                localStorage.setItem("token", tokenRecibido);

                if(props.onLoginSuccess) props.onLoginSuccess(tokenRecibido);
                
                navigate("/plataforma");
            }else{
                alert('Error de credenciales: ' +(resultado.error || "Inténtalo de nuevo"));
            }
        }catch(error){
            console.error('Error de conexion '+error);
            alert("Ocurrión un error al conectar con el servidor");
        }
    };

    return(
        <div className="login">
            <form onSubmit={manejarSubmit}>
                <h2>Iniciar sesión</h2>
                <div>
                    <label>Correo electrónico </label><br/>
                    <input type="email" value={correo} onChange={e => setCorreo(e.target.value)} required />
                </div>
                <div>
                    <label>Contraseña </label><br/>
                    <input type="password" value={clave} onChange={e => setClave(e.target.value)} required />
                </div>
                <button type="submit">Ingresar</button>
                <Link to="/registro" className="link-registro">
                    No tienes una cuenta? Crea una cuenta
                </Link>
            </form>
        </div>
    );
}

export default Login;