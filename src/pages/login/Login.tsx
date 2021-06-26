import { getLink } from 'src/services/authService';
import style from './Login.module.scss';

const Login = () => (
  <div className={style.content}>
    <a role="button" href={getLink()}>
      連結
    </a>
  </div>
);

export default Login;
