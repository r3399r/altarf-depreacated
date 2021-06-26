import loadable from '@loadable/component';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RootState } from './redux/store';

const route = {
  Login: loadable(() => import('./pages/login/Login')),
  Home: loadable(() => import('./pages/home/Home')),
  Homework: loadable(() => import('./pages/homework/Homework')),
  Quiz: loadable(() => import('./pages/quiz/Quiz')),
  Matrix: loadable(() => import('./pages/matrix/Matrix')),
};

const AppRoutes = () => {
  const { auth } = useSelector<RootState, RootState>((state: RootState) => state);

  if (!auth.isLogin)
    return (
      <Switch>
        <Route exact={true} path="/login" component={route.Login} />
        <Route exact={true} path="/" component={route.Home} />
        <Redirect to="/login" />
      </Switch>
    );

  return (
    <Switch>
      <Route exact={true} path="/homework" component={route.Homework} />
      <Route exact={true} path="/quiz" component={route.Quiz} />
      <Route exact={true} path="/matrix" component={route.Matrix} />
      <Route exact={true} path="/" component={route.Home} />
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRoutes;
