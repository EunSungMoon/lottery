import axios from 'axios';
import { useState } from 'react';

export default function RecentNumber() {
  const [lottery, setLottery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleButton = () => {
    console.log('test')
    loadAxios()
  }

  const loadAxios = async () => {
    try {
      setError(null);
      setLottery(null);
      setLoading(true);
      let loadData = await axios.get(`https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=903`, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setLottery(loadData)
      console.log(loadData)
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <span>지난주 로또 번호 확인하기</span>
      <button onClick={handleButton}>click!</button>
    </div>
  )
}