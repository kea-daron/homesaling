import React from 'react';
import { Link } from 'react-router-dom';
import './PhnomPenh.css';

const ChevronDown = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

const FilterIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="21" x2="4" y2="14"></line>
        <line x1="4" y1="10" x2="4" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12" y2="3"></line>
        <line x1="20" y1="21" x2="20" y2="16"></line>
        <line x1="20" y1="12" x2="20" y2="3"></line>
        <line x1="1" y1="14" x2="7" y2="14"></line>
        <line x1="9" y1="8" x2="15" y2="8"></line>
        <line x1="17" y1="16" x2="23" y2="16"></line>
    </svg>
);

const HeartOutline = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e03c31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
);

const HeartSolidWhite = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
);


const MapIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
        <line x1="8" y1="2" x2="8" y2="18"></line>
        <line x1="16" y1="6" x2="16" y2="22"></line>
    </svg>
);

const PinIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#73b646" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);

const BedIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4v16M2 8h20v12H2M7 8v4"></path>
        <rect x="10" y="8" width="5" height="4" rx="1"></rect>
    </svg>
);

const BathIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 6 C9 4.3 10.3 3 12 3 C13.7 3 15 4.3 15 6 L15 10"></path>
        <path d="M4 10 h16 v2 a8 8 0 0 1-16 0 v-2z"></path>
        <line x1="8" y1="21" x2="8" y2="19"></line>
        <line x1="16" y1="21" x2="16" y2="19"></line>
    </svg>
);

const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const MenuIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const InfoIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#1b90f0" stroke="#1b90f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" fill="white"></circle>
        <line x1="12" y1="16" x2="12" y2="12" stroke="#1b90f0"></line>
        <line x1="12" y1="8" x2="12.01" y2="8" stroke="#1b90f0"></line>
    </svg>
)

export default function PhnomPenh() {
    return (
        <div className="phnom-penh-page">
            {/* Top Filter Bar */}
            <div className="top-filter-bar-wrapper">
                <div className="top-filter-bar">
                    <div className="filter-group">
                        <div className="filter-box buy-box">
                            Buy <ChevronDown />
                        </div>
                        <div className="filter-box search-loc-box">
                            <MenuIcon />
                            <input type="text" value="Phnom Penh" readOnly />
                        </div>
                        <div className="filter-box multi-line-box">
                            <div className="filter-text">
                                <span className="label">Property Type</span>
                                <span className="value">Residential</span>
                            </div>
                            <ChevronDown />
                        </div>
                        <div className="filter-box multi-line-box">
                            <div className="filter-text">
                                <span className="label">Price</span>
                                <span className="value">Any</span>
                            </div>
                            <ChevronDown />
                        </div>
                        <div className="filter-box multi-line-box">
                            <div className="filter-text">
                                <span className="label">Bedrooms</span>
                                <span className="value">Any</span>
                            </div>
                            <ChevronDown />
                        </div>
                        <button className="filter-btn">
                            <FilterIcon /> Filters
                        </button>
                        <button className="update-btn">
                            Update
                        </button>
                    </div>
                </div>
            </div>

            <div className="main-container">
                <div className="breadcrumbs">
                    Buy &gt; Phnom Penh
                </div>

                <div className="page-header">
                    <div className="header-title-row">
                        <h1>Real Estate for Sale in Phnom Penh</h1>
                        <button className="save-search-btn">
                            <HeartOutline /> Save search
                        </button>
                    </div>

                    <div className="header-meta-row">
                        <span className="results-count">Found 7,403 residential properties for sale in Phnom Penh</span>
                        <div className="view-controls">
                            <button className="map-view-btn">
                                <MapIcon /> Map View
                            </button>
                            <button className="sort-btn">
                                <FilterIcon /> Sort: Relevance <ChevronDown />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="content-layout">
                    <div className="listings">
                        {/* Property Card */}
                        <Link to="/property/1" className="property-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                            <div className="card-header">
                                <h3>Corner Villa for Sale/Rent in Borey Chankiri</h3>
                                <button className="card-heart-btn"><HeartSolidWhite /></button>
                            </div>

                            <div className="card-body">
                                <div className="card-image-wrapper">
                                    <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" alt="Villa" />
                                    <div className="tags">
                                        <span className="tag featured">FEATURED</span>
                                        <span className="tag for-sale">FOR SALE OR RENT</span>
                                        <span className="tag negotiable">PRICE NEGOTIABLE</span>
                                    </div>
                                    <button className="nav-arrow left">&lt;</button>
                                    <button className="nav-arrow right">&gt;</button>
                                </div>

                                <div className="card-details">
                                    <div className="details-header">
                                        <h4>Villa</h4>
                                        <span className="price">$550,000</span>
                                    </div>

                                    <div className="location">
                                        <PinIcon /> <span>Chankiri Palm Creek</span>
                                    </div>

                                    <div className="specs">
                                        <span className="spec"><BedIcon /> Bedrooms: 5</span>
                                        <span className="spec"><BathIcon /> Bathrooms: 5</span>
                                    </div>

                                    <div className="features">
                                        <span className="feature"><CheckIcon /> Brand Developer</span>
                                        <span className="feature"><CheckIcon /> High Appreciation Value</span>
                                    </div>

                                    <div className="dates">
                                        <p>Listed : 22 days ago</p>
                                        <p>Updated: 22 days ago</p>
                                    </div>

                                    <div className="actions">
                                        <button className="tel-btn">Tel: +855 61 77 7090</button>
                                        <button className="contact-btn">Contact</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/property/1" className="property-card" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                            <div className="card-header">
                                <h3>Corner Villa for Sale/Rent in Borey Chankiri</h3>
                                <button className="card-heart-btn"><HeartSolidWhite /></button>
                            </div>

                            <div className="card-body">
                                <div className="card-image-wrapper">
                                    <img src="https://www.cambodiaproperty.asia/wp-content/uploads/2025/04/Grand-Phnom-Penh-Chateau-Villa-%E2%80%93-5-Bedroom-Luxury-Home-with-Golf-Views-Villa-Phnom-Penh-1200x720.jpg" alt="Villa" />
                                    <div className="tags">
                                        <span className="tag featured">FEATURED</span>
                                        <span className="tag for-sale">FOR SALE OR RENT</span>
                                        <span className="tag negotiable">PRICE NEGOTIABLE</span>
                                    </div>
                                    <button className="nav-arrow left">&lt;</button>
                                    <button className="nav-arrow right">&gt;</button>
                                </div>

                                <div className="card-details">
                                    <div className="details-header">
                                        <h4>Villa</h4>
                                        <span className="price">$550,000</span>
                                    </div>

                                    <div className="location">
                                        <PinIcon /> <span>Chankiri Palm Creek</span>
                                    </div>

                                    <div className="specs">
                                        <span className="spec"><BedIcon /> Bedrooms: 5</span>
                                        <span className="spec"><BathIcon /> Bathrooms: 5</span>
                                    </div>

                                    <div className="features">
                                        <span className="feature"><CheckIcon /> Brand Developer</span>
                                        <span className="feature"><CheckIcon /> High Appreciation Value</span>
                                    </div>

                                    <div className="dates">
                                        <p>Listed : 22 days ago</p>
                                        <p>Updated: 22 days ago</p>
                                    </div>

                                    <div className="actions">
                                        <button className="tel-btn">Tel: +855 61 77 7090</button>
                                        <button className="contact-btn">Contact</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/property/1" className="property-card" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                            <div className="card-header">
                                <h3>Corner Villa for Sale/Rent in Borey Chankiri</h3>
                                <button className="card-heart-btn"><HeartSolidWhite /></button>
                            </div>

                            <div className="card-body">
                                <div className="card-image-wrapper">
                                    <img src="https://www.cambodiaproperty.asia/wp-content/uploads/2025/04/Villa_Phnompenh-29-1200x720.jpg" alt="Villa" />
                                    <div className="tags">
                                        <span className="tag featured">FEATURED</span>
                                        <span className="tag for-sale">FOR SALE OR RENT</span>
                                        <span className="tag negotiable">PRICE NEGOTIABLE</span>
                                    </div>
                                    <button className="nav-arrow left">&lt;</button>
                                    <button className="nav-arrow right">&gt;</button>
                                </div>

                                <div className="card-details">
                                    <div className="details-header">
                                        <h4>Villa</h4>
                                        <span className="price">$550,000</span>
                                    </div>

                                    <div className="location">
                                        <PinIcon /> <span>Chankiri Palm Creek</span>
                                    </div>

                                    <div className="specs">
                                        <span className="spec"><BedIcon /> Bedrooms: 5</span>
                                        <span className="spec"><BathIcon /> Bathrooms: 5</span>
                                    </div>

                                    <div className="features">
                                        <span className="feature"><CheckIcon /> Brand Developer</span>
                                        <span className="feature"><CheckIcon /> High Appreciation Value</span>
                                    </div>

                                    <div className="dates">
                                        <p>Listed : 22 days ago</p>
                                        <p>Updated: 22 days ago</p>
                                    </div>

                                    <div className="actions">
                                        <button className="tel-btn">Tel: +855 61 77 7090</button>
                                        <button className="contact-btn">Contact</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/property/1" className="property-card" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                            <div className="card-header">
                                <h3>Corner Villa for Sale/Rent in Borey Chankiri</h3>
                                <button className="card-heart-btn"><HeartSolidWhite /></button>
                            </div>

                            <div className="card-body">
                                <div className="card-image-wrapper">
                                    <img src="https://goodvalueproperty.com/wp-content/uploads/2024/10/Borey_Phnom_Penh_1.jpg" alt="Villa" />
                                    <div className="tags">
                                        <span className="tag featured">FEATURED</span>
                                        <span className="tag for-sale">FOR SALE OR RENT</span>
                                        <span className="tag negotiable">PRICE NEGOTIABLE</span>
                                    </div>
                                    <button className="nav-arrow left">&lt;</button>
                                    <button className="nav-arrow right">&gt;</button>
                                </div>

                                <div className="card-details">
                                    <div className="details-header">
                                        <h4>Villa</h4>
                                        <span className="price">$550,000</span>
                                    </div>

                                    <div className="location">
                                        <PinIcon /> <span>Chankiri Palm Creek</span>
                                    </div>

                                    <div className="specs">
                                        <span className="spec"><BedIcon /> Bedrooms: 5</span>
                                        <span className="spec"><BathIcon /> Bathrooms: 5</span>
                                    </div>

                                    <div className="features">
                                        <span className="feature"><CheckIcon /> Brand Developer</span>
                                        <span className="feature"><CheckIcon /> High Appreciation Value</span>
                                    </div>

                                    <div className="dates">
                                        <p>Listed : 22 days ago</p>
                                        <p>Updated: 22 days ago</p>
                                    </div>

                                    <div className="actions">
                                        <button className="tel-btn">Tel: +855 61 77 7090</button>
                                        <button className="contact-btn">Contact</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/property/1" className="property-card" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                            <div className="card-header">
                                <h3>Corner Villa for Sale/Rent in Borey Chankiri</h3>
                                <button className="card-heart-btn"><HeartSolidWhite /></button>
                            </div>

                            <div className="card-body">
                                <div className="card-image-wrapper">
                                    <img src="https://ips-cambodia.com/wp-content/uploads/2023/06/CLASSIC-MANSION-SIEM-REAP-CAMBODIA.jpg" alt="Villa" />
                                    <div className="tags">
                                        <span className="tag featured">FEATURED</span>
                                        <span className="tag for-sale">FOR SALE OR RENT</span>
                                        <span className="tag negotiable">PRICE NEGOTIABLE</span>
                                    </div>
                                    <button className="nav-arrow left">&lt;</button>
                                    <button className="nav-arrow right">&gt;</button>
                                </div>

                                <div className="card-details">
                                    <div className="details-header">
                                        <h4>Villa</h4>
                                        <span className="price">$550,000</span>
                                    </div>

                                    <div className="location">
                                        <PinIcon /> <span>Chankiri Palm Creek</span>
                                    </div>

                                    <div className="specs">
                                        <span className="spec"><BedIcon /> Bedrooms: 5</span>
                                        <span className="spec"><BathIcon /> Bathrooms: 5</span>
                                    </div>

                                    <div className="features">
                                        <span className="feature"><CheckIcon /> Brand Developer</span>
                                        <span className="feature"><CheckIcon /> High Appreciation Value</span>
                                    </div>

                                    <div className="dates">
                                        <p>Listed : 22 days ago</p>
                                        <p>Updated: 22 days ago</p>
                                    </div>

                                    <div className="actions">
                                        <button className="tel-btn">Tel: +855 61 77 7090</button>
                                        <button className="contact-btn">Contact</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/property/1" className="property-card" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                            <div className="card-header">
                                <h3>Corner Villa for Sale/Rent in Borey Chankiri</h3>
                                <button className="card-heart-btn"><HeartSolidWhite /></button>
                            </div>

                            <div className="card-body">
                                <div className="card-image-wrapper">
                                    <img src="https://livingasean.com/wp-content/uploads/2023/12/BLOOMARCHITECTURE_SmallHouses_OkiHiroyuki_00-scaled.jpg" alt="Villa" />
                                    <div className="tags">
                                        <span className="tag featured">FEATURED</span>
                                        <span className="tag for-sale">FOR SALE OR RENT</span>
                                        <span className="tag negotiable">PRICE NEGOTIABLE</span>
                                    </div>
                                    <button className="nav-arrow left">&lt;</button>
                                    <button className="nav-arrow right">&gt;</button>
                                </div>

                                <div className="card-details">
                                    <div className="details-header">
                                        <h4>Villa</h4>
                                        <span className="price">$550,000</span>
                                    </div>

                                    <div className="location">
                                        <PinIcon /> <span>Chankiri Palm Creek</span>
                                    </div>

                                    <div className="specs">
                                        <span className="spec"><BedIcon /> Bedrooms: 5</span>
                                        <span className="spec"><BathIcon /> Bathrooms: 5</span>
                                    </div>

                                    <div className="features">
                                        <span className="feature"><CheckIcon /> Brand Developer</span>
                                        <span className="feature"><CheckIcon /> High Appreciation Value</span>
                                    </div>

                                    <div className="dates">
                                        <p>Listed : 22 days ago</p>
                                        <p>Updated: 22 days ago</p>
                                    </div>

                                    <div className="actions">
                                        <button className="tel-btn">Tel: +855 61 77 7090</button>
                                        <button className="contact-btn">Contact</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/property/1" className="property-card" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                            <div className="card-header">
                                <h3>Corner Villa for Sale/Rent in Borey Chankiri</h3>
                                <button className="card-heart-btn"><HeartSolidWhite /></button>
                            </div>

                            <div className="card-body">
                                <div className="card-image-wrapper">
                                    <img src="https://www.movetocambodia.com/wp-content/uploads/Phnom-Penh-villa.jpg" alt="Villa" />
                                    <div className="tags">
                                        <span className="tag featured">FEATURED</span>
                                        <span className="tag for-sale">FOR SALE OR RENT</span>
                                        <span className="tag negotiable">PRICE NEGOTIABLE</span>
                                    </div>
                                    <button className="nav-arrow left">&lt;</button>
                                    <button className="nav-arrow right">&gt;</button>
                                </div>

                                <div className="card-details">
                                    <div className="details-header">
                                        <h4>Villa</h4>
                                        <span className="price">$550,000</span>
                                    </div>

                                    <div className="location">
                                        <PinIcon /> <span>Chankiri Palm Creek</span>
                                    </div>

                                    <div className="specs">
                                        <span className="spec"><BedIcon /> Bedrooms: 5</span>
                                        <span className="spec"><BathIcon /> Bathrooms: 5</span>
                                    </div>

                                    <div className="features">
                                        <span className="feature"><CheckIcon /> Brand Developer</span>
                                        <span className="feature"><CheckIcon /> High Appreciation Value</span>
                                    </div>

                                    <div className="dates">
                                        <p>Listed : 22 days ago</p>
                                        <p>Updated: 22 days ago</p>
                                    </div>

                                    <div className="actions">
                                        <button className="tel-btn">Tel: +855 61 77 7090</button>
                                        <button className="contact-btn">Contact</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/property/1" className="property-card" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                            <div className="card-header">
                                <h3>Corner Villa for Sale/Rent in Borey Chankiri</h3>
                                <button className="card-heart-btn"><HeartSolidWhite /></button>
                            </div>

                            <div className="card-body">
                                <div className="card-image-wrapper">
                                    <img src="https://i.ytimg.com/vi/jQwmRwntQSw/maxresdefault.jpg" alt="Villa" />
                                    <div className="tags">
                                        <span className="tag featured">FEATURED</span>
                                        <span className="tag for-sale">FOR SALE OR RENT</span>
                                        <span className="tag negotiable">PRICE NEGOTIABLE</span>
                                    </div>
                                    <button className="nav-arrow left">&lt;</button>
                                    <button className="nav-arrow right">&gt;</button>
                                </div>

                                <div className="card-details">
                                    <div className="details-header">
                                        <h4>Villa</h4>
                                        <span className="price">$550,000</span>
                                    </div>

                                    <div className="location">
                                        <PinIcon /> <span>Chankiri Palm Creek</span>
                                    </div>

                                    <div className="specs">
                                        <span className="spec"><BedIcon /> Bedrooms: 5</span>
                                        <span className="spec"><BathIcon /> Bathrooms: 5</span>
                                    </div>

                                    <div className="features">
                                        <span className="feature"><CheckIcon /> Brand Developer</span>
                                        <span className="feature"><CheckIcon /> High Appreciation Value</span>
                                    </div>

                                    <div className="dates">
                                        <p>Listed : 22 days ago</p>
                                        <p>Updated: 22 days ago</p>
                                    </div>

                                    <div className="actions">
                                        <button className="tel-btn">Tel: +855 61 77 7090</button>
                                        <button className="contact-btn">Contact</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/property/1" className="property-card" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                            <div className="card-header">
                                <h3>Corner Villa for Sale/Rent in Borey Chankiri</h3>
                                <button className="card-heart-btn"><HeartSolidWhite /></button>
                            </div>

                            <div className="card-body">
                                <div className="card-image-wrapper">
                                    <img src="https://expertrealty.com.kh/new/wp-content/uploads/2020/01/web-1-6.jpg" alt="Villa" />
                                    <div className="tags">
                                        <span className="tag featured">FEATURED</span>
                                        <span className="tag for-sale">FOR SALE OR RENT</span>
                                        <span className="tag negotiable">PRICE NEGOTIABLE</span>
                                    </div>
                                    <button className="nav-arrow left">&lt;</button>
                                    <button className="nav-arrow right">&gt;</button>
                                </div>

                                <div className="card-details">
                                    <div className="details-header">
                                        <h4>Villa</h4>
                                        <span className="price">$550,000</span>
                                    </div>

                                    <div className="location">
                                        <PinIcon /> <span>Chankiri Palm Creek</span>
                                    </div>

                                    <div className="specs">
                                        <span className="spec"><BedIcon /> Bedrooms: 5</span>
                                        <span className="spec"><BathIcon /> Bathrooms: 5</span>
                                    </div>

                                    <div className="features">
                                        <span className="feature"><CheckIcon /> Brand Developer</span>
                                        <span className="feature"><CheckIcon /> High Appreciation Value</span>
                                    </div>

                                    <div className="dates">
                                        <p>Listed : 22 days ago</p>
                                        <p>Updated: 22 days ago</p>
                                    </div>

                                    <div className="actions">
                                        <button className="tel-btn">Tel: +855 61 77 7090</button>
                                        <button className="contact-btn">Contact</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/property/1" className="property-card" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                            <div className="card-header">
                                <h3>Corner Villa for Sale/Rent in Borey Chankiri</h3>
                                <button className="card-heart-btn"><HeartSolidWhite /></button>
                            </div>

                            <div className="card-body">
                                <div className="card-image-wrapper">
                                    <img src="https://s1.rea.global/img/800x600-fit/realestate_kh/kh/742829c584d20565ad608cc37c53d3c8.jpg" alt="Villa" />
                                    <div className="tags">
                                        <span className="tag featured">FEATURED</span>
                                        <span className="tag for-sale">FOR SALE OR RENT</span>
                                        <span className="tag negotiable">PRICE NEGOTIABLE</span>
                                    </div>
                                    <button className="nav-arrow left">&lt;</button>
                                    <button className="nav-arrow right">&gt;</button>
                                </div>

                                <div className="card-details">
                                    <div className="details-header">
                                        <h4>Villa</h4>
                                        <span className="price">$550,000</span>
                                    </div>

                                    <div className="location">
                                        <PinIcon /> <span>Chankiri Palm Creek</span>
                                    </div>

                                    <div className="specs">
                                        <span className="spec"><BedIcon /> Bedrooms: 5</span>
                                        <span className="spec"><BathIcon /> Bathrooms: 5</span>
                                    </div>

                                    <div className="features">
                                        <span className="feature"><CheckIcon /> Brand Developer</span>
                                        <span className="feature"><CheckIcon /> High Appreciation Value</span>
                                    </div>

                                    <div className="dates">
                                        <p>Listed : 22 days ago</p>
                                        <p>Updated: 22 days ago</p>
                                    </div>

                                    <div className="actions">
                                        <button className="tel-btn">Tel: +855 61 77 7090</button>
                                        <button className="contact-btn">Contact</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/property/1" className="property-card" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                            <div className="card-header">
                                <h3>Corner Villa for Sale/Rent in Borey Chankiri</h3>
                                <button className="card-heart-btn"><HeartSolidWhite /></button>
                            </div>

                            <div className="card-body">
                                <div className="card-image-wrapper">
                                    <img src="https://images.realestate.com.kh/listings/2026-06/photo_6201876524689qr136_y-3.jpeg" alt="Villa" />
                                    <div className="tags">
                                        <span className="tag featured">FEATURED</span>
                                        <span className="tag for-sale">FOR SALE OR RENT</span>
                                        <span className="tag negotiable">PRICE NEGOTIABLE</span>
                                    </div>
                                    <button className="nav-arrow left">&lt;</button>
                                    <button className="nav-arrow right">&gt;</button>
                                </div>

                                <div className="card-details">
                                    <div className="details-header">
                                        <h4>Villa</h4>
                                        <span className="price">$550,000</span>
                                    </div>

                                    <div className="location">
                                        <PinIcon /> <span>Chankiri Palm Creek</span>
                                    </div>

                                    <div className="specs">
                                        <span className="spec"><BedIcon /> Bedrooms: 5</span>
                                        <span className="spec"><BathIcon /> Bathrooms: 5</span>
                                    </div>

                                    <div className="features">
                                        <span className="feature"><CheckIcon /> Brand Developer</span>
                                        <span className="feature"><CheckIcon /> High Appreciation Value</span>
                                    </div>

                                    <div className="dates">
                                        <p>Listed : 22 days ago</p>
                                        <p>Updated: 22 days ago</p>
                                    </div>

                                    <div className="actions">
                                        <button className="tel-btn">Tel: +855 61 77 7090</button>
                                        <button className="contact-btn">Contact</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/property/1" className="property-card" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                            <div className="card-header">
                                <h3>Corner Villa for Sale/Rent in Borey Chankiri</h3>
                                <button className="card-heart-btn"><HeartSolidWhite /></button>
                            </div>

                            <div className="card-body">
                                <div className="card-image-wrapper">
                                    <img src="https://ips-cambodia.com/ips-social-image/property/18879.jpg" alt="Villa" />
                                    <div className="tags">
                                        <span className="tag featured">FEATURED</span>
                                        <span className="tag for-sale">FOR SALE OR RENT</span>
                                        <span className="tag negotiable">PRICE NEGOTIABLE</span>
                                    </div>
                                    <button className="nav-arrow left">&lt;</button>
                                    <button className="nav-arrow right">&gt;</button>
                                </div>

                                <div className="card-details">
                                    <div className="details-header">
                                        <h4>Villa</h4>
                                        <span className="price">$550,000</span>
                                    </div>

                                    <div className="location">
                                        <PinIcon /> <span>Chankiri Palm Creek</span>
                                    </div>

                                    <div className="specs">
                                        <span className="spec"><BedIcon /> Bedrooms: 5</span>
                                        <span className="spec"><BathIcon /> Bathrooms: 5</span>
                                    </div>

                                    <div className="features">
                                        <span className="feature"><CheckIcon /> Brand Developer</span>
                                        <span className="feature"><CheckIcon /> High Appreciation Value</span>
                                    </div>

                                    <div className="dates">
                                        <p>Listed : 22 days ago</p>
                                        <p>Updated: 22 days ago</p>
                                    </div>

                                    <div className="actions">
                                        <button className="tel-btn">Tel: +855 61 77 7090</button>
                                        <button className="contact-btn">Contact</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/property/1" className="property-card" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                            <div className="card-header">
                                <h3>Corner Villa for Sale/Rent in Borey Chankiri</h3>
                                <button className="card-heart-btn"><HeartSolidWhite /></button>
                            </div>

                            <div className="card-body">
                                <div className="card-image-wrapper">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeDBqXOTwk3ujwl2oe5At-PIgxEZO-9pi6XfjS4YvryGx86G_5x3mzWlDN&s=10" alt="Villa" />
                                    <div className="tags">
                                        <span className="tag featured">FEATURED</span>
                                        <span className="tag for-sale">FOR SALE OR RENT</span>
                                        <span className="tag negotiable">PRICE NEGOTIABLE</span>
                                    </div>
                                    <button className="nav-arrow left">&lt;</button>
                                    <button className="nav-arrow right">&gt;</button>
                                </div>

                                <div className="card-details">
                                    <div className="details-header">
                                        <h4>Villa</h4>
                                        <span className="price">$550,000</span>
                                    </div>

                                    <div className="location">
                                        <PinIcon /> <span>Chankiri Palm Creek</span>
                                    </div>

                                    <div className="specs">
                                        <span className="spec"><BedIcon /> Bedrooms: 5</span>
                                        <span className="spec"><BathIcon /> Bathrooms: 5</span>
                                    </div>

                                    <div className="features">
                                        <span className="feature"><CheckIcon /> Brand Developer</span>
                                        <span className="feature"><CheckIcon /> High Appreciation Value</span>
                                    </div>

                                    <div className="dates">
                                        <p>Listed : 22 days ago</p>
                                        <p>Updated: 22 days ago</p>
                                    </div>

                                    <div className="actions">
                                        <button className="tel-btn">Tel: +855 61 77 7090</button>
                                        <button className="contact-btn">Contact</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/property/1" className="property-card" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                            <div className="card-header">
                                <h3>Corner Villa for Sale/Rent in Borey Chankiri</h3>
                                <button className="card-heart-btn"><HeartSolidWhite /></button>
                            </div>

                            <div className="card-body">
                                <div className="card-image-wrapper">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeDBqXOTwk3ujwl2oe5At-PIgxEZO-9pi6XfjS4YvryGx86G_5x3mzWlDN&s=10" alt="Villa" />
                                    <div className="tags">
                                        <span className="tag featured">FEATURED</span>
                                        <span className="tag for-sale">FOR SALE OR RENT</span>
                                        <span className="tag negotiable">PRICE NEGOTIABLE</span>
                                    </div>
                                    <button className="nav-arrow left">&lt;</button>
                                    <button className="nav-arrow right">&gt;</button>
                                </div>

                                <div className="card-details">
                                    <div className="details-header">
                                        <h4>Villa</h4>
                                        <span className="price">$550,000</span>
                                    </div>

                                    <div className="location">
                                        <PinIcon /> <span>Chankiri Palm Creek</span>
                                    </div>

                                    <div className="specs">
                                        <span className="spec"><BedIcon /> Bedrooms: 5</span>
                                        <span className="spec"><BathIcon /> Bathrooms: 5</span>
                                    </div>

                                    <div className="features">
                                        <span className="feature"><CheckIcon /> Brand Developer</span>
                                        <span className="feature"><CheckIcon /> High Appreciation Value</span>
                                    </div>

                                    <div className="dates">
                                        <p>Listed : 22 days ago</p>
                                        <p>Updated: 22 days ago</p>
                                    </div>

                                    <div className="actions">
                                        <button className="tel-btn">Tel: +855 61 77 7090</button>
                                        <button className="contact-btn">Contact</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/property/1" className="property-card" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                            <div className="card-header">
                                <h3>Corner Villa for Sale/Rent in Borey Chankiri</h3>
                                <button className="card-heart-btn"><HeartSolidWhite /></button>
                            </div>

                            <div className="card-body">
                                <div className="card-image-wrapper">
                                    <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" alt="Villa" />
                                    <div className="tags">
                                        <span className="tag featured">FEATURED</span>
                                        <span className="tag for-sale">FOR SALE OR RENT</span>
                                        <span className="tag negotiable">PRICE NEGOTIABLE</span>
                                    </div>
                                    <button className="nav-arrow left">&lt;</button>
                                    <button className="nav-arrow right">&gt;</button>
                                </div>

                                <div className="card-details">
                                    <div className="details-header">
                                        <h4>Villa</h4>
                                        <span className="price">$550,000</span>
                                    </div>

                                    <div className="location">
                                        <PinIcon /> <span>Chankiri Palm Creek</span>
                                    </div>

                                    <div className="specs">
                                        <span className="spec"><BedIcon /> Bedrooms: 5</span>
                                        <span className="spec"><BathIcon /> Bathrooms: 5</span>
                                    </div>

                                    <div className="features">
                                        <span className="feature"><CheckIcon /> Brand Developer</span>
                                        <span className="feature"><CheckIcon /> High Appreciation Value</span>
                                    </div>

                                    <div className="dates">
                                        <p>Listed : 22 days ago</p>
                                        <p>Updated: 22 days ago</p>
                                    </div>

                                    <div className="actions">
                                        <button className="tel-btn">Tel: +855 61 77 7090</button>
                                        <button className="contact-btn">Contact</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        {/* More cards could go here */}
                    </div>

                </div>
            </div>
        </div>
    );
}
