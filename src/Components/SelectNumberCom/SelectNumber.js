import { useState } from "react"
export default function SelectNumber(props) {

  const [current, setCurrent] = useState(true);
  
  const handleToggle = (e) => {
    console.log(e.target)
    setCurrent(!current)
  }

  return (
    <div
      className={`${props.class}ball ${current ? '' : 'active'}`}
      value={props.value}
      onClick={handleToggle}
    >
      {props.number}
    </div>
  )
}