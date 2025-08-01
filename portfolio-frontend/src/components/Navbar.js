import { Link } from 'react-router-dom';
import './Navbar.css'; // import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-link">Home</Link>
      </div>

      <div className="nav-right">
        <Link to="/aboutme" className="nav-link">About Me</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/courses" className="nav-link">Courses</Link>
        <Link to="/books" className="nav-link">Books</Link>
        <Link to="/certifications" className="nav-link">Certifications</Link>
      </div>
    </nav>
  );
}

export default Navbar;


