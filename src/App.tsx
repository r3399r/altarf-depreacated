import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from './redux/store';
import AppRoutes from './Routes';
import { loginBySavedToken } from './services/authService';
import { initParameters } from './services/parameterService';
import { getMe } from './services/userService';

const App = () => {
  const history = useHistory();
  const { auth } = useSelector((rootState: RootState) => rootState);

  useEffect(() => {
    initParameters().then(loginBySavedToken);
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
