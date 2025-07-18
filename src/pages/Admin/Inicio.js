import React from "react";
import Sidebar from "../../pages/Admin/Sidebar";

const Inicio = () => {
  const handleCrearCategorias = () => {
    window.open('/crear-categorias', '_blank'); // Cambia esta ruta según tu ruta real
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="p-6 flex-1">
        <h2 className="text-2xl font-semibold mb-4">Inicio</h2>
        <p className="mb-8 text-gray-700">
          SinTaboo trabaja contigo: responde, gestiona y vende con total discreción y estilo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Tarjeta ejemplo */}
          <div className="border border-red-400 rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/300x150.png?text=Preguntas+Frecuentes"
              alt="Preguntas Frecuentes"
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium">Preguntas Frecuentes</h3>
              <button className="mt-2 text-sm text-red-500 border border-red-500 px-3 py-1 rounded hover:bg-red-500 hover:text-white transition">
                Ver detalles
              </button>
            </div>
          </div>

          {/* Nueva tarjeta para crear categorías */}
          <div className="border border-purple-700 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition" onClick={handleCrearCategorias}>
            <div className="flex flex-col justify-center items-center p-6 bg-purple-100 h-full">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Crear Categorías</h3>
              <p className="text-sm text-purple-700 mb-4 text-center">
                Administra y crea nuevas categorías para tus productos.
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCrearCategorias();
                }}
                className="text-sm text-purple-700 border border-purple-700 px-4 py-2 rounded hover:bg-purple-700 hover:text-white transition"
              >
                Ir a Crear Categorías
              </button>
            </div>
          </div>

          {/* Puedes agregar más tarjetas si quieres */}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
