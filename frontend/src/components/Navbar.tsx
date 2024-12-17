import { Link } from 'react-router-dom';
import "../styles/navbar.css"

function Navbar() {
  return (
    <nav>
      <div>
 


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
