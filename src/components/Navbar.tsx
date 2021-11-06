import { MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import { useState } from 'react';
import { useMediaPredicate } from 'react-media-hook';
import { useHistory } from 'react-router';
import { MEDIA } from 'src/constants/media';
import Logo from 'src/images/logo.png';
import style from './Navbar.module.scss';

const Navbar = () => {
  const history = useHistory();
  const biggerThanSm = useMediaPredicate(MEDIA.SM);
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onPageClick = (path: string) => () => {
    setVisible(false);
    history.push(path);
  };

  const LogoComponent = (
    <div className={style.logo} onClick={onPageClick('/')} role="button">
      <img alt="" role="presentation" src={Logo} />
      <div>ALTARF 數理學院</div>
    </div>
  );

  const PagesComponent = (
    <div className={style.pages}>
      <div onClick={onPageClick('/')} role="button">
        首頁
      </div>
      <div onClick={onPageClick('/learning-resource')} role="button">
        學習資源
      </div>
      <div onClick={onPageClick('/about-us')} role="button">
        認識我們
      </div>
      <div onClick={onPageClick('/about-class')} role="button">
        課程規劃
      </div>
      <div onClick={onPageClick('/common-questions')} role="button">
        常見問題
      </div>
    </div>
  );

  return biggerThanSm ? (
    <div className={style.self}>
      {LogoComponent}
      {PagesComponent}
    </div>
  ) : (
    <div className={style.self}>
      <MenuOutlined onClick={showDrawer} />
      {LogoComponent}
      <Drawer placement="left" onClose={onClose} closable={false} visible={visible}>
        {PagesComponent}
      </Drawer>
    </div>
  );
};

export default Navbar;
