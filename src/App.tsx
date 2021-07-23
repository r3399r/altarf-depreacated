import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from './redux/store';
import AppRoutes from './Routes';
import { initParameters } from './services/parameterService';
import { getMe } from './services/userService';

const App = () => {
  const history = useHistory();
  const { auth } = useSelector((rootState: RootState) => rootState);

  useEffect(() => {
    initParameters();
  }, []);

  useEffect(() => {
    if (auth.isLogin)
      getMe().catch(() => {
        history.push('register');
      });
  }, [auth.isLogin, history]);

  return <AppRoutes />;
};

export default App;
