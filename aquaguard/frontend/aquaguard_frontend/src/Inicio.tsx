import Navbar from "./Navbar";

function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar></Navbar>
      <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-blue-100 to-white px-4 pt-24 w-full">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">
          Agua más limpia por una salud mejor
        </h2>
        <p className="max-w-xl text-gray-600 mb-6">
          En Aquaguard nos preocupamos por tu bienestar, ofreciendo soluciones de filtrado de agua
          para hogares que buscan calidad, pureza y confianza.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition">
          Conoce más
        </button>
      </section>
    </div>
  );
}

export default Home;