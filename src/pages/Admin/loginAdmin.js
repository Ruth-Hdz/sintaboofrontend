import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { username, password });
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#230341' }}>
      {/* HEADER */}
      <header className="flex items-center px-20 py-4 bg-black">
        <div className="flex items-center space-x-2 pl-6">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-2xl font-bold">
            <span style={{ color: '#FF7E5D' }}>Sin</span>
            <span className="text-white">Taboo</span>
          </h1>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <h2 className="text-white text-xl mb-8 font-semibold text-center">
          Login de Administrador
        </h2>

        <div
          className="rounded-lg border border-white p-6 w-full"
          style={{ maxWidth: '360px' }}
        >
          {/* Logo centrado */}
          <div className="flex items-center justify-center mb-6">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full mr-2" />
            <h1 className="text-2xl font-bold flex items-center">
              <span style={{ color: '#FF7E5D' }}>Sin</span>
            <span className="text-white">Taboo</span>
            </h1>
          </div>

          {/* Formulario */}
          <div className="rounded-md border border-white p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-white text-sm mb-1">
                  Nombre de Usuario de administrador
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-md px-3 py-2 bg-[#b3a8e1] text-gray-900 border border-transparent focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-white text-sm mb-1">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md px-3 py-2 bg-[#b3a8e1] text-gray-900 border border-transparent focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 mt-2 text-white border border-white rounded-md hover:bg-white hover:text-[#230341] transition-colors duration-300"
              >
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-black px-20 py-4 flex justify-between items-center text-white text-xs">
        <span>© 2025 SWEET TRIP.</span>
        <div className="space-x-6">
          <Link to="#" className="hover:underline">Términos</Link>
          <Link to="#" className="hover:underline">Privacidad</Link>
          <Link to="#" className="hover:underline">Contactos</Link>
        </div>
      </footer>
    </div>
  );
};

export default AdminLogin;
