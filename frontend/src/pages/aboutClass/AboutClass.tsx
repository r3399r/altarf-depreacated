import style from './AboutClass.module.scss';
import Schedule from './components/Schedule';

const AboutClass = () => (
  <div>
    <div className={style.flex}>
      <div className={style.yellow}>
        <h1>班級</h1>
        <div className={style.center}>
          <p>
            高一數學班
            <br />
            高二數學班
            <br />
            高三數學進度班
            <br />
            高三數學複習班
          </p>
          <p>
            <i>確切班級時間請洽詢老師</i>
          </p>
        </div>
      </div>
      <div className={style.blue}>
        <h1>上課時間</h1>
        <div className={style.schedule}>
          <Schedule />
        </div>
        <p className={style.center}>
          平日晚上 19:30~21:30，2 小時
          <br />
          週末早上 09:00~11:30，2.5 小時
          <br />
          週末下午 14:00~16:30，2.5 小時
          <br />
          週末晚上 18:30~21:00，2.5 小時
        </p>
      </div>
    </div>
    <div className={style.green}>
      <h1>老師簡介</h1>
      <h2>數學張老師</h2>
      <div>
        <h3>學生時期</h3>
        <p>
          國小：新北市立淡水國小
          <br />
          國中：台北市立明德國中
          <br />
          高中：台北市中正高級中學
          <br />
          大學：國立台灣大學 工程科學與海洋工程學系
          <br />
          研究所：國立台灣大學 應用力學研究所
        </p>
        <p>
          高中期間有 5 次段考/模擬考 校排第 1<br />
          學測成績：數學 15、自然 14、英文 14、社會 14 (滿分15)
          <br />
          指考成績：數甲 81、數乙 92、化學 80.3、物理 90、英文 89.5 (滿分100)
          <br />
          大學期間獲得 2 次書卷獎 (系排名前 3 名)
          <br />
          研究所期間發表 2 篇學術論文於國際期刊
        </p>
      </div>
      <div>
        <h3>教學經驗</h3>
        <p>
          從高中畢業便開始家教，目前已教導逾 40
          名學生。學生能力從程度好到程度差，掌握所有學生讀書習慣並改善，讓程度好可以再更好，讓不喜歡數學變成不排斥數學。
        </p>
        <p>
          家教期間，指導的學生不乏程度好、程度差的高中生，也有五專生、高職生，有許多學生學到了我的數學。可惜的是，雖然想盡量讓更多人學習，但一天只有
          24
          小時，家教接再多，數量也有限。有鑑於此，決定建立此網站，旨在讓更多有心學習的人可以透過此網站提供的資源得到更多、學到更多
        </p>
      </div>
      <div>
        <h3>教學目的</h3>
        <ul>
          <li>
            對於沒信心的學生：希望學生們知道題目有難易度之分，「答錯」不代表「不會」，數學其實不難
          </li>
          <li>
            對於一知半解的學生：希望學生們知道，「答對」不代表「會」，真的學會才能答對更多題目
          </li>
          <li>對於一聽就懂的學生：學海無涯，舉一反三</li>
        </ul>
      </div>
    </div>
  </div>
);

export default AboutClass;
