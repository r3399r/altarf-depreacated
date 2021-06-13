import loadable from '@loadable/component';
import { Redirect, Route, Switch } from 'react-router-dom';

const route = {
  Home: loadable(() => import('./pages/home/Home')),
  Quiz: loadable(() => import('./pages/quiz/Quiz')),
  Matrix: loadable(() => import('./pages/matrix/Matrix')),
};

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact={true} path="/quiz" component={route.Quiz} />
      <Route exact={true} path="/matrix" component={route.Matrix} />
      <Route exact={true} path="/" component={route.Home} />
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRoutes;
