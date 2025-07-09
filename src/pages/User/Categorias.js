import react from 'react';
import { FaHandHoldingHeart, FaTint, FaHeart, FaBook, FaFemale } from 'react-icons/fa';
const Categorias = () => {
  return (
    <div>
                 {/* Sección de Categorías */}
          <div className="text-center mt-8 mb-4">
            <h2 className="text-2xl font-semibold text-purple-900 mb-4">Categorías</h2>
            <div className="flex justify-center flex-wrap gap-10 px-4">
              <div className="flex flex-col items-center text-purple-900">
                <FaHandHoldingHeart className="text-3xl mb-2" />
                <span className="text-sm font-medium">Aceites De Masaje</span>
              </div>
              <div className="flex flex-col items-center text-purple-900">
                <FaTint className="text-3xl mb-2" />
                <span className="text-sm font-medium">Lubricantes E Hidratantes</span>
              </div>
              <div className="flex flex-col items-center text-purple-900">
                <FaHeart className="text-3xl mb-2" />
                <span className="text-sm font-medium">Juguetes Sexuales</span>
              </div>
              <div className="flex flex-col items-center text-purple-900">
                <FaBook className="text-3xl mb-2" />
                <span className="text-sm font-medium">Libros</span>
              </div>
              <div className="flex flex-col items-center text-purple-900">
                <FaFemale className="text-3xl mb-2" />
                <span className="text-sm font-medium">Lencería</span>
              </div>
            </div>
          </div>
    </div>
  );
}   
export default Categorias;