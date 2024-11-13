import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
        <span className="name">
            Madhumita
        </span>

        <div className="navbar-links">
            <Link to="/" className="n-link">
            Home
            </Link>

            <Link to="/about" className="n-link">
            About
            </Link>

            <Link to="/contact" className="n-link">
            Contact
            </Link>
        </div>
    </div>
  )
}

export default Navbar