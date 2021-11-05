import { Button } from 'antd';
import style from './Home.module.scss';

const Home = () => (
  <div className={style.content}>
    <div>目前版本: v{process.env.REACT_APP_VERSION}</div>
    <div className={style.button}>
      <Button>{'test11'}</Button>
    </div>
  </div>
);

export default Home;
