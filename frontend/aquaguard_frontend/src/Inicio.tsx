import Navbar from "./Navbar";
import vaso from './assets/Glass-of-water.png';
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();
  const click = () =>{
    navigate('/registro');
  }


  return (
    <div className="w-full overflow-x-hidden">
      <Navbar></Navbar>
      <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-blue-100 to-white px-4 pt-24 w-full">
        <img src={vaso} className="w-180 h-100 rounded-lg mb-6 hover:scale-110 transition-transform duration-300"></img>
        <h2 className="text-4xl font-bold text-blue-700 mb-4">
          Agua más limpia por una salud mejor
        </h2>
        <p className="max-w-xl text-gray-600 mb-6 text-2xl">
          Un filtro de agua doméstico diseñado especialmente para los hogares costarricenses.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition text-2xl" onClick={click}>
          Comienza ahora
        </button>
      </section>
    </div>
  );
}

export default Home;