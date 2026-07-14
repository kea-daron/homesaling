import { useState } from 'react';
import './ShowAllOfferForApartment.css';

const propertyTypes = ['Property type', 'House', 'Apartment', 'Condo', 'Borey', 'Land', 'Villa'];
const bedroomOptions = ['Bedrooms', '1 Bed', '2 Beds', '3 Beds', '4 Beds', '5+ Beds'];
const priceOptions = ['Select price', 'Under $500', '$500 - $1,000', '$1,000 - $2,000', '$2,000 - $5,000', '$5,000+'];

const allOffers = [
    { id: 1, img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80', title: 'Large 4-room apartment with a beautiful terrace', price: '$650', beds: 4, baths: 2, area: '6x7.5 m²', location: 'BKK1 Boeung Keng kang, Phnom Penh, Cambodia', type: 'Apartment', tag: 'For Rent' },
    { id: 2, img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80', title: 'Modern villa with pool and garden', price: '$1,200', beds: 5, baths: 3, area: '10x12 m²', location: 'Chamkarmon, Phnom Penh, Cambodia', type: 'Villa', tag: 'For Sale' },
    { id: 3, img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80', title: 'Cozy studio in the city center', price: '$380', beds: 1, baths: 1, area: '4x5 m²', location: 'Doun Penh, Phnom Penh, Cambodia', type: 'Apartment', tag: 'For Rent' },
    { id: 4, img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80', title: 'Spacious family house near school', price: '$2,500', beds: 4, baths: 3, area: '8x10 m²', location: 'Sen Sok, Phnom Penh, Cambodia', type: 'House', tag: 'For Sale' },
    { id: 5, img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80', title: 'Luxury penthouse with panoramic view', price: '$3,000', beds: 3, baths: 2, area: '9x11 m²', location: 'BKK1, Phnom Penh, Cambodia', type: 'Condo', tag: 'For Sale' },
    { id: 6, img: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&q=80', title: 'Affordable condo near riverside', price: '$490', beds: 2, baths: 1, area: '5x6 m²', location: 'Chroy Changvar, Phnom Penh, Cambodia', type: 'Condo', tag: 'For Rent' },
    { id: 7, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', title: 'New borey house with modern design', price: '$180,000', beds: 3, baths: 2, area: '5x20 m²', location: 'Dangkao, Phnom Penh, Cambodia', type: 'Borey', tag: 'For Sale' },
    { id: 8, img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80', title: 'Elegant apartment with balcony view', price: '$750', beds: 2, baths: 2, area: '7x8 m²', location: 'Toul Kork, Phnom Penh, Cambodia', type: 'Apartment', tag: 'For Rent' },
    { id: 9, img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80', title: 'Prime land plot in growing district', price: '$45,000', beds: 0, baths: 0, area: '15x25 m²', location: 'Meanchey, Phnom Penh, Cambodia', type: 'Land', tag: 'For Sale' },
];

const LocationIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
);
const SearchIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);
const ChevronIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="6 9 12 15 18 9" />
    </svg>
);
const BedIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 4v16M2 8h20v12H2M7 8v4" /><rect x="10" y="8" width="5" height="4" rx="1" />
    </svg>
);
const BathIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 6 C9 4.3 10.3 3 12 3 C13.7 3 15 4.3 15 6 L15 10" />
        <path d="M4 10 h16 v2 a8 8 0 0 1-16 0 v-2z" />
        <line x1="8" y1="21" x2="8" y2="19" /><line x1="16" y1="21" x2="16" y2="19" />
    </svg>
);
const AreaIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M3 9h18" />
    </svg>
);
const PinIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
);

export default function ShowAllOffer() {
    const [locationVal, setLocationVal] = useState('');
    const [propertyType, setPropertyType] = useState('Property type');
    const [bedrooms, setBedrooms] = useState('Bedrooms');
    const [price, setPrice] = useState('Select price');
    const [filteredOffers, setFilteredOffers] = useState(allOffers);

    const handleSearch = (e) => {
        e.preventDefault();
        let results = allOffers;
        if (locationVal.trim()) {
            results = results.filter(o => o.location.toLowerCase().includes(locationVal.toLowerCase()));
        }
        if (propertyType !== 'Property type') {
            results = results.filter(o => o.type === propertyType);
        }
        setFilteredOffers(results);
    };

    return (
        <main className="sao-page">
            {/* ── Search bar section ── */}
            <section className="sao-search-section" aria-label="Search for an offer">
                <div className="sao-search-inner">
                    <h1 className="sao-search-heading">Search for an offer</h1>
                    <form className="sao-search-bar" onSubmit={handleSearch} role="search">

                        {/* Location */}
                        <div className="sao-field sao-field--location">
                            <span className="sao-field-icon"><LocationIcon /></span>
                            <input
                                id="sao-location-input"
                                type="text"
                                className="sao-input"
                                placeholder="Search of location"
                                value={locationVal}
                                onChange={e => setLocationVal(e.target.value)}
                                aria-label="Search by location"
                            />
                        </div>

                        <div className="sao-divider" />

                        {/* Property type */}
                        <div className="sao-field sao-field--select">
                            <select
                                id="sao-property-type"
                                className="sao-select"
                                value={propertyType}
                                onChange={e => setPropertyType(e.target.value)}
                                aria-label="Property type"
                            >
                                {propertyTypes.map(t => <option key={t}>{t}</option>)}
                            </select>
                            <span className="sao-chevron"><ChevronIcon /></span>
                        </div>

                        <div className="sao-divider" />

                        {/* Bedrooms */}
                        <div className="sao-field sao-field--select">
                            <select
                                id="sao-bedrooms"
                                className="sao-select"
                                value={bedrooms}
                                onChange={e => setBedrooms(e.target.value)}
                                aria-label="Bedrooms"
                            >
                                {bedroomOptions.map(b => <option key={b}>{b}</option>)}
                            </select>
                            <span className="sao-chevron"><ChevronIcon /></span>
                        </div>

                        <div className="sao-divider" />

                        {/* Price */}
                        <div className="sao-field sao-field--select">
                            <select
                                id="sao-price"
                                className="sao-select"
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                                aria-label="Select price"
                            >
                                {priceOptions.map(p => <option key={p}>{p}</option>)}
                            </select>
                            <span className="sao-chevron"><ChevronIcon /></span>
                        </div>

                        {/* Search button */}
                        <button type="submit" className="sao-search-btn" id="sao-search-btn">
                            <SearchIcon />
                            <span>Search</span>
                        </button>
                    </form>
                </div>
            </section>

            {/* ── Results grid ── */}
            <section className="sao-results" aria-label="Property listings">
                <div className="sao-results-inner">
                    <p className="sao-results-count">
                        Showing <strong>{filteredOffers.length}</strong> properties
                    </p>
                    <div className="sao-grid">
                        {filteredOffers.map(({ id, img, title, price: p, beds, baths, area, location: loc, tag }) => (
                            <div key={id} className="sao-card">
                                <div className="sao-card-img-wrap">
                                    <img src={img} alt={title} className="sao-card-img" loading="lazy" />
                                    <span className={`sao-tag sao-tag--${tag === 'For Sale' ? 'sale' : 'rent'}`}>{tag}</span>
                                </div>
                                <div className="sao-card-body">
                                    <h2 className="sao-card-title">{title}</h2>
                                    <p className="sao-card-price">Price From : <strong>{p}</strong></p>
                                    <div className="sao-card-specs">
                                        {beds > 0 && <span className="sao-spec"><BedIcon />{beds} Beds</span>}
                                        {baths > 0 && <span className="sao-spec"><BathIcon />{baths} Baths</span>}
                                        <span className="sao-spec"><AreaIcon />{area}</span>
                                    </div>
                                    <p className="sao-card-location"><PinIcon />{loc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {filteredOffers.length === 0 && (
                        <div className="sao-empty">
                            <p>No properties found. Try adjusting your search.</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
