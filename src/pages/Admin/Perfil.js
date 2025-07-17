import React, { useState } from "react";
import Sidebar from "./Sidebar";
import logoDefault from "../../assets/logo.png"; // Imagen por defecto
import { FiEdit, FiSave, FiCamera } from "react-icons/fi";

const PerfilTienda = () => {
  const [editMode, setEditMode] = useState(false);

  const [perfil, setPerfil] = useState({
    nombre: "SinTaboo",
    descripcion:
      "Tienda especializada en productos íntimos con total discreción y estilo.",
    telefono: "+52 55 1234 5678",
    email: "contacto@sintaboo.mx",
    direccion: "Av. Reforma 123, Ciudad de México",
    horario: "Lunes a Viernes 10:00 - 19:00, Sábados 10:00 - 15:00",
    facebook: "https://facebook.com/sintaboo",
    instagram: "https://instagram.com/sintaboo",
    twitter: "https://twitter.com/sintaboo",
    logoUrl: "", // Se almacenará como base64 localmente
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfil((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPerfil((prev) => ({ ...prev, logoUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      <div className="flex-1 p-6 text-white max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex items-center mb-8 px-6 bg-black py-4 rounded">
          <img src={logoDefault} alt="Logo" className="w-12 h-12 rounded-full mr-4" />
          <h1 className="text-3xl font-bold">
            <span style={{ color: "#FF7E5D" }}>Sin</span>Taboo
          </h1>
        </header>

        <section className="bg-[#2e2450] rounded p-6 shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Perfil de la Tienda</h2>
            <button
              onClick={toggleEditMode}
              className="flex items-center gap-2 bg-purple-900 px-4 py-2 rounded hover:opacity-90 transition"
              title={editMode ? "Guardar cambios" : "Editar perfil"}
            >
              {editMode ? <FiSave size={18} /> : <FiEdit size={18} />}
              <span>{editMode ? "Guardar" : "Editar"}</span>
            </button>
          </div>

          {/* Foto de perfil (logo de la tienda) */}
          <div className="flex justify-center mb-6 relative">
            <img
              src={perfil.logoUrl || logoDefault}
              alt="Logo de tienda"
              className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-lg"
            />
            {editMode && (
              <label className="absolute bottom-0 right-[calc(50%-14px)] bg-purple-800 hover:bg-purple-700 p-2 rounded-full cursor-pointer">
                <FiCamera size={16} />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {/* Formulario o Vista */}
          {editMode ? (
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block mb-1 font-semibold">Nombre de la tienda</label>
                <input
                  type="text"
                  name="nombre"
                  value={perfil.nombre}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded text-gray-900"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold">Descripción</label>
                <textarea
                  name="descripcion"
                  value={perfil.descripcion}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded text-gray-900 resize-none"
                  rows={3}
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  value={perfil.telefono}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded text-gray-900"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={perfil.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded text-gray-900"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold">Dirección física</label>
                <input
                  type="text"
                  name="direccion"
                  value={perfil.direccion}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded text-gray-900"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold">Horario de atención</label>
                <input
                  type="text"
                  name="horario"
                  value={perfil.horario}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded text-gray-900"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold">Facebook</label>
                <input
                  type="url"
                  name="facebook"
                  value={perfil.facebook}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded text-gray-900"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold">Instagram</label>
                <input
                  type="url"
                  name="instagram"
                  value={perfil.instagram}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded text-gray-900"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold">Twitter</label>
                <input
                  type="url"
                  name="twitter"
                  value={perfil.twitter}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded text-gray-900"
                />
              </div>
            </form>
          ) : (
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold">Descripción</h3>
                <p className="text-gray-300">{perfil.descripcion}</p>
              </div>

              <div>
                <h3 className="font-semibold">Teléfono</h3>
                <p>{perfil.telefono}</p>
              </div>

              <div>
                <h3 className="font-semibold">Correo electrónico</h3>
                <p>{perfil.email}</p>
              </div>

              <div>
                <h3 className="font-semibold">Dirección física</h3>
                <p>{perfil.direccion}</p>
              </div>

              <div>
                <h3 className="font-semibold">Horario de atención</h3>
                <p>{perfil.horario}</p>
              </div>

              <div>
                <h3 className="font-semibold">Redes sociales</h3>
                <ul className="space-y-1 text-blue-400 underline">
                  <li>
                    <a href={perfil.facebook} target="_blank" rel="noreferrer">Facebook</a>
                  </li>
                  <li>
                    <a href={perfil.instagram} target="_blank" rel="noreferrer">Instagram</a>
                  </li>
                  <li>
                    <a href={perfil.twitter} target="_blank" rel="noreferrer">Twitter</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default PerfilTienda;
