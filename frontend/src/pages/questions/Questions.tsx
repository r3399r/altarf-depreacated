import { useHistory } from 'react-router-dom';
import { QUESTIONS } from 'src/constants/pages';
import style from './Questions.module.scss';

const Questions = () => {
  const history = useHistory();

  const onQestionClick = (path: string) => () => {
    history.push(`questions/${path}`);
  };

  return (
    <div className={style.self}>
      <div className={style.yellow} onClick={onQestionClick(QUESTIONS.DIFFERENCE)} role="button">
        家教班與補習班的差異？
      </div>
      <div className={style.blue} onClick={onQestionClick(QUESTIONS.RANDOM)} role="button">
        學習資源中的「亂數練習」是？
      </div>
      <div className={style.green} onClick={onQestionClick(QUESTIONS.BANK)} role="button">
        學習資源中的「題庫抓題」是？
      </div>
      <div className={style.orange} onClick={onQestionClick(QUESTIONS.SELF_TAUGHT)} role="button">
        學習資源中的「自我教學」是？
      </div>
    </div>
  );
};

export default Questions;
