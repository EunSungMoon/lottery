export default function SelectNumber(props) {
  return (
    <div className="selectBtnWrap">
      {props.btns.map(btn => {
        return (
          <div value={btn} key={btn}>
            {btn}
          </div>
        )
      })}
    </div>
  )
}