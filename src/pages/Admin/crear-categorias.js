import React, { useState } from 'react';
import iconList from "../../utils/iconList";

const CrearCategoria = () => {
  const [nombre, setNombre] = useState('');
  const [iconoSeleccionado, setIconoSeleccionado] = useState('');
  const [mostrarSelector, setMostrarSelector] = useState(false);
  const [mensaje, setMensaje] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !iconoSeleccionado) {
      setError('Por favor, completa todos los campos');
      setMensaje(null);
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/categorias', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          nombre, 
          icono: iconoSeleccionado // Esto enviará solo el nombre del icono (ej: "FaHeart")
        }),
      });

      if (response.ok) {
        setMensaje('Categoría creada correctamente');
        setError(null);
        setNombre('');
        setIconoSeleccionado('');
      } else {
        throw new Error('Error en la respuesta del servidor');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Error al crear categoría');
      setMensaje(null);
    }
  };

  const seleccionarIcono = (iconId) => {
    setIconoSeleccionado(iconId);
    setMostrarSelector(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow-lg bg-white relative">
      <h2 className="text-2xl font-semibold mb-4 text-purple-900">Crear Nueva Categoría</h2>

      {mensaje && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded flex items-center">
          <span className="mr-2">✓</span> {mensaje}
        </div>
      )}
      {error && <div className="mb-4 p-3 bg-red-100 text-red-800 rounded">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nombre" className="block mb-1 font-medium text-gray-700">
            Nombre de la categoría
          </label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Ejemplo: Juguetes"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Icono</label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setMostrarSelector(!mostrarSelector)}
              className="w-full flex items-center justify-between border border-gray-300 rounded px-3 py-2 bg-white"
            >
              {iconoSeleccionado ? (
                <div className="flex items-center">
                  {iconList.find(icon => icon.id === iconoSeleccionado)?.icon}
                  <span className="ml-2">
                    {iconList.find(icon => icon.id === iconoSeleccionado)?.name}
                  </span>
                </div>
              ) : (
                <span className="text-gray-400">Selecciona un icono</span>
              )}
              <svg
                className={`w-5 h-5 ml-2 transition-transform ${mostrarSelector ? 'transform rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {mostrarSelector && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
                <div className="grid grid-cols-4 gap-2 p-2">
                  {iconList.map((icon) => (
                    <button
                      key={icon.id}
                      type="button"
                      onClick={() => seleccionarIcono(icon.id)}
                      className={`p-2 rounded flex flex-col items-center justify-center ${iconoSeleccionado === icon.id ? 'bg-purple-100 text-purple-800' : 'hover:bg-gray-100'}`}
                      title={icon.name}
                    >
                      <div className="text-xl mb-1">{icon.icon}</div>
                      <span className="text-xs">{icon.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-900 text-white py-2 rounded hover:bg-purple-800 transition flex items-center justify-center"
        >
          Crear Categoría
        </button>
      </form>
    </div>
  );
};

export default CrearCategoria;