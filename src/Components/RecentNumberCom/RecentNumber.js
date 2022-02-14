import axios from 'axios';
import { useEffect, useState } from 'react';
import RecentNumberCom from './RecentNumberCom';

export default function RecentNumber() {
  const [lotterys, setLotterys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadAxios = async () => {
    try {
      setError(null);
      setLotterys(null);
      setLoading(true);
      const loadData = await axios.get('http://15.164.62.156:9000/api/lottery/second/', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setLotterys(loadData.data)
    }
    catch (error) {
      setError(error)
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    loadAxios()
    return lotterys;
  }, []);
  if (loading) return <div>로딩중...</div>
  if (error) return <div>에러가 발생했습니다.</div>
  if (!lotterys) return null;

  return (
    <div className='recentWrap row'>
      <div className='titleWrap'>
        <h2>지난 회차 당첨번호</h2>
      </div>
      {lotterys.map(lottery => (
        <div className='recentLotto col-6' key={lottery.number}>
          <p>{lottery.number}회</p>
          <RecentNumberCom test={lottery.n1} />
          <RecentNumberCom test={lottery.n2} />
          <RecentNumberCom test={lottery.n3} />
          <RecentNumberCom test={lottery.n4} />
          <RecentNumberCom test={lottery.n5} />
          <RecentNumberCom test={lottery.n6} />
          <span className='bonus'>+</span>
          <RecentNumberCom test={lottery.n7} />
        </div>
      ))}
      <div>
      </div>
    </div>
  )
}