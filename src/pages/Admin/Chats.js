import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import { BsCheckCircle, BsCircle, BsSearch } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { FiSend } from "react-icons/fi";

const estadoOptions = {
  Automatizada: {
    color: "text-green-500",
    icon: <BsCheckCircle style={{ width: 14, height: 14 }} />,
  },
  "En espera": {
    color: "text-gray-400",
    icon: <BsCircle style={{ width: 14, height: 14 }} />,
  },
  "Sin resolver": {
    color: "text-red-500",
    icon: <MdClose style={{ width: 14, height: 14 }} />,
  },
};

const chatsData = [
  {
    id: 1,
    nombre: "Ana Pérez",
    foto: "https://randomuser.me/api/portraits/women/68.jpg",
    estado: "En espera",
    mensajes: [
      { from: "cliente", texto: "Hola, ¿tienen lubricantes sin sabor?" },
      {
        from: "admin",
        texto: "¡Hola Ana! Sí, tenemos varios tipos. ¿Quieres recomendaciones?",
      },
    ],
  },
  {
    id: 2,
    nombre: "Carlos Ruiz",
    foto: "https://randomuser.me/api/portraits/men/43.jpg",
    estado: "Automatizada",
    mensajes: [
      { from: "cliente", texto: "¿Hacen envíos discretos?" },
      {
        from: "admin",
        texto: "Claro, todos nuestros paquetes son discretos.",
      },
    ],
  },
  {
    id: 3,
    nombre: "Lucía Gómez",
    foto: "https://randomuser.me/api/portraits/women/45.jpg",
    estado: "Sin resolver",
    mensajes: [
      { from: "cliente", texto: "No me llegó mi pedido." },
      {
        from: "admin",
        texto: "Lo siento mucho, ¿podrías darme tu número de pedido para revisar?",
      },
    ],
  },
];

const Chats = () => {
  const [chats, setChats] = useState(chatsData);
  const [chatActivoId, setChatActivoId] = useState(chatsData[0].id);
  const [mensajeNuevo, setMensajeNuevo] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const mensajesEndRef = useRef(null);

  const chatActivo = chats.find((c) => c.id === chatActivoId);
  const estadoActivo = estadoOptions[chatActivo.estado];

  const scrollToBottom = () => {
    if (mensajesEndRef.current) {
      mensajesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatActivo.mensajes]);

  const enviarMensaje = () => {
    if (mensajeNuevo.trim() === "") return;
    const nuevoMensaje = { from: "admin", texto: mensajeNuevo.trim() };

    const chatsActualizados = chats.map((c) =>
      c.id === chatActivoId
        ? { ...c, mensajes: [...c.mensajes, nuevoMensaje] }
        : c
    );

    setChats(chatsActualizados);
    setMensajeNuevo("");
  };

  const manejarEnter = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      enviarMensaje();
    }
  };

  const chatsFiltrados = chats.filter((chat) =>
    chat.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      <div className="flex-1 flex flex-col text-white overflow-hidden">
        <div className="flex flex-1 max-w-7xl mx-auto w-full border border-red-300 rounded shadow-lg overflow-hidden flex-col">
          {/* ENCABEZADO compartido alineado */}
          <div className="flex w-full border-b border-red-300 bg-[#2e2450]">
            {/* Título Chats */}
            <div className="w-80 px-4 py-4 border-r border-red-300">
              <h2 className="text-xl font-semibold">Chats</h2>
            </div>

            {/* Cabecera del chat activo */}
            <div className="flex items-center gap-4 px-6 py-4 flex-1">
              <img
                src={chatActivo.foto}
                alt={chatActivo.nombre}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{chatActivo.nombre}</h3>
                <span
                  className={`${estadoActivo.color} flex items-center font-semibold text-xs px-2 py-0.5 rounded-full bg-black/30`}
                >
                  {estadoActivo.icon}
                  <span className="ml-1">{chatActivo.estado}</span>
                </span>
              </div>
            </div>
          </div>

          {/* CONTENIDO */}
          <div className="flex flex-1 h-full border border-red-300 rounded overflow-hidden">
            {/* Lista de chats */}
            <aside className="w-80 bg-[#2e2450] flex flex-col border-r border-red-300">
              {/* Barra de búsqueda */}
              <div className="p-3 border-b border-red-300">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar chats..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-md bg-[#3a2d6d] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <BsSearch className="absolute left-3 top-2.5 text-gray-300" />
                </div>
              </div>

              <ul className="overflow-y-auto flex-1">
                {chatsFiltrados.map((chat) => {
                  const estado = estadoOptions[chat.estado];
                  const isActive = chat.id === chatActivoId;
                  return (
                    <li
                      key={chat.id}
                      onClick={() => setChatActivoId(chat.id)}
                      className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-purple-900 transition ${
                        isActive ? "bg-purple-900" : ""
                      }`}
                    >
                      <img
                        src={chat.foto}
                        alt={chat.nombre}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold truncate">{chat.nombre}</p>
                        <span
                          className={`${estado.color} flex items-center whitespace-nowrap font-semibold text-xs px-2 py-0.5 rounded-full bg-black/30 mt-1`}
                        >
                          {estado.icon}
                          <span className="ml-1">{chat.estado}</span>
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </aside>

            {/* Chat activo */}
            <main className="flex flex-col flex-1 bg-[#2e2450]">
              {/* Mensajes */}
              <div className="flex-1 px-6 py-6 overflow-y-auto space-y-4 bg-[#2e2450]">
                {chatActivo.mensajes.map((msg, i) => {
                  const esCliente = msg.from === "cliente";
                  return (
                    <div
                      key={i}
                      className={`flex ${
                        esCliente ? "justify-start" : "justify-end"
                      }`}
                    >
                      <div
                        className={`max-w-[70%] px-4 py-2 rounded-lg shadow-md ${
                          esCliente
                            ? "bg-purple-700 text-white rounded-bl-none"
                            : "bg-green-600 text-white rounded-br-none"
                        }`}
                      >
                        {msg.texto}
                      </div>
                    </div>
                  );
                })}
                <div ref={mensajesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-red-300 px-6 py-4 flex items-center gap-3 bg-[#230341]">
                <textarea
                  value={mensajeNuevo}
                  onChange={(e) => setMensajeNuevo(e.target.value)}
                  onKeyDown={manejarEnter}
                  rows={1}
                  placeholder="Escribe tu mensaje..."
                  className="resize-none flex-1 rounded-md px-4 py-2 text-gray-900 focus:outline-none shadow-inner bg-white"
                />
                <button
                  onClick={enviarMensaje}
                  className="bg-green-600 hover:bg-green-700 p-2 rounded-md shadow-md"
                  title="Enviar mensaje"
                >
                  <FiSend className="text-white" size={20} />
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
