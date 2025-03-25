import CollabLogo from '../../assets/logos/Collab.png'
import './Header.css'

const Header = () => {
    return(
<div className="header">
        <div className="logo">
          <img src={CollabLogo} alt="Collab" className="logo"/>
        </div>
        <ul className="nav-links">
          <li>Dashboard</li>
          <li>Campaigns</li>
          <li>Influencers</li>
          <li>Payments</li>
          <li>Analytics</li>
          <li>Settings</li>
        </ul>
      </div>
    )
}

export default Header