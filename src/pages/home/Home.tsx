import { Button } from 'antd';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from 'src/redux/store';
import style from './Home.module.scss';

const Home = () => {
  const history = useHistory();
  const { auth } = useSelector((rootState: RootState) => rootState);

  const onClick = (url: string, state?: string) => () => {
    history.push(url, state);
  };

  return (
    <div className={style.content}>
      <div>目前版本: v{process.env.REACT_APP_VERSION}</div>
      {!auth.isLogin && <Button onClick={onClick('login')}>登入</Button>}
      <div>ID: {auth.me?.creationId}</div>
      {/* <div className={style.button}>
        <Button onClick={onClick('matrix')} disabled={true}>
          學習
        </Button>
      </div> */}
      {/* <div className={style.button}>
        <Button onClick={onClick('homework')}>作業</Button>
      </div> */}
      {auth.me?.teachers === undefined && <div>告訴老師你的ID</div>}
      {auth.me?.teachers !== undefined &&
        auth.me.teachers[0].quizes.map((v: any) => (
          <div className={style.button} key={v.quizId}>
            <Button onClick={onClick('quiz', v.quizId)}>{v.label}</Button>
          </div>
        ))}
    </div>
  );
};

export default Home;
