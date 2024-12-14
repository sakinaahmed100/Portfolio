import { Link } from 'react-router-dom';
import "../styles/navbar.css"

function Navbar() {
  return (
    <nav>
        <div>
          {/* logo */}
          <a href="/" className="logo">
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40" fill="none">
      <rect width="120" height="40" rx="8" fill="#4CAF50"/>
      <text x="50%" y="50%" fill="white" font-size="16" font-family="Arial, sans-serif" font-weight="bold" text-anchor="middle" dominant-baseline="middle">
        LOGO
      </text>
    </svg>
</a>

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
