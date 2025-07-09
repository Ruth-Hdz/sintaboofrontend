import { Link } from 'react-router-dom';
import { FaHome, FaBoxOpen, FaComments, FaUserEdit, FaCog } from 'react-icons/fa';
import logo from '../../assets/logo.png'; 

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-[#2D0052] text-white flex flex-col px-6 py-8">
      <div className="flex items-center space-x-2 mb-10">
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
        <h1 className="text-2xl font-bold">
          <span className="text-[#FF7E5D]">Sin</span>
          <span className="text-white">Taboo</span>
        </h1>
      </div>

      <div className="mb-8">
        <p className="text-sm mb-1">Usuario</p>
        <p className="text-xs text-gray-300">Admin 1</p>
      </div>

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
        <Link to="/editar-perfil" className="flex items-center space-x-2 hover:text-[#FF7E5D]">
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
