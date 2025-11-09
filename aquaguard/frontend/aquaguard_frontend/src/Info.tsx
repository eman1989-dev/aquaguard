
import Sidebar from "./components/Sidebar";

export default function InformacionFiltro() {
  return (
    <div className="flex">
        <Sidebar />
        <section className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl shadow-lg mt-15">
            <header className="flex items-center justify-between mb-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">Información del filtro</h2>
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-teal-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                {/* icono sencillo */}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 11h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 22h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Reemplazar cada 22 días
                </span>
            </header>

            <p className="text-sm text-slate-700 mb-6">
                Aquí encontrarás instrucciones claras y seguras para instalar el filtro de agua en tuberías domésticas y para reemplazar la pastilla de carbón activado. Sigue cada paso con calma y, si tienes dudas técnicas, consulta a un técnico especializado.
            </p>

            <article className="grid gap-6 md:grid-cols-2">
                <div className="p-4 bg-white rounded-xl border border-blue-100 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                    {/* icono */}
                    <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Para instalar el filtro
                </h3>

                <ol className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-3">
                    <span className="flex-none w-8 h-8 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-bold flex items-center justify-center">1</span>
                    <div>
                        <strong className="block">Identifica la tubería del grifo de agua.</strong>
                        <span className="block">Localiza la tubería que alimenta el grifo donde quieres instalar el filtro.</span>
                    </div>
                    </li>

                    <li className="flex items-start gap-3">
                    <span className="flex-none w-8 h-8 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-bold flex items-center justify-center">2</span>
                    <div>
                        <strong className="block">Desconéctala por donde se conecta a otra tubería.</strong>
                        <span className="block">Cierra la llave de paso si es necesario y separa la conexión con cuidado para evitar fugas.</span>
                    </div>
                    </li>

                    <li className="flex items-start gap-3">
                    <span className="flex-none w-8 h-8 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-bold flex items-center justify-center">3</span>
                    <div>
                        <strong className="block">Conecta el filtro a ámbos lados de la tubería.</strong>
                        <span className="block">Asegura las conexiones con cintas de teflón o abrazaderas según el modelo del filtro.</span>
                    </div>
                    </li>
                </ol>
                </div>

                <div className="p-4 bg-white rounded-xl border border-yellow-100 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-yellow-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 5v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Reemplazo de la pastilla de carbón activado
                </h3>

                <p className="text-sm text-slate-700 mb-3">Para hacer el reemplazo de la pastilla sigue los siguientes pasos:</p>

                <ol className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-3">
                    <span className="flex-none w-8 h-8 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-600 font-bold flex items-center justify-center">1</span>
                    <div>
                        <strong className="block">Abre la rendija del filtro</strong>
                        <span className="block">Sigue las instrucciones del fabricante: algunos filtros tienen tapa con rosca, otros una lengüeta de apertura.</span>
                    </div>
                    </li>

                    <li className="flex items-start gap-3">
                    <span className="flex-none w-8 h-8 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-600 font-bold flex items-center justify-center">2</span>
                    <div>
                        <strong className="block">Retira la pastilla desgastada.</strong>
                        <span className="block">Descarta la pastilla usada según normas locales de residuos.</span>
                    </div>
                    </li>

                    <li className="flex items-start gap-3">
                    <span className="flex-none w-8 h-8 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-600 font-bold flex items-center justify-center">3</span>
                    <div>
                        <strong className="block">Introduce la nueva pastilla de carbón activado.</strong>
                        <span className="block">Asegura que quede bien centrada y cierra la tapa correctamente.</span>
                    </div>
                    </li>
                </ol>

                <div className="mt-4 p-3 rounded-lg bg-amber-50 border border-amber-100 text-amber-800 text-sm font-medium">
                    <strong>Recuerda:</strong> La pastilla de carbón activado debe reemplazarse <span className="font-bold">cada 22 días</span> para mantener la eficacia del filtro.
                </div>
                </div>
            </article>

            <footer className="mt-6 text-sm text-slate-600">
                <p>
                Consejo de seguridad: siempre cierra la llave de paso antes de trabajar sobre la tubería y usa herramientas adecuadas. Si notas fugas después de la instalación, revisa las juntas o consulta con un profesional.
                </p>
            </footer>
            </section>
    </div>
  );
}
