import { useState } from "react"
import RecentNumber from '../Components/RecentNumberCom/RecentNumber';
import Lottery from '../Components/LotteryCom/Lottery';
import './MainPage.scss'

export default function MainPage() {
  const [lottery, setLottery] = useState([]);
  const [click, setClick] = useState(false);

  let btns = Array(45).fill().map((v, i) => i + 1);
  const SETTING = {
    count: 7,
    maxNumber: btns.length,
  };
  const lotto = new Set();

  const handleClick = () => {
    // 파라미터에서 디스트럭쳐링 할 수도 있음.
    const { count, maxNumber } = SETTING;

    while (lotto.size < count) {
      // 0~46이 아니라 실제 로또처럼 1~45가 나오게 끔 함.
      lotto.add(Math.floor(Math.random() * (maxNumber - 1)) + 1);
    }
    setLottery([...lotto])
    setClick(true)
  }

  return (
    <main id='main' className="container">
      <section>
        <Lottery onclick={handleClick} lottery={lottery} class={click ? 'margin-20px' : ''} />
      </section>
      <section>
        <RecentNumber />
      </section>
    </main>
  )
}