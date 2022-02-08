import axios from 'axios';
import { useEffect, useState } from 'react';

export default function RecentNumber() {
  const [lottery, setLottery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadAxios = async () => {
    try {
      setError(null);
      setLottery(null);
      setLoading(true);
      const loadData = await axios.get('http://15.164.62.156:8000/api/lottery/', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setLottery(loadData.data)
      console.log(loadData)
    }
    catch (error) {
      setError(error)
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    loadAxios()
    return lottery;
  }, []);
  if (loading) return <div>로딩중...</div>
  if (error) return <div>에러가 발생했습니다.</div>
  if (!lottery) return null;

  return (
    <div>
      <span>{lottery.number}회 로또 번호 확인하기</span>
      <span>{lottery.date}</span>
      <div>
        {lottery.n1}, {lottery.n2}, {lottery.n3}, {lottery.n4}, {lottery.n5}, {lottery.n6}, {lottery.n7}
      </div>
    </div>
  )
}