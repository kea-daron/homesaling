import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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

const apartments = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
        title: 'Large 4-room apartment with a beautiful terrace',
        price: '$650',
        beds: 4,
        baths: 2,
        area: '6x7.5 m²',
        location: 'BKK1 Boeung Keng kang, Phnom Penh, Combodia',
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
        title: 'Large 4-room apartment with a beautiful terrace',
        price: '$650',
        beds: 4,
        baths: 2,
        area: '6x7.5 m²',
        location: 'BKK1 Boeung Keng kang, Phnom Penh, Combodia',
    },
    {
        id: 3,
        img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80',
        title: 'Large 4-room apartment with a beautiful terrace',
        price: '$650',
        beds: 4,
        baths: 2,
        area: '6x7.5 m²',
        location: 'BKK1 Boeung Keng kang, Phnom Penh, Combodia',
    },
    {
        id: 4,
        img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80',
        title: 'Large 4-room apartment with a beautiful terrace',
        price: '$650',
        beds: 4,
        baths: 2,
        area: '6x7.5 m²',
        location: 'BKK1 Boeung Keng kang, Phnom Penh, Combodia',
    },
    {
        id: 5,
        img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80',
        title: 'Large 4-room apartment with a beautiful terrace',
        price: '$650',
        beds: 4,
        baths: 2,
        area: '6x7.5 m²',
        location: 'BKK1 Boeung Keng kang, Phnom Penh, Combodia',
    },
];

const boreys = [
    {
        id: 1,
        img: 'https://images.realestate.com.kh/__sized__/listings/2019-06/64392411_551623215369612_5752299405189316608_o-thumbnail-750x562-70.jpeg',
        title: 'Large 4-room apartment with a beautiful terrace',
        price: '$650',
        beds: 4,
        baths: 2,
        area: '6x7.5 m²',
        location: 'BKK1 Boeung Keng kang, Phnom Penh, Combodia',
    },
    {
        id: 2,
        img: 'https://images.realestate.com.kh/listings/2022-02/2021-12-24__16-49-47__gate_house.jpeg',
        title: 'Large 4-room apartment with a beautiful terrace',
        price: '$650',
        beds: 4,
        baths: 2,
        area: '6x7.5 m²',
        location: 'BKK1 Boeung Keng kang, Phnom Penh, Combodia',
    },
    {
        id: 3,
        img: 'https://i.ytimg.com/vi/s-YM--8VRNQ/maxresdefault.jpg',
        title: 'Large 4-room apartment with a beautiful terrace',
        price: '$650',
        beds: 4,
        baths: 2,
        area: '6x7.5 m²',
        location: 'BKK1 Boeung Keng kang, Phnom Penh, Combodia',
    },
    {
        id: 4,
        img: 'https://images.realestate.com.kh/__sized__/listings/2021-05/2020-01-10__13-57-48__207_vw2hkdc-thumbnail-750x562-70.jpeg',
        title: 'Large 4-room apartment with a beautiful terrace',
        price: '$650',
        beds: 4,
        baths: 2,
        area: '6x7.5 m²',
        location: 'BKK1 Boeung Keng kang, Phnom Penh, Combodia',
    },
    {
        id: 5,
        img: 'https://images.realestate.com.kh/listings/2021-05/2020-01-10__13-49-44__180_wuiqzhr.jpeg',
        title: 'Large 4-room apartment with a beautiful terrace',
        price: '$650',
        beds: 4,
        baths: 2,
        area: '6x7.5 m²',
        location: 'BKK1 Boeung Keng kang, Phnom Penh, Combodia',
    },
];

const lastestPropertiesForSale = [
    {
        id: 1,
        img: 'https://content.knightfrank.com/property/htmo-dev-1097/images/cbf00db2-daab-4da7-b483-69e44b6e3318-0.jpg?cio=true&w=730',
        title: 'Large 4-room apartment with a beautiful terrace',
        price: '$650',
        beds: 4,
        baths: 2,
        area: '6x7.5 m²',
        location: 'BKK1 Boeung Keng kang, Phnom Penh, Combodia',
    },
    {
        id: 2,
        img: 'https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1103i215%2Fzzkr02wzkx3g41y2659z7na3c2i215&w=3840&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png',
        title: 'Large 4-room apartment with a beautiful terrace',
        price: '$650',
        beds: 4,
        baths: 2,
        area: '6x7.5 m²',
        location: 'BKK1 Boeung Keng kang, Phnom Penh, Combodia',
    },
    {
        id: 3,
        img: 'https://cdns3.estateweb.com/assets/9655/of/4/pro/34158311/main/1.jpg',
        title: 'Large 4-room apartment with a beautiful terrace',
        price: '$650',
        beds: 4,
        baths: 2,
        area: '6x7.5 m²',
        location: 'BKK1 Boeung Keng kang, Phnom Penh, Combodia',
    },
    {
        id: 4,
        img: 'https://resources.pamgolding.co.za/content/properties/202505/1188854/h/1188854_H_99.jpg?w=1000',
        title: 'Large 4-room apartment with a beautiful terrace',
        price: '$650',
        beds: 4,
        baths: 2,
        area: '6x7.5 m²',
        location: 'BKK1 Boeung Keng kang, Phnom Penh, Combodia',
    },
    {
        id: 5,
        img: 'https://i2.au.reastatic.net/800x600/28723ec1b7a30286b1b817f7f8769dc953480e7f94520308dd1459099d78a636/main.jpg',
        title: 'Large 4-room apartment with a beautiful terrace',
        price: '$650',
        beds: 4,
        baths: 2,
        area: '6x7.5 m²',
        location: 'BKK1 Boeung Keng kang, Phnom Penh, Combodia',
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

const BedIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 4v16M2 8h20v12H2M7 8v4" />
        <rect x="10" y="8" width="5" height="4" rx="1" />
    </svg>
);

const BathIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 6 C9 4.3 10.3 3 12 3 C13.7 3 15 4.3 15 6 L15 10" />
        <path d="M4 10 h16 v2 a8 8 0 0 1-16 0 v-2z" />
        <line x1="8" y1="21" x2="8" y2="19" />
        <line x1="16" y1="21" x2="16" y2="19" />
    </svg>
);

const AreaIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M3 9h18" />
    </svg>
);

const PinIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const ArrowLeftIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="15 18 9 12 15 6" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

export default function Home() {
    const [location, setLocation] = useState('');
    const [propertyType, setPropertyType] = useState('Property type');
    const [slideIndex, setSlideIndex] = useState(0);
    const visibleCount = 3;
    const maxIndex = apartments.length - visibleCount;

    const handlePrev = () => setSlideIndex((i) => Math.max(0, i - 1));
    const handleNext = () => setSlideIndex((i) => Math.min(maxIndex, i + 1));

    // Locations section scroll animation
    const locationsRef = useRef(null);
    useEffect(() => {
        const el = locationsRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('locations--visible');
                    observer.disconnect();
                }
            },
            { threshold: 0.12 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

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
            <section className="locations" aria-label="Available locations" ref={locationsRef}>
                <div className="locations-inner">
                    <h2 className="locations-heading">Popurlar Locations</h2>

                    <div className="locations-grid">
                        {locations.map(({ id, name, img, listings }, idx) => (
                            <a
                                key={id}
                                href="#"
                                className={`location-card location-card--${idx % 2 === 0 ? 'tall' : 'short'}`}
                                style={{ '--i': idx }}
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

            {/* ── Featured Apartments Section ── */}
            <section className="featured" aria-label="Featured serviced apartments">
                <div className="featured-inner">

                    {/* Header row */}
                    <div className="featured-header">
                        <div className="featured-header-left">
                            <h2 className="featured-heading">Featured Serviced Apartment</h2>
                            <p className="featured-sub">
                                Fulfill your career dreams, enjoy all the achievements of the city center<br />
                                and luxury housing to the fullest.
                            </p>
                        </div>
                        <div className="featured-controls">
                            <button
                                className="feat-arrow feat-arrow--prev"
                                onClick={handlePrev}
                                disabled={slideIndex === 0}
                                aria-label="Previous"
                                id="feat-prev-btn"
                            >
                                <ArrowLeftIcon />
                            </button>
                            <button
                                className="feat-arrow feat-arrow--next"
                                onClick={handleNext}
                                disabled={slideIndex >= maxIndex}
                                aria-label="Next"
                                id="feat-next-btn"
                            >
                                <ArrowRightIcon />
                            </button>
                            <Link to="/offers" className="feat-show-all" id="feat-show-all-btn">Show all offers</Link>
                        </div>
                    </div>

                    {/* Cards slider */}
                    <div className="featured-slider-wrap">
                        <div
                            className="featured-slider"
                            style={{ transform: `translateX(calc(-${slideIndex} * (100% / ${visibleCount} + 6px)))` }}
                        >
                            {apartments.map(({ id, img, title, price, beds, baths, area, location: loc }) => (
                                <div key={id} className="apt-card">
                                    <div className="apt-card-img-wrap">
                                        <img src={img} alt={title} className="apt-card-img" loading="lazy" />
                                    </div>
                                    <div className="apt-card-body">
                                        <h3 className="apt-card-title">{title}</h3>
                                        <p className="apt-card-price">Price From : <strong>{price}</strong></p>
                                        <div className="apt-card-specs">
                                            <span className="apt-spec"><BedIcon />{beds} Beds</span>
                                            <span className="apt-spec"><BathIcon />{baths} Bathrooms</span>
                                            <span className="apt-spec"><AreaIcon />{area}</span>
                                        </div>
                                        <p className="apt-card-location"><PinIcon />{loc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* ── Featured Boreys Section ── */}
            <section className="featured" aria-label="Featured Boreys">
                <div className="featured-inner">

                    {/* Header row */}
                    <div className="featured-header">
                        <div className="featured-header-left">
                            <h2 className="featured-heading">Featured Boreys</h2>
                            <p className="featured-sub">
                                Fulfill your career dreams, enjoy all the achievements of the city center<br />
                                and luxury housing to the fullest.
                            </p>
                        </div>
                        <div className="featured-controls">
                            <button
                                className="feat-arrow feat-arrow--prev"
                                onClick={handlePrev}
                                disabled={slideIndex === 0}
                                aria-label="Previous"
                                id="feat-prev-btn"
                            >
                                <ArrowLeftIcon />
                            </button>
                            <button
                                className="feat-arrow feat-arrow--next"
                                onClick={handleNext}
                                disabled={slideIndex >= maxIndex}
                                aria-label="Next"
                                id="feat-next-btn"
                            >
                                <ArrowRightIcon />
                            </button>
                            <Link to="/borey-offers" className="feat-show-all" id="feat-borey-show-all-btn">Show all offers</Link>
                        </div>
                    </div>

                    {/* Cards slider */}
                    <div className="featured-slider-wrap">
                        <div
                            className="featured-slider"
                            style={{ transform: `translateX(calc(-${slideIndex} * (100% / ${visibleCount} + 6px)))` }}
                        >
                            {boreys.map(({ id, img, title, price, beds, baths, area, location: loc }) => (
                                <div key={id} className="apt-card">
                                    <div className="apt-card-img-wrap">
                                        <img src={img} alt={title} className="apt-card-img" loading="lazy" />
                                    </div>
                                    <div className="apt-card-body">
                                        <h3 className="apt-card-title">{title}</h3>
                                        <p className="apt-card-price">Price From : <strong>{price}</strong></p>
                                        <div className="apt-card-specs">
                                            <span className="apt-spec"><BedIcon />{beds} Beds</span>
                                            <span className="apt-spec"><BathIcon />{baths} Bathrooms</span>
                                            <span className="apt-spec"><AreaIcon />{area}</span>
                                        </div>
                                        <p className="apt-card-location"><PinIcon />{loc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* ── Lastest Properties for sale Section ── */}
            <section className="featured" aria-label="Lastest Properties for sale">
                <div className="featured-inner">

                    {/* Header row */}
                    <div className="featured-header">
                        <div className="featured-header-left">
                            <h2 className="featured-heading">Lastest Properties for Sale</h2>
                            <p className="featured-sub">
                                Fulfill your career dreams, enjoy all the achievements of the city center<br />
                                and luxury housing to the fullest.
                            </p>
                        </div>
                        <div className="featured-controls">
                            <button
                                className="feat-arrow feat-arrow--prev"
                                onClick={handlePrev}
                                disabled={slideIndex === 0}
                                aria-label="Previous"
                                id="feat-prev-btn"
                            >
                                <ArrowLeftIcon />
                            </button>
                            <button
                                className="feat-arrow feat-arrow--next"
                                onClick={handleNext}
                                disabled={slideIndex >= maxIndex}
                                aria-label="Next"
                                id="feat-next-btn"
                            >
                                <ArrowRightIcon />
                            </button>
                            <Link to="/sale-offers" className="feat-show-all" id="feat-sale-show-all-btn">Show all offers</Link>
                        </div>
                    </div>

                    {/* Cards slider */}
                    <div className="featured-slider-wrap">
                        <div
                            className="featured-slider"
                            style={{ transform: `translateX(calc(-${slideIndex} * (100% / ${visibleCount} + 6px)))` }}
                        >
                            {lastestPropertiesForSale.map(({ id, img, title, price, beds, baths, area, location: loc }) => (
                                <div key={id} className="apt-card">
                                    <div className="apt-card-img-wrap">
                                        <img src={img} alt={title} className="apt-card-img" loading="lazy" />
                                    </div>
                                    <div className="apt-card-body">
                                        <h3 className="apt-card-title">{title}</h3>
                                        <p className="apt-card-price">Price From : <strong>{price}</strong></p>
                                        <div className="apt-card-specs">
                                            <span className="apt-spec"><BedIcon />{beds} Beds</span>
                                            <span className="apt-spec"><BathIcon />{baths} Bathrooms</span>
                                            <span className="apt-spec"><AreaIcon />{area}</span>
                                        </div>
                                        <p className="apt-card-location"><PinIcon />{loc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* ── About Us Section ── */}
            <section className="about" aria-label="About us">
                <div className="about-inner">

                    {/* Left: image with dot decoration */}
                    <div className="about-visual">
                        <div className="about-dot-grid about-dot-grid--tl" aria-hidden="true" />
                        <div className="about-dot-grid about-dot-grid--br" aria-hidden="true" />
                        <div className="about-img-wrap">
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80"
                                alt="Our real estate team"
                                className="about-img"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Right: text */}
                    <div className="about-content">
                        <h2 className="about-heading">About us</h2>
                        <p className="about-text">
                            We are a company that connects the world of real estate and finance.
                            We provide a complete service for the sale, purchase or rental of real estate.
                            Our advantage is more than 15 years of experience and soil in attractive locations
                            in Cambodia with branches in Phnom Penh and Siem Reap.
                        </p>
                        <p className="about-text">
                            We have a connection to all banks on the Cambodian market, so we can solve
                            everything under one roof. By constantly innovating our business activities,
                            we move forward and we are able to offer truly above-standard services that
                            set us apart from the competition.
                        </p>
                    </div>

                </div>
            </section>

            {/* ── CTA Banner Section ── */}
            <section className="cta-banner" aria-label="Find your best real estate">
                <div className="cta-banner-inner">

                    {/* Left: text + button */}
                    <div className="cta-banner-content">
                        <h2 className="cta-banner-heading">
                            Find your best<br />
                            <span>Real Estate</span>
                        </h2>
                        <p className="cta-banner-sub">
                            We provide a complete service for the sale,<br />
                            purchase or rental of real estate.
                        </p>
                        <a href="#" className="cta-banner-btn" id="cta-contact-btn">
                            CONTACT US
                        </a>
                    </div>

                    {/* Right: building image */}
                    <div className="cta-banner-visual" aria-hidden="true">
                        <img
                            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80"
                            alt="Modern real estate building"
                            className="cta-banner-img"
                            loading="lazy"
                        />
                    </div>

                </div>
            </section>
        </main>
    );
}
