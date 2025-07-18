import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotificationProvider } from './context/NotificationContext';
import HomePage from './pages/User/HomePage';
import Login from './pages/Admin/loginAdmin';
import Inicio from './pages/Admin/Inicio';
import Inventario from './pages/Admin/Inventario';
import Preguntas from './pages/Admin/Preguntas';
import Chats from './pages/Admin/Chats';
import Perfil from './pages/Admin/Perfil';
import CrearCategorias from './pages/Admin/crear-categorias';

function App() {
  return (
    <NotificationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loginAdmin" element={<Login />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Inventario" element={<Inventario />} />
          <Route path="/Preguntas" element={<Preguntas />} />
          <Route path="/Chats" element={<Chats />} />
          <Route path="/PerfildeTienda" element={<Perfil />} />
          <Route path="/crear-categorias" element={<CrearCategorias />} />
        </Routes>
      </Router>
    </NotificationProvider>
  );
}

export default App;