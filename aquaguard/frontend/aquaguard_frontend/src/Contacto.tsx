import Emanuel from './assets/emanuel.jpeg';
import Brithany from './assets/brithany.jpeg';

function Contacto() {
  const miembros = [
    { nombre: "Emanuel Fallas", rol: "Programador fullstack. Desarrollador del sitio web e inteligencia artificial.", img: Emanuel },
    { nombre: "Brithany Mora", rol: "Mecánica encargada del diseño, fabricación y ensamblaje del filtro de agua.", img: Brithany },
  ];

  return (
    <section className="p-10 bg-blue-50 min-h-screen pt-28">
      <h2 className="text-5xl font-bold text-center text-blue-700 mb-8">Contáctanos</h2>
      <div className="flex flex-col md:flex-row justify-around items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          {miembros.map((m, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <img src={m.img} alt={m.nombre} className="rounded-full w-30 h-30 mb-2" />
              <h3 className="text-xl font-semibold">{m.nombre}</h3>
              <p className="text-gray-600">{m.rol}</p>
            </div>
          ))}
        </div>
        <form className="bg-white p-6 rounded-2xl shadow-md w-full md:w-1/2 space-y-4">
          <h3 className="text-xl font-semibold text-blue-700">Crear ticket de soporte</h3>
          <input
            type="text"
            placeholder="Tu nombre"
            className="border border-gray-300 rounded-md w-full p-2"
          />
          <input
            type="email"
            placeholder="Tu correo"
            className="border border-gray-300 rounded-md w-full p-2"
          />
          <textarea
            placeholder="Describe tu problema..."
            className="border border-gray-300 rounded-md w-full p-2 h-24"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-md">
            Enviar Ticket
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacto;