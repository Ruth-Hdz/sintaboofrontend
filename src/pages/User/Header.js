import React from 'react';
import { FaUser, FaSearch, FaShoppingCart, FaTruck, FaChevronDown} from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header>
      {/* Top Header */}
      <div style={{ backgroundColor: '#230341' }} className="flex justify-between items-center p-3">
        {/* Logo + Nombre */}
        <div className="flex items-center space-x-2 pl-6">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-2xl font-bold">
            <span style={{ color: '#FF7E5D' }}>Sin</span>
            <span className="text-white">Taboo</span>
          </h1>
        </div>

        {/* Íconos */}
        <div className="flex items-center space-x-8 text-white pr-10">
          <FaSearch className="cursor-pointer" />
          <FaUser className="cursor-pointer" />
          <div className="relative cursor-pointer">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white rounded-full px-1">0</span>
          </div>
        </div>
      </div>

      {/* Menú Principal */}
      <div style={{ backgroundColor: '#230341' }} className="flex text-white p-3">
        {/* REBAJAS */}
        <div className="cursor-pointer flex-1 text-center">REBAJAS</div>

        {/* Mujeres */}
        <div className="relative group cursor-pointer flex-1 flex justify-center items-center space-x-1">
          <span>MUJERES</span>
          <FaChevronDown className="text-xs mt-1" />
          <div className="absolute top-full right-0 hidden group-hover:block bg-white text-black rounded shadow-lg w-40 z-50">
            <div className="p-2 hover:bg-purple-200">Lencería</div>
            <div className="p-2 hover:bg-purple-200">Juguetes</div>
            <div className="p-2 hover:bg-purple-200">Accesorios</div>
          </div>
        </div>

        {/* Hombres */}
        <div className="relative group cursor-pointer flex-1 flex justify-center items-center space-x-1">
          <span>HOMBRES</span>
          <FaChevronDown className="text-xs mt-1" />
          <div className="absolute top-full right-0 hidden group-hover:block bg-white text-black rounded shadow-lg w-40 z-50">
            <div className="p-2 hover:bg-purple-200">Juguetes</div>
            <div className="p-2 hover:bg-purple-200">Accesorios</div>
          </div>
        </div>

        {/* Categorías */}
        <div className="relative group cursor-pointer flex-1 flex justify-center items-center space-x-1">
          <span>CATEGORIAS</span>
          <FaChevronDown className="text-xs mt-1" />
          <div className="absolute top-full right-0 hidden group-hover:block bg-white text-black rounded shadow-lg w-40 z-50">
            <div className="p-2 hover:bg-purple-200">Parejas</div>
            <div className="p-2 hover:bg-purple-200">Solteros</div>
            <div className="p-2 hover:bg-purple-200">LGBTQ+</div>
          </div>
        </div>
      </div>

      {/* Barrita inferior */}
      <div style={{ backgroundColor: '#C4A7E7' }} className="flex items-center justify-center p-2 text-white">
        <FaTruck className="mr-2" />
        <span className="font-medium">Envío gratuito para artículos con un valor total de hasta R$ 180</span>
      </div>


    </header>
  );
};

export default Header;
