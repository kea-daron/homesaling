import { useState } from 'react';
import './Footer.css';
import logo from '../../assets/1.jpg';

const tourLinks = ['Features', 'Partners', 'Pricing', 'Product', 'Support'];
const companyLinks = ['About Us', 'Agents', 'Blog', 'Media', 'Contact Us'];

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* ── Column 1: Brand ── */}
        <div className="footer-brand">
          <a href="#" className="footer-logo" aria-label="Real Estate Home">
            <img src={logo} alt="Real Estate logo" className="footer-logo-img" />
            <span className="footer-logo-text">Real Estate</span>
          </a>

          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <div className="footer-socials">
            <a href="#" className="social-btn social-facebook" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#" className="social-btn social-twitter" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a href="#" className="social-btn social-instagram" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="#" className="social-btn social-linkedin" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>

          <p className="footer-copy">© 2021 . All rights reserved.</p>
        </div>

        {/* ── Column 2: Take a tour ── */}
        <div className="footer-col">
          <h3 className="footer-col-heading">Take a tour</h3>
          <ul className="footer-col-list">
            {tourLinks.map((link) => (
              <li key={link}>
                <a href="#" className="footer-col-link">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Column 3: Our Company ── */}
        <div className="footer-col">
          <h3 className="footer-col-heading">Our Company</h3>
          <ul className="footer-col-list">
            {companyLinks.map((link) => (
              <li key={link}>
                <a href="#" className="footer-col-link">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Column 4: Subscribe ── */}
        <div className="footer-subscribe">
          <h3 className="footer-col-heading">Subscribe</h3>
          <p className="footer-subscribe-desc">
            Subscribe to get latest property, blog news from us
          </p>
          <form className="footer-subscribe-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              id="footer-email-input"
              className="footer-email-input"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <button type="submit" className="footer-submit-btn" aria-label="Subscribe">
              <ArrowIcon />
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
}
