import loadable from '@loadable/component';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LEARNING, PAGES, QUESTIONS } from './constants/pages';

const route = {
  Landing: loadable(() => import('./pages/landing/Landing')),
  Learning: loadable(() => import('./pages/learning/Learning')),
  Random: loadable(() => import('./pages/learning/Random')),
  Bank: loadable(() => import('./pages/learning/Bank')),
  SelfTaught: loadable(() => import('./pages/learning/SelfTaught')),
  AboutClass: loadable(() => import('./pages/aboutClass/AboutClass')),
  Questions: loadable(() => import('./pages/questions/Questions')),
  QuestionDifference: loadable(() => import('./pages/questions/Difference')),
  QuestionRandom: loadable(() => import('./pages/questions/Random')),
  QuestionBank: loadable(() => import('./pages/questions/Bank')),
  QuestionSelfTaught: loadable(() => import('./pages/questions/SelfTaught')),
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
    <Route
      exact={true}
      path={`/${PAGES.QUESTIONS}/${QUESTIONS.DIFFERENCE}`}
      component={route.QuestionDifference}
    />
    <Route
      exact={true}
      path={`/${PAGES.QUESTIONS}/${QUESTIONS.RANDOM}`}
      component={route.QuestionRandom}
    />
    <Route
      exact={true}
      path={`/${PAGES.QUESTIONS}/${QUESTIONS.BANK}`}
      component={route.QuestionBank}
    />
    <Route
      exact={true}
      path={`/${PAGES.QUESTIONS}/${QUESTIONS.SELF_TAUGHT}`}
      component={route.QuestionSelfTaught}
    />
    <Route exact={true} path={`/${PAGES.USER}`} component={route.User} />
    <Route exact={true} path="/" component={route.Landing} />
    <Redirect to="/" />
  </Switch>
);

export default AppRoutes;
