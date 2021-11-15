import style from './Landing.module.scss';

const Landing = () => (
  <div>
    <h1>ALTARF 數理學院特色</h1>
    <div className={style.yellow}>
      <h2>邏輯思考，自主學習</h2>
      <div>
        <h3>訓練邏輯思考</h3>
        <p>
          數理科目本身就是一個需要大量邏輯思考的科目，不是公式背得愈多就愈厲害，尤其在升學的大考中，不太可能會有能夠直接套公式的題目，一般都會有解題思路、解題步驟，需要透過題意去聯想相關觀念，再透過些許步驟、計算以得到答案。
        </p>
        <p>
          敝學院致力於捨棄學校課本中大部分的公式，讓得到答案的過程更合情合理，而非不知所以然地一味套公式。
        </p>
      </div>
      <div>
        <h3>打下扎實基礎</h3>
        <p>
          要打下扎實基礎，並非有邏輯地解出答案就可以擁有，因為絕大部分的學生在一天過後就會忘記前一天學的一半，故要搭配不時的練習。
        </p>
        <p>在「學習資源」中提供基礎題型的練習，基礎題型在練習數十次後，即可打下扎實基礎。</p>
      </div>
      <div>
        <h3>培養自主學習</h3>
        <p>新課綱追求的並不在於誰算得快，而在於誰理解得快又好。</p>
        <p>
          學生對於基礎題型可以掌握九成以上後，已有一定的程度及信心，接下來是更多題型的練習，敝學院擁有一套上千題的大題庫，以章節、難易度區分，只要有心，就一定可以進步。
        </p>
      </div>
    </div>
    <div className={style.blue}>
      <h2>小班制家教班</h2>
      <div>
        <h3>彈性課程安排</h3>
        <p>
          上課是以<b>家教班</b>的形式，班上的學生人數為 6
          人以下，因此老師能夠非常了解每個學生的程度，並給予適當的課程安排。
        </p>
      </div>
      <div>
        <h3>隨時向老師發問</h3>
        <p>
          在大補習班中，一位老師面對上百位學生，若學生有問題想發問，要預約、等待，而且安排回答問題的會是教學經驗較淺的大學工讀生，無法滿足需求。
        </p>
        <p>
          在這邊，除了下課時間可以直接向老師發問，也可以拿起手機直接向老師的 LINE 提問，單純又方便。
        </p>
      </div>
      <div>
        <h3>戶外解謎活動</h3>
        <p>
          由於人數不多，出遊不會大費周章，所以老師會固定於每學期的期末考後帶大家到戶外進行一整天的活動，不額外收費。
        </p>
        <p>邏輯思考不只可以用在學校科目，也可以在戶外活動中享受邏輯思考的樂趣。</p>
      </div>
    </div>
    <div className={style.green}>
      <h2>回饋鄉里</h2>
      <div>
        <h3>在淡水，就很好</h3>
        <p>
          想學好數學，不一定要跑台北，省去往返於淡水與台北的舟車勞頓，省下來的時間可以獲得更合適的分配，睡更多的覺、讀更多的書。
        </p>
        <p>老師是土生土長的淡水人，很能夠體會學生通勤的辛勞。</p>
      </div>
      <div>
        <h3>揪團更划算</h3>
        <p>
          跟認識的夥伴一起學習，效果會更好，介紹朋友一起來，可以享有學費優惠，想了解更多，請洽詢我們。
        </p>
      </div>
    </div>
  </div>
);

export default Landing;
