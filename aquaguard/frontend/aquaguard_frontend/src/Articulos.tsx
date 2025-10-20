import React, { useState } from 'react';
import { Newspaper, Calendar, ExternalLink, Droplet, AlertCircle, TrendingUp} from 'lucide-react';
import Sidebar from './components/Sidebar';

export default function Articulos() {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const articulos = [
    {
      id: 1,
      titulo: 'AyA anuncia mejoras en infraestructura de agua potable para 2025',
      fuente: 'La Nación',
      fecha: '15 de octubre, 2025',
      categoria: 'infraestructura',
      imagen: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
      resumen: 'El Instituto Costarricense de Acueductos y Alcantarillados presenta un plan de inversión de $150 millones para modernizar la red de distribución en el Gran Área Metropolitana.',
      url: '#',
      etiquetas: ['AyA', 'Inversión', 'GAM']
    },
    {
      id: 2,
      titulo: 'Crisis de agua en Guanacaste: comunidades rurales sin acceso',
      fuente: 'CRHoy',
      fecha: '12 de octubre, 2025',
      categoria: 'crisis',
      imagen: 'https://images.unsplash.com/photo-1541844053589-346841d0b34c?w=800&q=80',
      resumen: 'Más de 5,000 familias en zonas rurales de Guanacaste enfrentan escasez de agua potable debido a la prolongada sequía y falta de infraestructura adecuada.',
      url: '#',
      etiquetas: ['Sequía', 'Guanacaste', 'Emergencia']
    },
    {
      id: 3,
      titulo: 'Calidad del agua potable en Costa Rica supera estándares internacionales',
      fuente: 'El Financiero',
      fecha: '10 de octubre, 2025',
      categoria: 'calidad',
      imagen: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&q=80',
      resumen: 'Estudio de la OMS posiciona a Costa Rica entre los países con mejor calidad de agua potable en América Latina, con un 98% de cobertura en zonas urbanas.',
      url: '#',
      etiquetas: ['OMS', 'Calidad', 'Reconocimiento']
    },
    {
      id: 4,
      titulo: 'Tarifas de agua potable aumentarán un 8% en 2025',
      fuente: 'Delfino',
      fecha: '8 de octubre, 2025',
      categoria: 'tarifas',
      imagen: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
      resumen: 'ARESEP aprueba ajuste tarifario para AyA con el objetivo de financiar proyectos de mantenimiento y expansión de la red de distribución nacional.',
      url: '#',
      etiquetas: ['ARESEP', 'Tarifas', 'Economía']
    },
    {
      id: 5,
      titulo: 'Proyecto de ley busca proteger fuentes de agua potable',
      fuente: 'La República',
      fecha: '5 de octubre, 2025',
      categoria: 'legislacion',
      imagen: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      resumen: 'Diputados presentan iniciativa para establecer zonas de protección alrededor de nacientes y acuíferos que abastecen el sistema nacional de agua potable.',
      url: '#',
      etiquetas: ['Legislación', 'Protección', 'Ambiente']
    },
    {
      id: 6,
      titulo: 'Tecnología israelí ayudará a reducir pérdidas de agua en tuberías',
      fuente: 'La Nación',
      fecha: '2 de octubre, 2025',
      categoria: 'tecnologia',
      imagen: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
      resumen: 'AyA implementará sistema de detección de fugas que podría reducir las pérdidas del 40% actual al 20% en los próximos tres años.',
      url: '#',
      etiquetas: ['Tecnología', 'Innovación', 'Eficiencia']
    }
  ];

  const categorias = [
    { id: 'todos', nombre: 'Todos', icono: Newspaper },
    { id: 'infraestructura', nombre: 'Infraestructura', icono: TrendingUp },
    { id: 'crisis', nombre: 'Crisis', icono: AlertCircle },
    { id: 'calidad', nombre: 'Calidad', icono: Droplet },
    { id: 'tarifas', nombre: 'Tarifas', icono: Calendar },
  ];

  const articulosFiltrados = selectedCategory === 'todos' 
    ? articulos 
    : articulos.filter(art => art.categoria === selectedCategory);

  return (
    <div className='flex'>
        <Sidebar />
         <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 mt-20">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex items-center gap-3 mb-2">
                    <Droplet className="w-8 h-8 text-blue-600" />
                    <h1 className="text-4xl font-bold text-gray-900">Noticias de Agua Potable</h1>
                </div>
                <p className="text-gray-600 text-lg">
                    Últimas noticias sobre el servicio de agua potable en Costa Rica
                </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Filtros por categoría */}
                <div className="mb-8">
                <div className="flex flex-wrap gap-3">
                    {categorias.map((cat) => {
                    const Icon = cat.icono;
                    return (
                        <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                            selectedCategory === cat.id
                            ? 'bg-blue-600 text-white shadow-lg scale-105'
                            : 'bg-white text-gray-700 hover:bg-blue-50 shadow-sm'
                        }`}
                        >
                        <Icon className="w-4 h-4" />
                        {cat.nombre}
                        </button>
                    );
                    })}
                </div>
                </div>

                {/* Grid de artículos */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articulosFiltrados.map((articulo) => (
                    <div
                    key={articulo.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                    >
                    {/* Imagen */}
                    <div className="relative h-48 overflow-hidden">
                        <img
                        src={articulo.imagen}
                        alt={articulo.titulo}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600">
                            {articulo.categoria}
                        </span>
                        </div>
                    </div>

                    {/* Contenido */}
                    <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <span className="font-semibold text-blue-600">{articulo.fuente}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{articulo.fecha}</span>
                        </div>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                        {articulo.titulo}
                        </h3>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                        {articulo.resumen}
                        </p>

                        {/* Etiquetas */}
                        <div className="flex flex-wrap gap-2 mb-4">
                        {articulo.etiquetas.map((etiqueta, index) => (
                            <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                            >
                            {etiqueta}
                            </span>
                        ))}
                        </div>

                        {/* Botón leer más */}
                        <a
                        href={articulo.url}
                        className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors"
                        >
                        Leer artículo
                        <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                    </div>
                ))}
                </div>

                {/* Mensaje si no hay artículos */}
                {articulosFiltrados.length === 0 && (
                <div className="text-center py-16">
                    <Newspaper className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    No hay artículos en esta categoría
                    </h3>
                    <p className="text-gray-500">
                    Intenta seleccionar otra categoría para ver más noticias
                    </p>
                </div>
                )}
            </div>

            {/* Footer informativo */}
            <div className="bg-white border-t mt-12">
                <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex items-start gap-3 bg-blue-50 rounded-lg p-6">
                    <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                        Información importante
                    </h4>
                    <p className="text-gray-600 text-sm">
                        Estos artículos son ejemplos ilustrativos. Para información oficial y actualizada sobre el servicio de agua potable en Costa Rica, 
                        visite los sitios web oficiales del AyA (Instituto Costarricense de Acueductos y Alcantarillados) y ARESEP 
                        (Autoridad Reguladora de los Servicios Públicos).
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
    </div>
  );
}