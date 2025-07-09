import Banner from './Banner';
import Categorias from './Categorias';
import Header from './Header';
import Recomendaciones from './Recomendaciones';

function HomePage() {
  return (
    <div>
      <Header />
      <Banner />
      <Categorias />
      <Recomendaciones />
    </div>
  );
}
export default HomePage;