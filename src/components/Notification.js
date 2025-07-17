import { motion } from "framer-motion";
import { useEffect } from "react";

const Notification = ({ message, type = "success", onClose }) => {
  const bgColor = {
    success: "bg-green-600",
    error: "bg-red-600",
    warning: "bg-yellow-600",
    info: "bg-blue-600"
  };

  const icon = {
    success: "✓",
    error: "✕",
    warning: "⚠",
    info: "i"
  };

  // Cierra automáticamente después de 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`${bgColor[type]} text-white px-4 py-3 rounded-lg fixed top-4 right-4 z-50 flex items-center shadow-lg max-w-md`}
    >
      <span className="font-bold mr-2 text-lg">{icon[type]}</span>
      <span className="flex-1">{message}</span>
      <button 
        onClick={onClose} 
        className="ml-4 text-white hover:text-gray-200 text-lg"
        aria-label="Cerrar notificación"
      >
        &times;
      </button>
    </motion.div>
  );
};

export default Notification;