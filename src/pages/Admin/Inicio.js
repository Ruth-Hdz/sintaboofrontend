import React from "react";
import Sidebar from "../../pages/Admin/Sidebar";

const Inicio = () => {
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
          {/* Repite más tarjetas aquí si lo deseas */}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
