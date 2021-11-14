import loadable from '@loadable/component';
import { Redirect, Route, Switch } from 'react-router-dom';

const route = {
  Landing: loadable(() => import('./pages/landing/Landing')),
  Learning: loadable(() => import('./pages/learning/Learning')),
  Random: loadable(() => import('./pages/learning/Random')),
  Bank: loadable(() => import('./pages/learning/Bank')),
  Interactive: loadable(() => import('./pages/learning/Interactive')),
  AboutClass: loadable(() => import('./pages/aboutClass/AboutClass')),
  CommonQuestions: loadable(() => import('./pages/commonQuestions/CommonQuestions')),
  User: loadable(() => import('./pages/user/User')),
};

const AppRoutes = () => (
  <Switch>
    <Route exact={true} path="/learning" component={route.Learning} />
    <Route exact={true} path="/learning/random" component={route.Random} />
    <Route exact={true} path="/learning/bank" component={route.Bank} />
    <Route exact={true} path="/learning/interactive" component={route.Interactive} />
    <Route exact={true} path="/about-class" component={route.AboutClass} />
    <Route exact={true} path="/common-questions" component={route.CommonQuestions} />
    <Route exact={true} path="/user" component={route.User} />
    <Route exact={true} path="/" component={route.Landing} />
    <Redirect to="/" />
  </Switch>
);

export default AppRoutes;
