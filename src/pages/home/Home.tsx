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
        <Button onClick={onClick('matrix')} disabled={true}>
          學習
        </Button>
      </div>
      <div className={style.button}>
        <Button onClick={onClick('homework')}>作業</Button>
      </div>
      <div className={style.button}>
        <Button onClick={onClick('quiz')}>測驗</Button>
      </div>
    </div>
  );
};

export default Home;
