import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import style from './Home.module.scss';

const Home = () => {
  const history = useHistory();

  const onClick = (url: string) => () => {
    history.push(url);
  };

  return (
    <div className={style.content}>
      <div className={style.button}>
        <Button onClick={onClick('transition-matrix')}>轉移矩陣</Button>
      </div>
    </div>
  );
};

export default Home;
