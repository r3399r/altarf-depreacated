import loadable from '@loadable/component';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RootState } from './redux/store';

const route = {
  Login: loadable(() => import('./pages/login/Login')),
  Register: loadable(() => import('./pages/register/Register')),
  Home: loadable(() => import('./pages/home/Home')),
  Homework: loadable(() => import('./pages/homework/Homework')),
  Quiz: loadable(() => import('./pages/quiz/Quiz')),
  Matrix: loadable(() => import('./pages/matrix/Matrix')),
};

const AppRoutes = () => {
  const { auth } = useSelector((rootState: RootState) => rootState);

  if (auth.me === null)
    return (
      <Switch>
        <Route exact={true} path="/login" component={route.Login} />
        <Route exact={true} path="/register" component={route.Register} />
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
