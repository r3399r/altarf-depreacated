import loadable from '@loadable/component';
import { Redirect, Route, Switch } from 'react-router-dom';

const route = {
  Home: loadable(() => import('./pages/home/Home')),
  Homework: loadable(() => import('./pages/homework/Homework')),
  Quiz: loadable(() => import('./pages/quiz/Quiz')),
  Matrix: loadable(() => import('./pages/matrix/Matrix')),
};

const AppRoutes = () => (
  <Switch>
    <Route exact={true} path="/homework" component={route.Homework} />
    <Route exact={true} path="/quiz" component={route.Quiz} />
    <Route exact={true} path="/matrix" component={route.Matrix} />
    <Route exact={true} path="/" component={route.Home} />
    <Redirect to="/" />
  </Switch>
);

export default AppRoutes;
