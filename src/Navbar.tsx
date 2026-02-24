import { useTheme } from './Themecontext'
import { FaMoon, FaSun } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="navbar">
      
      {/* LOGO */}
      <Link to="/" className="logo">
        Veeti
      </Link>

      {/* NAV LINKS */}
      <div className="nav-links">
        <NavLink to="/projektit" className="nav-item">
          Projektit
        </NavLink>

        <NavLink to="/taidot" className="nav-item">
          Taidot
        </NavLink>

        <NavLink to="/contact" className="nav-item">
          Contact
        </NavLink>
      </div>

      {/* THEME TOGGLE */}
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </button>

    </nav>
  )
}
