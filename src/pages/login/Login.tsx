import { message } from 'antd';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from 'src/components/Loading';
import { getLink, loginByCode } from 'src/services/authService';
import style from './Login.module.scss';

const Login = () => {
  const [link, setLink] = useState<string>();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getLink().then((res: string) => {
      setLink(res);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const params = queryString.parse(location.search);
    if (params.code !== undefined && params.state !== undefined) {
      setIsLoading(true);
      loginByCode(params.code as string, params.state as string)
        .then(() => {
          message.success('登入成功');
        })
        .catch(() => {
          message.error('登入失敗');
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [location]);

  if (isLoading) return <Loading />;

  return (
    <div className={style.content}>
      <a role="button" href={link}>
        連結
      </a>
    </div>
  );
};

export default Login;
