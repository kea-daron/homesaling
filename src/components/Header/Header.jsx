import { useState } from 'react';
import './Header.css';
import logo from '../../assets/1.jpg';

const navLinks = [
  { label: 'Buy', href: '#' },
  { label: 'Rent', href: '#' },
  { label: 'Condo', href: '#' },
  { label: 'Boreys', href: '#' },
  { label: 'Land', href: '#' },
  { label: 'About us', href: '#' },
];



export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Buy');

  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <a href="#" className="header-logo" aria-label="Real Estate Home">
          <img src={logo} alt="Real Estate logo" className="header-logo-img" />
          <span className="header-logo-text">Real Estate</span>
        </a>

        {/* Desktop Nav */}
        <nav className="header-nav" aria-label="Main navigation">
          <ul className="header-nav-list">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`header-nav-link${activeLink === label ? ' active' : ''}`}
                  onClick={() => setActiveLink(label)}
                >
                  {label}
                  <span className="nav-link-underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Buttons */}
        <div className="header-cta">
          <a href="#login" className="btn btn-outline" id="header-login-btn">
            Login
          </a>
          <a href="#register" className="btn btn-solid" id="header-register-btn">
            Register
          </a>
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
            <a href="#login" className="btn btn-outline" onClick={() => setMenuOpen(false)}>Login</a>
            <a href="#register" className="btn btn-solid" onClick={() => setMenuOpen(false)}>Register</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
