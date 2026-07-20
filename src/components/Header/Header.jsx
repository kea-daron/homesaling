import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/1.jpg';

const navLinks = [
  { label: 'Buy', href: '/buy' },
  { label: 'Rent', href: '/rent' },
  { label: 'Condo', href: '#' },
  { label: 'Boreys', href: '#' },
  { label: 'Land', href: '#' },
  { label: 'About us', href: '#' },
];



export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <Link to="/" className="header-logo" aria-label="Real Estate Home" onClick={() => setActiveLink('')}>
          <img src={logo} alt="Real Estate logo" className="header-logo-img" />
          <span className="header-logo-text">Real Estate</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="header-nav" aria-label="Main navigation">
          <ul className="header-nav-list">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                {href.startsWith('/') ? (
                  <Link
                    to={href}
                    className={`header-nav-link${activeLink === label ? ' active' : ''}`}
                    onClick={() => setActiveLink(label)}
                  >
                    {label}
                    <span className="nav-link-underline" />
                  </Link>
                ) : (
                  <a
                    href={href}
                    className={`header-nav-link${activeLink === label ? ' active' : ''}`}
                    onClick={() => setActiveLink(label)}
                  >
                    {label}
                    <span className="nav-link-underline" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Buttons */}
        <div className="header-cta">
          <Link to="/login" className="btn btn-outline" id="header-login-btn">
            Login
          </Link>
          <Link to="/register" className="btn btn-solid" id="header-register-btn">
            Register
          </Link>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className={`header-hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`header-mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          <ul className="header-mobile-nav-list">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`header-mobile-nav-link${activeLink === label ? ' active' : ''}`}
                  onClick={() => { setActiveLink(label); setMenuOpen(false); }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="header-mobile-cta">
            <Link to="/login" className="btn btn-outline" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link to="/register" className="btn btn-solid" onClick={() => setMenuOpen(false)}>Register</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
