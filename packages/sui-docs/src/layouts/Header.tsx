import { Link } from "react-router-dom"
import IcoLogo from '../assets/icon/ico-logo.svg?react'

const Header = () => {
  return (
    <div>
      <header className="sui-header">
        <div className="sui-header__inner">
          <IcoLogo />
          <h1>Sen UI</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/guide">Guide</Link></li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header