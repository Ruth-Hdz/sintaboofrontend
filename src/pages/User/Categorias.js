import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaHeart } from 'react-icons/fa';
import iconList from '../../utils/iconList';

const ITEM_WIDTH = 120; // Ancho de cada tarjeta
const ITEMS_VISIBLE = 5; // Cuántos mostrar al mismo tiempo
const SCROLL_AMOUNT = ITEM_WIDTH * ITEMS_VISIBLE; // Cuánto desplazar por clic

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/categorias');
        const data = await res.json();

        const categoriasConIconos = data.map(cat => {
          const iconoEncontrado = iconList.find(icon =>
            icon.name.toLowerCase().includes(cat.nombre.toLowerCase()) ||
            cat.nombre.toLowerCase().includes(icon.name.toLowerCase())
          );

          return {
            ...cat,
            iconoComponente: iconoEncontrado ? iconoEncontrado.icon : <FaHeart />
          };
        });

        setCategorias(categoriasConIconos);
      } catch (error) {
        console.error('Error al cargar categorías:', error);
      }
    };

    fetchCategorias();
  }, []);

  const scrollLeft = () => {
    const container = document.getElementById('categorias-container');
    container.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
    setScrollPosition(Math.max(0, scrollPosition - SCROLL_AMOUNT));
  };

  const scrollRight = () => {
    const container = document.getElementById('categorias-container');
    container.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
    setScrollPosition(scrollPosition + SCROLL_AMOUNT);
  };

  return (
    <div className="relative mt-8 mb-12 px-8">
      <h2 className="text-2xl font-semibold text-purple-900 mb-6 text-center">
        Explora Nuestras Categorías
      </h2>

      <div className="relative">
        {scrollPosition > 0 && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-purple-100 transition-all"
          >
            <FaChevronLeft className="text-purple-700 text-xl" />
          </button>
        )}

        <div
          id="categorias-container"
          className="flex overflow-x-hidden space-x-8 py-4 px-2"
          style={{
            scrollBehavior: 'smooth',
            maxWidth: `${ITEM_WIDTH * ITEMS_VISIBLE}px`,
            margin: '0 auto',
          }}
        >
          {categorias.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col items-center w-[100px] px-4 py-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:bg-purple-50 flex-shrink-0"
              style={{ minWidth: `${ITEM_WIDTH}px` }}
            >
              <div className="text-3xl mb-2 text-purple-600">
                {cat.iconoComponente}
              </div>
              <span className="text-sm font-medium text-purple-900 text-center">
                {cat.nombre}
              </span>
            </div>
          ))}
        </div>

        {scrollPosition < ((categorias.length - ITEMS_VISIBLE) * ITEM_WIDTH) && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-purple-100 transition-all"
          >
            <FaChevronRight className="text-purple-700 text-xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Categorias;
