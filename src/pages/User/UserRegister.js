import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const UserRegister = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [aceptaTerminos, setAceptaTerminos] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
    e.preventDefault();

    if (!aceptaTerminos) {
        alert('Debes aceptar los términos y condiciones para continuar.');
        return;
    }

    try {
        const res = await fetch('http://localhost:8000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nombre,
                apellido,
                email: correo, // Aquí el cambio clave
                password,
                acepta_terminos: aceptaTerminos
            }),
        });

        const data = await res.json();

        if (res.ok) {
            alert('Usuario registrado correctamente');
            navigate('/login');
        } else {
            alert(data.message || 'Error en registro');
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
                <h2 className="text-white text-xl mb-8 font-semibold text-center">Registro de Usuario</h2>

                <div className="rounded-lg border border-white p-6 w-full" style={{ maxWidth: '360px' }}>
                    <form onSubmit={handleRegister} className="space-y-4 text-white">
                        <div>
                            <label className="block mb-1">Nombre</label>
                            <input
                                type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                className="w-full rounded-md px-3 py-2 bg-[#b3a8e1] text-gray-900 focus:outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1">Apellido</label>
                            <input
                                type="text"
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}
                                className="w-full rounded-md px-3 py-2 bg-[#b3a8e1] text-gray-900 focus:outline-none"
                                required
                            />
                        </div>

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

                        {/* Checkbox para aceptar términos */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="aceptaTerminos"
                                checked={aceptaTerminos}
                                onChange={(e) => setAceptaTerminos(e.target.checked)}
                                className="mr-2"
                                required
                            />
                            <label htmlFor="aceptaTerminos" className="text-sm">
                                Acepto los{' '}
                                <Link to="#" className="text-purple-400 hover:underline">
                                    términos y condiciones
                                </Link>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 mt-2 text-white border border-white rounded-md hover:bg-white hover:text-[#230341] transition-colors duration-300"
                        >
                            Registrarse
                        </button>
                    </form>

                    <p className="mt-4 text-center text-gray-400">
                        ¿Ya tienes una cuenta?{' '}
                        <Link to="/login" className="text-purple-400 hover:underline">
                            Inicia sesión aquí
                        </Link>
                    </p>
                </div>
            </main>

            <div>
                {/* FOOTER */}
                <footer className="bg-black px-20 py-4 flex justify-between items-center text-white text-xs">
                    <span>© 2025 SWEET TRIP.</span>
                    <div className="space-x-6">
                        <Link to="#" className="hover:underline">
                            Términos
                        </Link>
                        <Link to="#" className="hover:underline">
                            Privacidad
                        </Link>
                        <Link to="#" className="hover:underline">
                            Contactos
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default UserRegister;
