import { useState } from "react"
import RecentNumber from '../Components/RecentNumberCom/RecentNumber';
import ExcludingNumber from '../Components/ExcludingNumberCom/ExcludingNumber';
import Lottery from '../Components/LotteryCom/Lottery';

export default function MainPage() {
  const [lottery, setLottery] = useState([]);
  const [clicked, setClicked] = useState('');
  const [newArray, setNewArray] = useState([])

  let btns = Array(45).fill().map((v, i) => i + 1);
  const SETTING = {
    name: "LUCKY LOTTO!",
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
    console.log([...lotto])
    setLottery([...lotto])
  }

  const handleChange = (e) => {
    console.log(e.target)
    setClicked(e.target.textContent)
    setNewArray(newArray => [...newArray, clicked])
    const set = new Set(newArray)
    const uniqueArr = [...set].slice(1)
    console.log(uniqueArr)
  }

  return (
    <main>
      <article className="exclusion" onClick={handleChange}>
        <ExcludingNumber btns={btns}/>
      </article>
      <article>
        <RecentNumber />
      </article>
      <article>
        <Lottery onclick={handleClick} lottery={lottery} />
      </article>
    </main>
  )
}