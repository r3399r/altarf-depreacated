import { useEffect, useState } from 'react';
import Loading from 'src/components/Loading';
import { getLink } from 'src/services/authService';
import style from './Login.module.scss';

const Login = () => {
  const [link, setLink] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getLink().then((res: string) => {
      setLink(res);
      setIsLoading(false);
    });
  }, []);

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
