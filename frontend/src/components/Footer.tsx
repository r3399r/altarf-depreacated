import { useMediaPredicate } from 'react-media-hook';
import { MEDIA } from 'src/constants/media';
import useWindowDimensions from 'src/hooks/WindowDimensions';
import QrCode from 'src/images/line-qrcode.jpg';
import style from './Footer.module.scss';

const Footer = () => {
  const screenSize = useWindowDimensions();
  const biggerThanSm = useMediaPredicate(MEDIA.SM);
  const mapWidth = biggerThanSm ? 420 : screenSize.width - 20;
  const mapHeight = mapWidth * 0.7;

  return (
    <div className={style.self}>
      <div className={style.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.928750462598!2d121.43757181405597!3d25.171883538906265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a55a02fb3011%3A0xa0dc49fd7a8f1329!2zMjUx5paw5YyX5biC5reh5rC05Y2A6YeN5bu66KGXNjPomZ8!5e0!3m2!1szh-TW!2stw!4v1636169932789!5m2!1szh-TW!2stw"
          width={mapWidth}
          height={mapHeight}
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
          title="map"
        />
      </div>
      <div>
        <div>地址：新北市淡水區重建街 63 號</div>
        <div>聯絡電話：0912-217-393 張老師</div>
        <div>LINE：r3399r 或掃描條碼</div>
        <img className={style.line} alt="" role="presentation" src={QrCode} />
      </div>
    </div>
  );
};

export default Footer;
