import SelectNumber from '../SelectNumberCom/SelectNumber';

export default function ExcludingNumber() {

  let numbers = Array(45);
  let btns = numbers.fill()
  btns.forEach(function (btn, index) {
    btns[index] = index + 1
  })
  console.log(btns)

  return (
    <>
      <SelectNumber btns={btns} key={btns} />
    </>
  )
}