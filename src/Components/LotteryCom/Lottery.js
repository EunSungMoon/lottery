export default function Lottery(props) {
  return (
    <div>
      <button onClick={props.onclick}>번호뽑기</button>
      <div className="lotto-result">
        {
          props.lottery.map(v => {
            return (
              <span key={v}>{v}, </span>
            )
          })
        }
      </div>
    </div>
  )
}