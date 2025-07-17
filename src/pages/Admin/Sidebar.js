import { Link } from 'react-router-dom';
import { FaHome, FaBoxOpen, FaComments, FaUserEdit, FaCog, FaUserCircle } from 'react-icons/fa';
import logo from '../../assets/logo.png'; 

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-[#230341] text-white flex flex-col px-6 py-8 ml-10">
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-10">
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
        <h1 className="text-2xl font-bold">
          <span className="text-[#FF7E5D]">Sin</span>
          <span className="text-white">Taboo</span>
        </h1>
      </div>

      {/* Área de usuario en horizontal */}
      <div className="mb-8 flex items-center space-x-3">
        <label htmlFor="profilePic" className="cursor-pointer relative">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center hover:opacity-80 transition">
            <FaUserCircle className="text-2xl text-[#230341]" />
          </div>
          <input id="profilePic" type="file" className="hidden" />
        </label>
        <div>
          <p className="text-sm">Usuario</p>
          <p className="text-xs text-gray-300">Admin 1</p>
        </div>
      </div>

      {/* Navegación */}
      <nav className="flex flex-col space-y-4 text-sm">
        <Link to="/inicio" className="flex items-center space-x-2 hover:text-[#FF7E5D]">
          <FaHome />
          <span>Inicio</span>
        </Link>
        <Link to="/inventario" className="flex items-center space-x-2 hover:text-[#FF7E5D]">
          <FaBoxOpen />
          <span>Inventario</span>
        </Link>
        <Link to="/chats" className="flex items-center space-x-2 hover:text-[#FF7E5D]">
          <FaComments />
          <span>Chats</span>
        </Link>
        <Link to="/PerfildeTienda" className="flex items-center space-x-2 hover:text-[#FF7E5D]">
          <FaUserEdit />
          <span>Editar perfil de tienda</span>
        </Link>
        <Link to="/configuracion" className="flex items-center space-x-2 hover:text-[#FF7E5D]">
          <FaCog />
          <span>Configuración</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
