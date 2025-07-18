import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

const LoginUser = () => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          identifier: correo, // coincidir con el backend que espera identifier
          password
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Login exitoso: ' + data.user.nombre);
        // Guarda token o user info si usas auth token
        // Redirige a página protegida
        navigate('/dashboard');
      } else {
        alert(data.message || 'Error en login');
      }
    } catch (error) {
      alert('Error al conectar con el servidor');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#230341' }}>
      <header className="flex items-center px-20 py-4 bg-black">
        <div className="flex items-center space-x-2 pl-6">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-2xl font-bold">
            <span style={{ color: '#FF7E5D' }}>Sin</span>
            <span className="text-white">Taboo</span>
          </h1>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <h2 className="text-white text-xl mb-8 font-semibold text-center">Iniciar Sesión</h2>

        <div className="rounded-lg border border-white p-6 w-full" style={{ maxWidth: '360px' }}>
          <form onSubmit={handleSubmit} className="space-y-4 text-white">
            <div>
              <label className="block mb-1">Correo Electrónico</label>
              <input
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                className="w-full rounded-md px-3 py-2 bg-[#b3a8e1] text-gray-900 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block mb-1">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md px-3 py-2 bg-[#b3a8e1] text-gray-900 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md transition duration-200"
            >
              Iniciar Sesión
            </button>
          </form>

          <p className="mt-4 text-center text-gray-400">
            ¿No tienes una cuenta?{' '}
            <Link to="/register" className="text-purple-400 hover:underline">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </main>
      <div>
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
    </div>
  );
};

export default LoginUser;
