import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import CartModal from './CartModal'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getCartItemCount, isCartOpen, setIsCartOpen } = useCart()
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="nav-logo">
              <span className="logo-icon">🍔</span>
              <span className="logo-text">FlavorFiesta</span>
            </Link>

            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <ul className="nav-links">
                <li>
                  <Link 
                    to="/" 
                    className={`nav-link ${isActive('/') ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/menu" 
                    className={`nav-link ${isActive('/menu') ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="nav-actions">
              <button 
                className="cart-btn"
                onClick={() => setIsCartOpen(true)}
              >
                <span className="cart-icon">🛒</span>
                {getCartItemCount() > 0 && (
                  <span className="cart-count">{getCartItemCount()}</span>
                )}
              </button>

              <button 
                className="hamburger"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isCartOpen && <CartModal />}
    </>
  )
}

export default Navbar
