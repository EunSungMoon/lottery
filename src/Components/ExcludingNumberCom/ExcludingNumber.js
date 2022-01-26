import SelectNumber from '../SelectNumberCom/SelectNumber';

export default function ExcludingNumber({btns}) {

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