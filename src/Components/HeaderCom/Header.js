import logo from './img/logo_lottolotto.png';
import './Header.scss'
export default function Header() {
  return (
    <header id='header'>
      <div className='container'>
        <img src={logo} alt=""></img>
      </div>
    </header>
  )
}