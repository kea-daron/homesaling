import { useState } from 'react';
import './ShowAllOfferForBorey.css';

const propertyTypes = ['Property type', 'House', 'Apartment', 'Condo', 'Borey', 'Land', 'Villa'];
const bedroomOptions = ['Bedrooms', '1 Bed', '2 Beds', '3 Beds', '4 Beds', '5+ Beds'];
const priceOptions = ['Select price', 'Under $50,000', '$50,000 - $100,000', '$100,000 - $200,000', '$200,000 - $500,000', '$500,000+'];

const allOffers = [
    { id: 1, img: 'https://images.realestate.com.kh/__sized__/listings/2019-06/64392411_551623215369612_5752299405189316608_o-thumbnail-750x562-70.jpeg', title: 'Modern Borey house with large garden and parking', price: '$185,000', beds: 3, baths: 2, area: '5x20 m²', location: 'Dangkao, Phnom Penh, Cambodia', type: 'Borey', tag: 'For Sale' },
    { id: 2, img: 'https://images.realestate.com.kh/listings/2022-02/2021-12-24__16-49-47__gate_house.jpeg', title: 'Elegant gated Borey villa with community pool', price: '$240,000', beds: 4, baths: 3, area: '6x20 m²', location: 'Sen Sok, Phnom Penh, Cambodia', type: 'Borey', tag: 'For Sale' },
    { id: 3, img: 'https://i.ytimg.com/vi/s-YM--8VRNQ/maxresdefault.jpg', title: 'Spacious Borey townhouse near major road', price: '$145,000', beds: 3, baths: 2, area: '4x18 m²', location: 'Por Sen Chey, Phnom Penh, Cambodia', type: 'Borey', tag: 'For Sale' },
    { id: 4, img: 'https://images.realestate.com.kh/__sized__/listings/2021-05/2020-01-10__13-57-48__207_vw2hkdc-thumbnail-750x562-70.jpeg', title: 'Premium Borey corner house with wide frontage', price: '$310,000', beds: 4, baths: 3, area: '8x20 m²', location: 'Chbar Ampov, Phnom Penh, Cambodia', type: 'Borey', tag: 'For Sale' },
    { id: 5, img: 'https://images.realestate.com.kh/listings/2021-05/2020-01-10__13-49-44__180_wuiqzhr.jpeg', title: 'Affordable Borey starter home for young families', price: '$98,000', beds: 2, baths: 2, area: '4x15 m²', location: 'Meanchey, Phnom Penh, Cambodia', type: 'Borey', tag: 'For Sale' },
    { id: 6, img: 'https://images.realestate.com.kh/__sized__/listings/2019-06/64392411_551623215369612_5752299405189316608_o-thumbnail-750x562-70.jpeg', title: 'New development Borey with solar panels included', price: '$210,000', beds: 3, baths: 2, area: '5x18 m²', location: 'Russei Keo, Phnom Penh, Cambodia', type: 'Borey', tag: 'For Sale' },
    { id: 7, img: 'https://images.realestate.com.kh/listings/2022-02/2021-12-24__16-49-47__gate_house.jpeg', title: 'Well-maintained Borey resale near school & market', price: '$175,000', beds: 3, baths: 2, area: '5x20 m²', location: 'Toul Kork, Phnom Penh, Cambodia', type: 'Borey', tag: 'For Sale' },
    { id: 8, img: 'https://images.realestate.com.kh/__sized__/listings/2021-05/2020-01-10__13-57-48__207_vw2hkdc-thumbnail-750x562-70.jpeg', title: 'Luxury Borey duplex with rooftop terrace', price: '$420,000', beds: 5, baths: 4, area: '8x22 m²', location: 'BKK3, Phnom Penh, Cambodia', type: 'Borey', tag: 'For Sale' },
    { id: 9, img: 'https://i.ytimg.com/vi/s-YM--8VRNQ/maxresdefault.jpg', title: 'Brand-new Borey unit ready for immediate move-in', price: '$132,000', beds: 3, baths: 2, area: '4x16 m²', location: 'Dangkao, Phnom Penh, Cambodia', type: 'Borey', tag: 'For Sale' },
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

export default function ShowAllOfferForBorey() {
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
            <section className="sao-search-section" aria-label="Search for a Borey">
                <div className="sao-search-inner">
                    <h1 className="sao-search-heading">Search for a Borey</h1>
                    <form className="sao-search-bar" onSubmit={handleSearch} role="search">

                        {/* Location */}
                        <div className="sao-field sao-field--location">
                            <span className="sao-field-icon"><LocationIcon /></span>
                            <input
                                id="sao-borey-location-input"
                                type="text"
                                className="sao-input"
                                placeholder="Search by location"
                                value={locationVal}
                                onChange={e => setLocationVal(e.target.value)}
                                aria-label="Search by location"
                            />
                        </div>

                        <div className="sao-divider" />

                        {/* Property type */}
                        <div className="sao-field sao-field--select">
                            <select
                                id="sao-borey-property-type"
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
                                id="sao-borey-bedrooms"
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
                                id="sao-borey-price"
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
                        <button type="submit" className="sao-search-btn" id="sao-borey-search-btn">
                            <SearchIcon />
                            <span>Search</span>
                        </button>
                    </form>
                </div>
            </section>

            {/* ── Results grid ── */}
            <section className="sao-results" aria-label="Borey listings">
                <div className="sao-results-inner">
                    <p className="sao-results-count">
                        Showing <strong>{filteredOffers.length}</strong> Borey properties
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
                            <p>No Borey properties found. Try adjusting your search.</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
