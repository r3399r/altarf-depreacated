import { Button, message } from 'antd';
import queryString from 'query-string';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { loginByCode, loginBySavedToken } from 'src/services/authService';
import style from './Home.module.scss';

const Home = () => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const params = queryString.parse(location.search);
    if (params.code !== undefined && params.state !== undefined)
      loginByCode(params.code as string, params.state as string)
        .then(() => {
          message.success('登入成功');
        })
        .catch(() => {
          message.error('登入失敗');
        });
    else
      loginBySavedToken().catch(() => {
        message.warning('請重新登入');
      });
  }, [location]);

  const onClick = (url: string) => () => {
    history.push(url);
  };

  return (
    <div className={style.content}>
      <div>目前版本: v{process.env.REACT_APP_VERSION}</div>
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
