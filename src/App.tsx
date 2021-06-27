import { useEffect } from 'react';
import AppRoutes from './Routes';
import { initParameters } from './services/parameterService';
import { getMe } from './services/userService';

const App = () => {
  useEffect(() => {
    initParameters();

    getMe();
  }, []);

  return <AppRoutes />;
};

export default App;
