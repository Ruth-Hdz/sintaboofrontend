import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Ajusta aquí la ruta si Sidebar está en otro lugar
import logo from "../../assets/logo.png"; // Ajusta la ruta si es necesario
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { BsCheckCircle, BsCircle } from "react-icons/bs";
import { MdClose } from "react-icons/md";

const estadoOptions = [
  { label: "Automatizada", color: "text-green-700", icon: <BsCheckCircle className="inline mr-1" /> },
  { label: "En espera", color: "text-gray-600", icon: <BsCircle className="inline mr-1" /> },
  { label: "Sin resolver", color: "text-red-700", icon: <MdClose className="inline mr-1" /> },
];

const PreguntasFrecuentes = () => {
  const [rows, setRows] = useState([
    {
      hora: "09:30",
      pregunta: "¿Hacen envíos discretos?",
      estado: "Automatizada",
      statusIcon: <BsCheckCircle className="inline mr-1" />,
      statusColor: "text-green-700",
    },
    {
      hora: "11:30",
      pregunta: "¿Tienen vibradores silenciosos?",
      estado: "En espera",
      statusIcon: <BsCircle className="inline mr-1" />,
      statusColor: "text-gray-600",
    },
    {
      hora: "13:40",
      pregunta: "Quiero algo personalizado",
      estado: "Sin resolver",
      statusIcon: <MdClose className="inline mr-1" />,
      statusColor: "text-red-700",
    },
  ]);

  // Estados para formulario
  const [showForm, setShowForm] = useState(false);
  const [newHora, setNewHora] = useState("");
  const [newPregunta, setNewPregunta] = useState("");
  const [newEstado, setNewEstado] = useState(estadoOptions[0].label);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newHora || !newPregunta) {
      alert("Por favor llena todos los campos.");
      return;
    }

    const estadoObj = estadoOptions.find((e) => e.label === newEstado);

    const newRow = {
      hora: newHora,
      pregunta: newPregunta,
      estado: estadoObj.label,
      statusIcon: estadoObj.icon,
      statusColor: estadoObj.color,
    };

    setRows((prev) => [...prev, newRow]);

    // Reset form and hide
    setNewHora("");
    setNewPregunta("");
    setNewEstado(estadoOptions[0].label);
    setShowForm(false);
  };

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#230341" }}>
      <Sidebar />

      <div className="flex-1 p-6 text-white">
        {/* HEADER */}
        <header className="flex items-center mb-8 px-6 bg-black py-4 rounded">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full mr-3" />
          <h1 className="text-2xl font-bold">
            <span style={{ color: "#FF7E5D" }}>Sin</span>
            <span>Taboo</span>
          </h1>
        </header>

        <h2 className="text-2xl font-semibold mb-4">Preguntas Frecuentes</h2>
        <p className="mb-8 text-gray-400">
          Administra opciones de Preguntas Frecuentes que nutrirán a las respuestas automatizadas.
        </p>

        <button
          onClick={() => setShowForm((v) => !v)}
          className="mb-6 bg-purple-900 text-white px-6 py-2 rounded-full text-sm hover:opacity-90 transition"
        >
          {showForm ? "Cancelar" : "Agregar Pregunta"}
        </button>

        {showForm && (
          <form onSubmit={handleAdd} className="mb-8 bg-[#2e2450] p-6 rounded max-w-md">
            <div className="mb-4">
              <label htmlFor="hora" className="block mb-1">Hora</label>
              <input
                type="time"
                id="hora"
                value={newHora}
                onChange={(e) => setNewHora(e.target.value)}
                className="w-full rounded px-3 py-2 text-gray-900"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="pregunta" className="block mb-1">Pregunta</label>
              <input
                type="text"
                id="pregunta"
                value={newPregunta}
                onChange={(e) => setNewPregunta(e.target.value)}
                className="w-full rounded px-3 py-2 text-gray-900"
                placeholder="Escribe la pregunta"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="estado" className="block mb-1">Estado</label>
              <select
                id="estado"
                value={newEstado}
                onChange={(e) => setNewEstado(e.target.value)}
                className="w-full rounded px-3 py-2 text-gray-900"
              >
                {estadoOptions.map(({ label }) => (
                  <option key={label} value={label}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 transition text-white px-4 py-2 rounded"
            >
              Agregar
            </button>
          </form>
        )}

        {/* Tabla */}
        <section className="w-full max-w-5xl mx-auto px-6">
          <h3 className="text-xl font-semibold mb-4 text-white">Registro reciente</h3>
          <div className="overflow-x-auto rounded border border-red-300">
            <table className="w-full border-collapse border border-red-300 text-sm bg-[#2e2450]">
              <thead className="bg-gray-700 text-white">
                <tr>
                  <th className="py-3 px-4 border-r border-red-300 text-left">Hora</th>
                  <th className="py-3 px-4 border-r border-red-300 text-left">Tipo de Consulta</th>
                  <th className="py-3 px-4 text-left">Estado</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-t border-red-300 hover:bg-purple-900 transition"
                  >
                    <td className="py-4 px-4 font-semibold border-r border-red-300">{row.hora}</td>
                    <td className="py-4 px-4 border-r border-red-300">&quot;{row.pregunta}&quot;</td>
                    <td className="py-4 px-4 flex items-center justify-between">
                      <span className={`${row.statusColor} flex items-center`}>
                        {row.statusIcon}
                        {row.estado}
                      </span>
                      <div className="flex gap-4 pl-4 text-white">
                        <button title="Editar" className="text-green-400 hover:opacity-80">
                          <FiEdit size={18} />
                        </button>
                        <button title="Eliminar" className="text-red-400 hover:opacity-80">
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;
