export default function Lottery(props) {
  return (
    <div>
      <button>번호뽑기</button>
      <div className="lotto-result">
        {
          props.lottery.map(v => {
            return (
              <span className={`${v}lotto`} key={v}>{v}, </span>
            )
          })
        }
      </div>
    </div>
  )
}