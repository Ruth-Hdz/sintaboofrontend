import React, { useEffect, useState } from 'react';
import { FaUser, FaSearch, FaShoppingCart, FaTruck, FaChevronDown } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import axios from 'axios';
import { API_URL } from '../../services/apiConfig';

const Header = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const res = await axios.get(`${API_URL}/categorias`);
        setCategorias(res.data);
      } catch (error) {
        console.error("Error al obtener categorías:", error);
      }
    };

    fetchCategorias();
  }, []);

  return (
    <header>
      {/* Top Header */}
      <div className="flex justify-between items-center p-3 bg-[#230341]">
        {/* Logo + Nombre */}
        <div className="flex items-center space-x-2 pl-6">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-2xl font-bold text-white">
            <span style={{ color: '#FF7E5D' }}>Sin</span>Taboo
          </h1>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-8 text-white pr-10">
          <FaSearch className="cursor-pointer" />
          <FaUser className="cursor-pointer" />
          <div className="relative cursor-pointer">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white rounded-full px-1">0</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex text-white p-3 bg-[#230341]">
        <div className="flex-1 text-center cursor-pointer">REBAJAS</div>

        {/* Categorías dinámicas */}
        <div className="relative group flex-1 text-center cursor-pointer">
          <span className="flex justify-center items-center space-x-1">
            CATEGORÍAS <FaChevronDown className="text-xs mt-1" />
          </span>
          <div className="absolute top-full right-0 hidden group-hover:block bg-white text-black rounded shadow-lg w-40 z-50">
            {categorias.map(cat => (
              <div key={cat.id} className="p-2 hover:bg-purple-200 cursor-pointer">
                {cat.nombre}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 text-center cursor-pointer">MUJERES</div>
        <div className="flex-1 text-center cursor-pointer">HOMBRES</div>
      </div>

      {/* Shipping Bar */}
      <div className="flex items-center justify-center p-2 text-white bg-[#C4A7E7]">
        <FaTruck className="mr-2" />
        <span className="font-medium">Envío gratuito para artículos con un valor total de hasta R$ 180</span>
      </div>
    </header>
  );
};

export default Header;
