import { useState } from 'react';
import './Home.css';
import heroImg from '../../assets/2.jpg';

const propertyTypes = ['Property type', 'House', 'Apartment', 'Condo', 'Borey', 'Land', 'Villa'];

const locations = [
    {
        id: 1,
        name: 'PHNOM PENH',
        img: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1518343116185890394/original/5941e318-2979-428e-8b5b-1c5fa2f1ed88.jpeg',
        listings: 120,
    },
    {
        id: 2,
        name: 'CHAMKAMORN',
        img: 'https://www.phnompenhbesthotels.com/data/Photos/450x450w/17322/1732242/1732242558.JPEG',
        listings: 85,
    },
    {
        id: 3,
        name: 'BKKI',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbDaRLVawS4DXvmx7x3dxg99cg1_qpmyrmfvQGloXaSQZ_BjrBIsmuoXgN&s=10',
        listings: 64,
    },
    {
        id: 4,
        name: 'DOUN PENH',
        img: 'https://s1.rea.global/img/raw/realestate_kh/kh/67441dbb1930b4f9fe103e543426a6ce.jpg',
        listings: 47,
    },
];

const LocationIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const SearchIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const ChevronIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

export default function Home() {
    const [location, setLocation] = useState('');
    const [propertyType, setPropertyType] = useState('Property type');

    const handleSearch = (e) => {
        e.preventDefault();
    };

    return (
        <main className="home">
            {/* ── Hero Section ── */}
            <section className="hero" aria-label="Hero section">
                <div className="hero-inner">

                    {/* Left: text + search */}
                    <div className="hero-content">
                        <h1 className="hero-heading">
                            Modern living for<br />everyone
                        </h1>
                        <p className="hero-sub">
                            We provide a complete service for the sale, purchase<br />
                            or rental of real estate.
                        </p>

                        {/* Search bar */}
                        <form className="hero-search" onSubmit={handleSearch} role="search">
                            <div className="search-field search-location">
                                <span className="search-icon"><LocationIcon /></span>
                                <input
                                    id="hero-location-input"
                                    type="text"
                                    className="search-input"
                                    placeholder="Search of location"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    aria-label="Search by location"
                                />
                            </div>

                            <div className="search-divider" />

                            <div className="search-field search-type">
                                <select
                                    id="hero-property-type"
                                    className="search-select"
                                    value={propertyType}
                                    onChange={(e) => setPropertyType(e.target.value)}
                                    aria-label="Select property type"
                                >
                                    {propertyTypes.map((t) => (
                                        <option key={t} value={t}>{t}</option>
                                    ))}
                                </select>
                                <span className="select-chevron"><ChevronIcon /></span>
                            </div>

                            <button type="submit" className="search-btn" id="hero-search-btn">
                                <SearchIcon />
                                <span>Search</span>
                            </button>
                        </form>
                    </div>

                    {/* Right: hero image with dot decoration */}
                    <div className="hero-visual">
                        <div className="dot-grid dot-grid-top" aria-hidden="true" />
                        <div className="hero-img-wrap">
                            <img
                                src={heroImg}
                                alt="Modern real estate property"
                                className="hero-img"
                            />
                        </div>
                        <div className="dot-grid dot-grid-bottom" aria-hidden="true" />
                    </div>

                </div>
            </section>

            {/* ── Locations Section ── */}
            <section className="locations" aria-label="Available locations">
                <div className="locations-inner">
                    <h2 className="locations-heading">We are available in many location</h2>

                    <div className="locations-grid">
                        {locations.map(({ id, name, img, listings }, idx) => (
                            <a
                                key={id}
                                href="#"
                                className={`location-card location-card--${idx % 2 === 0 ? 'tall' : 'short'}`}
                                aria-label={`Explore properties in ${name}`}
                            >
                                <img
                                    src={img}
                                    alt={name}
                                    className="location-card-img"
                                    loading="lazy"
                                />
                                <div className="location-card-overlay" />
                                <div className="location-card-info">
                                    <span className="location-card-name">{name}</span>
                                    <span className="location-card-count">{listings} listings</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
