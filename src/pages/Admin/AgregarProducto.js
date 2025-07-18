import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Spinner = () => (
  <svg
    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

const AgregarProducto = ({
  newProducto = {},
  handleChange,
  handleFileChange,
  handleSubmit,
  handleCancel,
  categorias = [],
  isEditing = false,
  isLoadingCategorias = false,
  error = null,
}) => {
  const [formErrors, setFormErrors] = useState({});
  const [previewImage, setPreviewImage] = useState(null);
  const [localIsLoading, setLocalIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mensajeModal, setMensajeModal] = useState("");
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (isEditing && newProducto.imagen_url) {
      setPreviewImage(newProducto.imagen_url);
    }
  }, [isEditing, newProducto.imagen_url]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      handleFileChange(e);
    }
  };

  const validateField = (name, value) => {
    const errors = { ...formErrors };

    switch (name) {
      case "nombre":
        if (!value || value.trim() === "")
          errors.nombre = "El nombre es obligatorio";
        else delete errors.nombre;
        break;
      case "descripcion":
        if (!value || value.trim() === "")
          errors.descripcion = "La descripción es obligatoria";
        else delete errors.descripcion;
        break;
      case "id_categoria":
        if (!value || value === "")
          errors.id_categoria = "Debes seleccionar una categoría";
        else delete errors.id_categoria;
        break;
      case "precio":
        if (!value || isNaN(value) || parseFloat(value) <= 0)
          errors.precio = "El precio debe ser mayor a 0";
        else delete errors.precio;
        break;
      case "stock":
        if (
          value === undefined ||
          value === null ||
          isNaN(value) ||
          parseInt(value) < 0
        )
          errors.stock = "El stock no puede ser negativo";
        else delete errors.stock;
        break;
      default:
        break;
    }

    setFormErrors(errors);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateForm = () => {
    const requiredFields = {
      imagen_url: isEditing ? true : previewImage || newProducto.imagen_url,
      nombre: newProducto.nombre,
      id_categoria: newProducto.id_categoria,
      precio: newProducto.precio,
      stock: newProducto.stock,
    };

    let isValid = true;
    const errors = {};

    Object.keys(requiredFields).forEach((field) => {
      if (!requiredFields[field] && requiredFields[field] !== 0) {
        errors[field] = `El campo ${field} es obligatorio`;
        isValid = false;
      }
    });

    if (newProducto.precio && (isNaN(newProducto.precio) || parseFloat(newProducto.precio) <= 0)) {
      errors.precio = "El precio debe ser mayor a 0";
      isValid = false;
    }

    if (newProducto.stock && (isNaN(newProducto.stock) || parseInt(newProducto.stock) < 0)) {
      errors.stock = "El stock no puede ser negativo";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLocalIsLoading(true);

    const productoToSubmit = {
      ...newProducto,
      precio: parseFloat(newProducto.precio).toFixed(2),
    };

    try {
      await handleSubmit(e, productoToSubmit);

      setLocalIsLoading(false); // Primero quito loading para que no se muestre spinner

      setMensajeModal(
        `Producto ${isEditing ? "actualizado" : "agregado"} correctamente.`
      );
      setShowModal(true);

      // Cerrar modal y recargar página después de 2 segundos
      setTimeout(() => {
        setShowModal(false);
        window.location.reload();
      }, 2000);
    } catch (err) {
      console.error("Error al guardar el producto:", err);
      setLocalIsLoading(false);
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCancel();
    }
  };

  const hasErrors = Object.keys(formErrors).length > 0 || error;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOutsideClick}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-[#2e2450] p-6 rounded-lg max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto"
      >
        <h3 className="text-lg font-semibold text-white mb-4">
          {isEditing ? "Editar Producto" : "Agregar Nuevo Producto"}
        </h3>

        <form onSubmit={handleFormSubmit}>
          {/* FOTO */}
          <div className="mb-4">
            <label className="block mb-1 text-white">Foto</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full rounded px-3 py-2 bg-white text-black"
            />
            {(previewImage || (isEditing && newProducto.imagen_url)) && (
              <div className="mt-2">
                <label className="block mb-1 text-white text-sm">
                  Vista previa:
                </label>
                <img
                  src={previewImage || newProducto.imagen_url}
                  alt="Preview"
                  className="max-h-32 rounded object-cover border border-gray-500 bg-gray-700"
                />
              </div>
            )}
          </div>

          {/* NOMBRE */}
          <div className="mb-4">
            <label className="block mb-1 text-white">Nombre*</label>
            <input
              ref={firstInputRef}
              type="text"
              name="nombre"
              value={newProducto.nombre || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full rounded px-3 py-2 text-black ${
                formErrors.nombre ? "border-red-500 border" : ""
              }`}
            />
            {formErrors.nombre && (
              <p className="text-red-400 text-sm mt-1">{formErrors.nombre}</p>
            )}
          </div>

          {/* DESCRIPCION */}
          <div className="mb-4">
            <label className="block mb-1 text-white">Descripción</label>
            <textarea
              name="descripcion"
              value={newProducto.descripcion || ""}
              onChange={handleChange}
              className="w-full rounded px-3 py-2 text-black"
              rows="3"
            />
          </div>

          {/* CATEGORÍA */}
          <div className="mb-4">
            <label className="block mb-1 text-white">Categoría*</label>
            {isLoadingCategorias ? (
              <div className="w-full rounded px-3 py-2 bg-gray-300 text-black animate-pulse">
                Cargando categorías...
              </div>
            ) : (
              <select
                name="id_categoria"
                value={newProducto.id_categoria || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full rounded px-3 py-2 text-black ${
                  formErrors.id_categoria ? "border-red-500 border" : ""
                }`}
                disabled={categorias.length === 0}
              >
                <option value="">Selecciona una categoría</option>
                {categorias.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.nombre}
                  </option>
                ))}
              </select>
            )}
            {formErrors.id_categoria && (
              <p className="text-red-400 text-sm mt-1">{formErrors.id_categoria}</p>
            )}
          </div>

          {/* PRECIO */}
          <div className="mb-4">
            <label className="block mb-1 text-white">Precio*</label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-black">$</span>
              <input
                type="number"
                name="precio"
                value={newProducto.precio || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full rounded px-3 py-2 text-black pl-7 ${
                  formErrors.precio ? "border-red-500 border" : ""
                }`}
                min="0.01"
                step="0.01"
              />
            </div>
            {formErrors.precio && (
              <p className="text-red-400 text-sm mt-1">{formErrors.precio}</p>
            )}
          </div>

          {/* STOCK */}
          <div className="mb-6">
            <label className="block mb-1 text-white">Stock*</label>
            <input
              type="number"
              name="stock"
              value={newProducto.stock || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full rounded px-3 py-2 text-black ${
                formErrors.stock ? "border-red-500 border" : ""
              }`}
              min="0"
            />
            {formErrors.stock && (
              <p className="text-red-400 text-sm mt-1">{formErrors.stock}</p>
            )}
          </div>

          {/* BOTONES */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={handleCancel}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              disabled={localIsLoading}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded disabled:opacity-50 flex items-center justify-center"
              disabled={categorias.length === 0 || localIsLoading || hasErrors}
            >
              {localIsLoading ? (
                <>
                  <Spinner />
                  {isEditing ? "Actualizando..." : "Agregando..."}
                </>
              ) : isEditing ? (
                "Actualizar"
              ) : (
                "Agregar"
              )}
            </button>
          </div>
        </form>

        {/* MODAL */}
        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-md text-center">
              <p className="text-lg font-semibold text-green-700">{mensajeModal}</p>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AgregarProducto;
