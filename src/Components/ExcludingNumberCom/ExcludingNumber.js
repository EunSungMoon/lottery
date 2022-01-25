import SelectNumber from '../SelectNumberCom/SelectNumber';

export default function ExcludingNumber() {

  let btns = Array(45).fill().map((v, i) => i + 1);

  return (
    <>
      <div className='selectBtnWrap'>
        {btns.map(btn => {
          return (
            <SelectNumber class={btn} value={btn} key={btn} number={btn} />
          )
        })}
      </div>
    </>
  )
}