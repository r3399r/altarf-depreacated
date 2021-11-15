import loadable from '@loadable/component';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LEARNING, PAGES } from './constants/pages';

const route = {
  Landing: loadable(() => import('./pages/landing/Landing')),
  Learning: loadable(() => import('./pages/learning/Learning')),
  Random: loadable(() => import('./pages/learning/Random')),
  Bank: loadable(() => import('./pages/learning/Bank')),
  SelfTaught: loadable(() => import('./pages/learning/SelfTaught')),
  AboutClass: loadable(() => import('./pages/aboutClass/AboutClass')),
  Questions: loadable(() => import('./pages/questions/Questions')),
  User: loadable(() => import('./pages/user/User')),
};

const AppRoutes = () => (
  <Switch>
    <Route exact={true} path={`/${PAGES.LEARNING}`} component={route.Learning} />
    <Route exact={true} path={`/${PAGES.LEARNING}/${LEARNING.RANDOM}`} component={route.Random} />
    <Route exact={true} path={`/${PAGES.LEARNING}/${LEARNING.BANK}`} component={route.Bank} />
    <Route
      exact={true}
      path={`/${PAGES.LEARNING}/${LEARNING.SELF_TAUGHT}`}
      component={route.SelfTaught}
    />
    <Route exact={true} path={`/${PAGES.ABOUT_CLASS}`} component={route.AboutClass} />
    <Route exact={true} path={`/${PAGES.QUESTIONS}`} component={route.Questions} />
    <Route exact={true} path={`/${PAGES.USER}`} component={route.User} />
    <Route exact={true} path="/" component={route.Landing} />
    <Redirect to="/" />
  </Switch>
);

export default AppRoutes;
