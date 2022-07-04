import './Topbar.scss';
import logo from "../assets/logo.png"
//header sectin
export default function Topbar() {
  return (
    <div className='topbar'>
      <div className='wrapper'>
        <div className='left'>
          <a href="#Home">
            <img src={logo} alt="company logo"  width={156.67} height={33}/>
          </a>
        </div>
      </div>
    </div>
  )
}
