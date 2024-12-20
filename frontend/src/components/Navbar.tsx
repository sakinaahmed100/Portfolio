import { Link } from 'react-router-dom';
import "../styles/navbar.css"
import   logo  from "../assets/logo.svg"

function Navbar() {
  return (
    <nav>
      <div className='logo'>
      <img src={logo} alt="Logo" className="logo_img" />
      </div>

      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;
