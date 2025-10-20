import Sidebar from "./components/Sidebar";
import { SidebarData } from "./components/SidebarData";

interface PlataformaProps {
  userId: string | null;
}

function Plataforma({ userId }: PlataformaProps) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenedor principal */}
      <div className="flex-1 p-8 bg-gray-50 mt-15">
        {userId ? (
          <>
            {/* Bienvenida */}
            <h1 className="text-3xl font-bold text-blue-800 mb-6">
              ¡Bienvenido a tu plataforma!
            </h1>

            <p className="text-lg text-gray-700 mb-6">
              Aquí puedes acceder a todas las herramientas y servicios disponibles para ti:
            </p>

            {/* Resumen de servicios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SidebarData.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
                  onClick={() => window.location.pathname = item.link}
                >
                  <div className="flex items-center gap-3 mb-2 text-blue-700">
                    {item.icon}
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Accede a la sección de <strong>{item.title}</strong> haciendo clic aquí.
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-red-600 font-medium">
            No hay sesión activa. Inicia sesión para ver tu plataforma.
          </p>
        )}
      </div>
    </div>
  );
}

export default Plataforma;

