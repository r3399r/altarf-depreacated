import { useHistory } from 'react-router';
import { LEARNING } from 'src/constants/pages';
import style from './Learning.module.scss';

const Learning = () => {
  const history = useHistory();

  const onServiceClick = (path: string) => () => {
    history.push(`learning/${path}`);
  };

  return (
    <div className={style.self}>
      <h2>請選擇服務</h2>
      <div className={style.blocks}>
        <div className={style.yellow} onClick={onServiceClick(LEARNING.RANDOM)} role="button">
          亂數練習
        </div>
        <div className={style.blue} onClick={onServiceClick(LEARNING.BANK)} role="button">
          題庫抓題
        </div>
        <div className={style.green} onClick={onServiceClick(LEARNING.SELF_TAUGHT)} role="button">
          自我教學
        </div>
      </div>
    </div>
  );
};

export default Learning;
