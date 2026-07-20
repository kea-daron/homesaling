import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import heroImg from '../../assets/4.jpg';
import logoImg from '../../assets/1.png';

const HouseIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
    </svg>
);

const EyeIcon = ({ open }) => open ? (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
        <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
);

const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
);

const TwitterIcon = () => (
    <svg viewBox="0 0 24 24" fill="#1DA1F2" aria-hidden="true">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
);

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle login logic here
    };

    return (
        <div className="login-page">
            {/* ── Left: Hero image panel ── */}
            <div
                className="login-hero"
                aria-hidden="true"
                style={{ backgroundImage: `url(${heroImg})` }}
            >
                <div className="login-hero-overlay" />
                <div className="login-hero-text">
                    <p className="login-hero-welcome">Welcome to</p>
                    <p className="login-hero-brand">Real Estate</p>
                </div>
            </div>

            {/* ── Right: Form panel ── */}
            <div className="login-panel">
                <div className="login-form-wrap">

                    {/* Logo */}
                    <div className="login-logo">
                        <Link to="/" className="login-logo-link">
                            <img src={logoImg} alt="Real Estate logo" className="login-logo-img" />
                            <span className="login-logo-name">Real Estate</span>
                        </Link>
                    </div>

                    <h1 className="login-heading">Log in</h1>

                    <form className="login-form" onSubmit={handleSubmit} noValidate>

                        {/* Email */}
                        <div className="login-field-group">
                            <label htmlFor="login-email" className="login-label">
                                Email address or user name
                            </label>
                            <input
                                id="login-email"
                                type="text"
                                className="login-input"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                autoComplete="username"
                                placeholder=""
                            />
                        </div>

                        {/* Password */}
                        <div className="login-field-group">
                            <div className="login-label-row">
                                <label htmlFor="login-password" className="login-label">Password</label>
                                <button
                                    type="button"
                                    className="login-toggle-pw"
                                    onClick={() => setShowPassword(v => !v)}
                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                >
                                    <EyeIcon open={showPassword} />
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                            <input
                                id="login-password"
                                type={showPassword ? 'text' : 'password'}
                                className="login-input"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                autoComplete="current-password"
                                placeholder=""
                            />
                        </div>

                        {/* Forgot password */}
                        <div className="login-forgot-wrap">
                            <a href="#" className="login-forgot" id="login-forgot-btn">Forget your password</a>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="login-submit-btn"
                            id="login-submit-btn"
                        >
                            Log in
                        </button>
                    </form>

                    {/* Sign up prompt */}
                    <p className="login-signup-prompt">
                        Don't have an account?{' '}
                        <Link to="/register" className="login-signup-link" id="login-signup-link">Sign up</Link>
                    </p>

                    {/* OR divider */}
                    <div className="login-or-divider">
                        <span className="login-or-line" />
                        <span className="login-or-text">OR</span>
                        <span className="login-or-line" />
                    </div>

                    {/* Social buttons */}
                    <div className="login-socials">
                        <button type="button" className="login-social-btn" id="login-facebook-btn">
                            <FacebookIcon />
                            Continue with Facebook
                        </button>
                        <button type="button" className="login-social-btn" id="login-google-btn">
                            <GoogleIcon />
                            Continue with Google
                        </button>
                        <button type="button" className="login-social-btn" id="login-twitter-btn">
                            <TwitterIcon />
                            Continue with Twitter
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
