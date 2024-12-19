import { Link } from 'react-router-dom';
import "../styles/navbar.css"
import   Logo  from "../assets/logo.svg?react"

function Navbar() {
  return (
    <nav>
      <div className='logo'>
     <Logo/>
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
