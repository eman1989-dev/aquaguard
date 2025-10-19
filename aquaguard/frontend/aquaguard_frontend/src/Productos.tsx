import Filtro from './assets/filtro.png';
import Pastillas from './assets/pastillas.png';

function Productos() {
  const productos = [
    {
      nombre: "Filtro de agua doméstico",
      img: Filtro,
      desc: "Filtro de agua doméstico pequeño, ideal para tuberías pequeñas y de uso cotidiano, como las de la cocina o el baño.",
    },
    {
      nombre: "Pastillas de carbón activado",
      img: Pastillas,
      desc: "Pieza fundamental para el funcionamiento del filtro de agua doméstico. Esta se debe reemplazar cada 90 días.",
    },
  ];

  return (
    <section className="p-10 bg-white min-h-screen pt-28">
      <h2 className="text-5xl font-bold text-center text-blue-700 mb-8">Nuestros Productos</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {productos.map((p, i) => (
          <div
            key={i}
            className="bg-blue-50 shadow-md rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
          >
            <img src={p.img} alt={p.nombre} className="w-full h-120 object-cover flex justify-center items" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{p.nombre}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Productos;
