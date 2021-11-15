import style from './App.module.scss';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AppRoutes from './Routes';

const App = () => (
  <div>
    <div className={style.navbar}>
      <Navbar />
    </div>
    <div className={style.container}>
      <div className={style.routes}>
        <AppRoutes />
      </div>
      <Footer />
    </div>
  </div>
);

export default App;
