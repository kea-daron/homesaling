import { useState } from 'react';
import './ShowAllOfferForPropertiesForSale.css';

const propertyTypes = ['Property type', 'House', 'Apartment', 'Condo', 'Borey', 'Land', 'Villa'];
const bedroomOptions = ['Bedrooms', '1 Bed', '2 Beds', '3 Beds', '4 Beds', '5+ Beds'];
const priceOptions = ['Select price', 'Under $100,000', '$100,000 - $300,000', '$300,000 - $600,000', '$600,000 - $1,000,000', '$1,000,000+'];

const allOffers = [
    { id: 1,  img: 'https://content.knightfrank.com/property/htmo-dev-1097/images/cbf00db2-daab-4da7-b483-69e44b6e3318-0.jpg?cio=true&w=730',         title: 'Elegant villa with private pool and landscaped garden',   price: '$850,000',   beds: 5, baths: 4, area: '12x20 m²', location: 'BKK1, Phnom Penh, Cambodia',          type: 'Villa',     tag: 'For Sale' },
    { id: 2,  img: 'https://img-v2.gtsstatic.net/reno/imagereader.aspx?url=https%3A%2F%2Fm.sothebysrealty.com%2F1103i215%2Fzzkr02wzkx3g41y2659z7na3c2i215&w=3840&q=75&option=N&permitphotoenlargement=false&fallbackimageurl=https://www.sothebysrealty.com/resources/siteresources/commonresources/images/nophoto/no_image_new.png', title: 'Luxury penthouse with panoramic city views',                price: '$1,200,000', beds: 4, baths: 3, area: '10x15 m²', location: 'Chamkarmon, Phnom Penh, Cambodia',    type: 'Condo',     tag: 'For Sale' },
    { id: 3,  img: 'https://cdns3.estateweb.com/assets/9655/of/4/pro/34158311/main/1.jpg',                                                                  title: 'Spacious family home in quiet residential compound',      price: '$320,000',   beds: 4, baths: 3, area: '8x18 m²',  location: 'Sen Sok, Phnom Penh, Cambodia',          type: 'House',     tag: 'For Sale' },
    { id: 4,  img: 'https://resources.pamgolding.co.za/content/properties/202505/1188854/h/1188854_H_99.jpg?w=1000',                                        title: 'Modern townhouse near international school',              price: '$480,000',   beds: 3, baths: 3, area: '7x16 m²',  location: 'Toul Kork, Phnom Penh, Cambodia',        type: 'House',     tag: 'For Sale' },
    { id: 5,  img: 'https://i2.au.reastatic.net/800x600/28723ec1b7a30286b1b817f7f8769dc953480e7f94520308dd1459099d78a636/main.jpg',                         title: 'Prime corner land plot in fast-developing district',      price: '$220,000',   beds: 0, baths: 0, area: '15x30 m²', location: 'Meanchey, Phnom Penh, Cambodia',         type: 'Land',      tag: 'For Sale' },
    { id: 6,  img: 'https://content.knightfrank.com/property/htmo-dev-1097/images/cbf00db2-daab-4da7-b483-69e44b6e3318-0.jpg?cio=true&w=730',               title: 'Newly built villa with smart home system',                price: '$950,000',   beds: 5, baths: 5, area: '14x22 m²', location: 'Doun Penh, Phnom Penh, Cambodia',        type: 'Villa',     tag: 'For Sale' },
    { id: 7,  img: 'https://cdns3.estateweb.com/assets/9655/of/4/pro/34158311/main/1.jpg',                                                                  title: 'Affordable starter home with two-car garage',             price: '$155,000',   beds: 3, baths: 2, area: '6x14 m²',  location: 'Por Sen Chey, Phnom Penh, Cambodia',     type: 'House',     tag: 'For Sale' },
    { id: 8,  img: 'https://resources.pamgolding.co.za/content/properties/202505/1188854/h/1188854_H_99.jpg?w=1000',                                        title: 'Investment condo with strong rental yield',               price: '$275,000',   beds: 2, baths: 2, area: '6x10 m²',  location: 'Chroy Changvar, Phnom Penh, Cambodia',   type: 'Condo',     tag: 'For Sale' },
    { id: 9,  img: 'https://i2.au.reastatic.net/800x600/28723ec1b7a30286b1b817f7f8769dc953480e7f94520308dd1459099d78a636/main.jpg',                         title: 'Heritage-style shophouse in the city center',             price: '$680,000',   beds: 4, baths: 3, area: '5x24 m²',  location: 'Doun Penh, Phnom Penh, Cambodia',        type: 'House',     tag: 'For Sale' },
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

export default function ShowAllOfferForPropertiesForSale() {
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
            <section className="sao-search-section" aria-label="Search properties for sale">
                <div className="sao-search-inner">
                    <h1 className="sao-search-heading">Latest Properties for Sale</h1>
                    <form className="sao-search-bar" onSubmit={handleSearch} role="search">

                        {/* Location */}
                        <div className="sao-field sao-field--location">
                            <span className="sao-field-icon"><LocationIcon /></span>
                            <input
                                id="sao-sale-location-input"
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
                                id="sao-sale-property-type"
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
                                id="sao-sale-bedrooms"
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
                                id="sao-sale-price"
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
                        <button type="submit" className="sao-search-btn" id="sao-sale-search-btn">
                            <SearchIcon />
                            <span>Search</span>
                        </button>
                    </form>
                </div>
            </section>

            {/* ── Results grid ── */}
            <section className="sao-results" aria-label="Properties for sale listings">
                <div className="sao-results-inner">
                    <p className="sao-results-count">
                        Showing <strong>{filteredOffers.length}</strong> properties for sale
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
