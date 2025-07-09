import React from 'react';
import { FaCreditCard, FaBoxOpen, FaLock } from 'react-icons/fa';

const Banner = () => {
  return (
    <div>
      {/* Banner principal */}
      <div className="relative">
        <img
          src={require('../../assets/banner.png')}
          alt="Banner"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Texto encima de la imagen */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h2 className="text-4xl font-bold mb-2">Abraza la pasión</h2>
          <p className="text-lg max-w-xl mb-4">
            ¡Donde la experiencia se encuentra con la emoción! Descubre tu rayo de placer.
          </p>
          <button className="bg-white text-purple-900 font-semibold px-6 py-2 rounded-full hover:bg-purple-200 transition">
            Compra Ahora
          </button>
        </div>
      </div>

      {/* Barrita de íconos inferior */}
      <div
        style={{ backgroundColor: '#C4A7E7' }}
        className="flex justify-around items-center text-white py-4">
        <div className="flex flex-col items-center text-center">
          <FaCreditCard className="text-2xl mb-1 text-red-500" />
          <div className="font-semibold">PAGO</div>
          <div className="text-xs">Discreto</div>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaBoxOpen className="text-2xl mb-1 text-red-500" />
          <div className="font-semibold">PAQUETERIA</div>
          <div className="text-xs">Discreta</div>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaLock className="text-2xl mb-1 text-red-500" />
          <div className="font-semibold">100%</div>
          <div className="text-xs">Seguro</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
