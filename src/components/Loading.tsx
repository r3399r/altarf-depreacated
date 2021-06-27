import { Spin } from 'antd';
import style from './Loading.module.scss';

const Loading = () => (
  <div className={style.loading}>
    <Spin />
  </div>
);

export default Loading;
