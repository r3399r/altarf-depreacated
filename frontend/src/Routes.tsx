import loadable from '@loadable/component';
import { Redirect, Route, Switch } from 'react-router-dom';

const route = {
  Landing: loadable(() => import('./pages/landing/Landing')),
  LearningResource: loadable(() => import('./pages/learningResource/LearningResource')),
  AboutUs: loadable(() => import('./pages/aboutUs/AboutUs')),
  AboutClass: loadable(() => import('./pages/aboutClass/AboutClass')),
  CommonQuestions: loadable(() => import('./pages/commonQuestions/CommonQuestions')),
};

const AppRoutes = () => (
  <Switch>
    <Route exact={true} path="/learning-resource" component={route.LearningResource} />
    <Route exact={true} path="/about-us" component={route.AboutUs} />
    <Route exact={true} path="/about-class" component={route.AboutClass} />
    <Route exact={true} path="/common-questions" component={route.CommonQuestions} />
    <Route exact={true} path="/" component={route.Landing} />
    <Redirect to="/" />
  </Switch>
);

export default AppRoutes;
