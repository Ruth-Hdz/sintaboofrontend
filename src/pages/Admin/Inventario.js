import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import AgregarProducto from "./AgregarProducto";
import { API_URL } from "../../services/apiConfig";
import { useNotification } from "../../context/NotificationContext";

const Inventario = () => {
  const [products, setProducts] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newProducto, setNewProducto] = useState({
    nombre: '',
    descripcion: '',
    id_categoria: '',
    precio: '',
    stock: '',
    imagen_url: ''
  });
  const { showNotification } = useNotification();

  useEffect(() => {
    fetchProductos();
    fetchCategorias();
  }, []);

  const fetchProductos = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${API_URL}/inventory`);
      setProducts(res.data);
    } catch (err) {
      console.error("Error al obtener productos:", err);
      const errorMsg = err.response?.data?.message || "Error al cargar los productos";
      setError(errorMsg);
      showNotification(`❌ ${errorMsg}`, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategorias = async () => {
    try {
      const res = await axios.get(`${API_URL}/categorias`);
      setCategorias(res.data);
    } catch (err) {
      console.error("Error al obtener categorías:", err);
      const errorMsg = err.response?.data?.message || "Error al cargar las categorías";
      setError(errorMsg);
      showNotification(`❌ ${errorMsg}`, "error");
    }
  };

  const handleChange = (e) => {
    setError(null);
    const { name, value } = e.target;

    setNewProducto(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setNewProducto(prev => ({
      ...prev,
      foto: e.target.files[0]
    }));
  };

  const handleAddProduct = async (e, productoData) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nombre", productoData.nombre);
    formData.append("descripcion", productoData.descripcion || '');
    formData.append("precio", productoData.precio);
    formData.append("stock", productoData.stock);
    formData.append("id_categoria", productoData.id_categoria);

    if (productoData.foto) {
      formData.append("foto", productoData.foto);
    }

    try {
      setIsLoading(true);
      setError(null);

      const response = await axios.post(`${API_URL}/inventory`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setProducts(prev => [...prev, response.data]);
      setNewProducto({
        nombre: '',
        descripcion: '',
        id_categoria: '',
        precio: '',
        stock: '',
        imagen_url: ''
      });
      setShowForm(false);
      showNotification("✅ Producto creado exitosamente", "success");
    } catch (err) {
      console.error("Error al agregar producto:", err);
      const errorMsg = err.response?.data?.message || "Error al agregar producto";
      setError(errorMsg);
      showNotification(`❌ ${errorMsg}`, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditProduct = (id) => {
    const productToEdit = products.find((prod) => prod.id === id);
    if (productToEdit) {
      setEditingId(id);
      setNewProducto({
        nombre: productToEdit.nombre,
        descripcion: productToEdit.descripcion,
        id_categoria: productToEdit.id_categoria,
        precio: productToEdit.precio,
        stock: productToEdit.stock,
        imagen_url: productToEdit.imagen_url || '',
      });
      setShowForm(true);
      showNotification("✏️ Modo edición activado", "info");
    }
  };

  const handleUpdateProduct = async (e, productoData) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nombre", newProducto.nombre);
    formData.append("descripcion", newProducto.descripcion);
    formData.append("precio", newProducto.precio);
    formData.append("stock", newProducto.stock);
    formData.append("id_categoria", newProducto.id_categoria);

    if (newProducto.foto instanceof File) {
      formData.append("foto", newProducto.foto);
    }

    try {
      setIsLoading(true);
      setError(null);

      const response = await axios.put(`${API_URL}/inventory/${editingId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setProducts(prev => prev.map(p =>
        p.id === editingId ? response.data : p
      ));

      setNewProducto({
        nombre: '',
        descripcion: '',
        id_categoria: '',
        precio: '',
        stock: '',
        imagen_url: '' 
      });

      setEditingId(null);
      setShowForm(false);
      showNotification("✅ Producto actualizado correctamente", "success");
    } catch (err) {
      console.error("Error al actualizar producto:", err);
      const errorMsg = err.response?.data?.message || "Error al actualizar producto";
      setError(errorMsg);
      showNotification(`❌ ${errorMsg}`, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteProduct = async (id) => {
    if (!window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      showNotification("⏹ Eliminación cancelada", "info");
      return;
    }

    try {
      await axios.delete(`${API_URL}/inventory/${id}`);
      setProducts(products.filter((prod) => prod.id !== id));
      showNotification("🗑️ Producto eliminado correctamente", "success");
    } catch (err) {
      console.error("Error al eliminar producto:", err);
      const errorMsg = err.response?.data?.message || "Error al eliminar producto";
      setError(errorMsg);
      showNotification(`❌ ${errorMsg}`, "error");
    }
  };

  const handleCancel = () => {
    setNewProducto({
      nombre: '',
      descripcion: '',
      id_categoria: '',
      precio: '',
      stock: '',
      imagen_url: ''
    });
    setEditingId(null);
    setShowForm(false);
    setError(null);
    showNotification("Pagina Actualizada", "info");
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="min-w-80 shrink-0">
        <Sidebar />
      </div>

      <div className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-4">Inventario de Productos</h2>
        <p className="mb-8 text-gray-400">
          Administra el inventario de productos, agrega, edita o elimina productos según necesites.
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
            <button
              onClick={() => setError(null)}
              className="float-right font-bold"
            >
              ×
            </button>
          </div>
        )}

        <button
          onClick={() => {
            setEditingId(null);
            setShowForm(true);
            setError(null);
            fetchProductos();
          }}
          className="mb-6 bg-purple-900 text-white px-6 py-2 rounded-full text-sm hover:opacity-90 transition"
        >
          Agregar Producto
        </button>

        {showForm && (
          <AgregarProducto
            newProducto={newProducto}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
            handleSubmit={editingId ? handleUpdateProduct : handleAddProduct}
            handleCancel={handleCancel}
            categorias={categorias}
            isEditing={!!editingId}
            error={error}
            isLoading={isLoading}
            onSuccess={fetchProductos}
          />
        )}

        <section className="w-full max-w-6xl mx-auto px-6">
          <h3 className="text-xl font-semibold mb-4 text-white">Productos en inventario</h3>
          <div className="overflow-x-auto rounded border border-red-300">
            <table className="w-full border-collapse border border-red-300 text-sm bg-[#2e2450]">
              <thead className="bg-gray-700 text-white">
                <tr>
                  <th className="py-3 px-4 border-r border-red-300 text-left">#id</th>
                  <th className="py-3 px-4 border-r border-red-300 text-left">Foto</th>
                  <th className="py-3 px-4 border-r border-red-300 text-left">Nombre</th>
                  <th className="py-3 px-4 border-r border-red-300 text-left">Descripción</th>
                  <th className="py-3 px-4 border-r border-red-300 text-left">Precio</th>
                  <th className="py-3 px-4 border-r border-red-300 text-left">Stock</th>
                  <th className="py-3 px-4 border-r border-red-300 text-left">Categoría</th>
                  <th className="py-3 px-4 text-left">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {products.map((prod) => (
                  <tr key={prod.id} className="border-t border-red-300 hover:bg-purple-900 transition">
                    <td className="py-4 px-4 font-semibold border-r border-red-300">{prod.id}</td>
                    <td className="py-2 px-4 border-r border-red-300">
                      {prod.imagen_url ? (
                        <img src={prod.imagen_url} alt={prod.nombre} className="w-12 h-12 object-cover rounded" />
                      ) : (
                        <span className="text-gray-400">Sin imagen</span>
                      )}
                    </td>
                    <td className="py-4 px-4 border-r border-red-300">{prod.nombre}</td>
                    <td className="py-4 px-4 border-r border-red-300">{prod.descripcion}</td>
                    <td className="py-4 px-4 border-r border-red-300">${prod.precio}</td>
                    <td className="py-4 px-4 border-r border-red-300">{prod.stock}</td>
                    <td className="py-4 px-4 border-r border-red-300">
                      {categorias.find(cat => cat.id === prod.id_categoria)?.nombre || prod.id_categoria}
                    </td>
                    <td className="py-4 px-4 flex gap-2">
                      <button
                        onClick={() => handleEditProduct(prod.id)}
                        className="text-blue-400 hover:text-blue-600 mr-2"
                        title="Editar producto"
                      >
                        <FiEdit size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(prod.id)}
                        className="text-red-400 hover:text-red-600"
                        title="Eliminar producto"
                      >
                        <FiTrash2 size={16} />
                      </button>
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

export default Inventario;