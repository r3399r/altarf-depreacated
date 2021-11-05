import style from './App.module.scss';
import Navbar from './components/Navbar';
import AppRoutes from './Routes';

const App = () => (
  <div>
    <Navbar />
    <div className={style.container}>
      <AppRoutes />
    </div>
  </div>
);

export default App;
