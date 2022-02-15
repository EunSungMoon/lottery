export default function Lottery(props) {

  return (
    <div className="drawNumber">
      <div className="titleWrap">
        <h2>당첨번호 추첨하기</h2>
      </div>
      <div className="lotto-resultWrap">
        <button className='lottoBtn' onClick={props.onclick}>번호뽑기</button>
        <div className={`lotto-result ${props.class}`}>
          {
            props.lottery.map(v => {
              switch (true) {
                case (v < 11):
                  return (
                    <div className={`yellow ball`} key={v}>{v}</div>
                  );
                case (v < 21):
                  return (
                    <div className={`blue ball`} key={v}>{v}</div>
                  );
                case (v < 31):
                  return (
                    <div className={`red ball`} key={v}>{v}</div>
                  );
                case (v < 41):
                  return (
                    <div className={`black ball`} key={v}>{v}</div>
                  );
                case (v < 46):
                  return (
                    <div className={`green ball`} key={v}>{v}</div>
                  );
                default:
                  break;
              }
            })
          }
        </div>
      </div>
    </div >
  )
}