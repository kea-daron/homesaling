import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Condo.css';

const MenuIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const SearchIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

const ConciergeIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#1B2D6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

const HomeCircleIcon = () => (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#1B2D6B" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" stroke="#1B2D6B" strokeWidth="1.5" fill="rgba(27,45,107,0.15)"></circle>
        <path d="M12 7 L5 13 L7 13 L7 18 L11 18 L11 14 L13 14 L13 18 L17 18 L17 13 L19 13 Z" fill="#1B2D6B" stroke="none"></path>
    </svg>
);

const condosForSale = [
    { id: 1, name: 'R&F CITY', price: 'Price from: $70,000', location: 'Chak Angrae Leu, Meanchey, Phnom...', img: 'https://pix10.agoda.net/hotelImages/agoda-homes/5160821/f9251ad186d8ef5cc67662f1eab57ed2.jpg?ca=0&ce=1&s=414x232&ar=16x9' },
    { id: 2, name: 'Arakawa Residence', price: 'Price from: $33,600', location: 'Tuek Thla, Sen Sok, Phnom Penh', img: 'https://images.realestate.com.kh/listings/2022-07/p1400669.jpeg' },
    { id: 3, name: 'Le Conde BKK1', price: 'Price from: $85,000', location: 'BKK 1, Boeng Keng Kang, Phnom Penh', img: 'https://orkide.com.kh/assets/images/projects/condo/live_the.jpg' },
    { id: 4, name: 'Time Square 3', price: 'Price from: POA', location: 'Boeung Kak 1, Toul Kork, Phnom Penh', img: 'https://photos.ips-cambodia.com/photos/property/17626/23092601142eeca6-1bed-apartment-for-rent-st172666668151-7-850x567.tab.jpg' },
    { id: 5, name: 'Time Square 306', price: 'Price from: POA', location: 'BKK 1, Boeng Keng Kang, Phnom Penh', img: 'https://images.realestate.com.kh/listings/4lxVgXqL_eyt0k9u.jpeg' },
];

const condosForRent = [
    { id: 6, name: 'J Tower 2 Condominium', price: 'Price from: $183,645', location: 'BKK 1, Boeng Keng Kang, Phnom Penh', img: 'https://pix10.agoda.net/hotelImages/18942490/0/701c37817bdde998c1b0893a1144b06d.jpeg?ce=0&s=702x392' },
    { id: 7, name: 'Vue Aston', price: 'Price from: $72,000', location: 'Nirouth, Chbar Ampov, Phnom Penh', img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/117337695.jpg?k=ef306b76ac99545541dd5a9c89322608b5a99cc49853be48ac28109064924e21&o=' },
    { id: 8, name: 'The Penthouse Residence', price: 'Price from: $170,000', location: 'Tonle Bassac, Chamkarmorn, Phnom...', img: 'https://images.realestate.com.kh/blog/Silvertown%20Metropolitan%20BKK1.jpg' },
    { id: 9, name: 'R&F CITY MIRO', price: 'Price from: $50,000', location: 'Chak Angrae Leu, Meanchey, Phnom...', img: 'https://images.realestate.com.kh/__sized__/listings/2019-12/30051832_164286734235023_1245437120216477506_o-1-thumbnail-750x562-70.jpeg' },
    { id: 10, name: 'Urban Village Phase 2', price: 'Price from: $78,030', location: 'Chak Angrae Leu, Meanchey, Phnom...', img: 'https://camrealtyservice.com/wp-content/uploads/2021/12/apartment-building-for-rent-in-Phnom-Penh-THmei-Phnom-Penh-1.jpg' },
];

export default function Condo() {
    const [activeTab, setActiveTab] = useState('Buy');

    return (
        <div className="condo-page">

            {/* ── Hero Section ── */}
            <div className="condo-hero">
                <div className="condo-hero-overlay"></div>
                <div className="condo-hero-layout">

                    {/* Center: Search Box */}
                    <div className="condo-center">
                        <div className="condo-hero-search">
                            <h2>Find Condos in Cambodia</h2>
                            <div className="condo-search-tabs">
                                {['Buy', 'Rent', 'Sell'].map(tab => (
                                    <button
                                        key={tab}
                                        className={`tab ${activeTab === tab ? 'active' : ''}`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                            <div className="condo-search-input">
                                <MenuIcon />
                                <input type="text" placeholder="Location, project or agency name" />
                                <button className="search-submit"><SearchIcon /></button>
                            </div>
                            <div className="concierge-link">
                                <ConciergeIcon />
                                Try our free concierge service
                            </div>
                        </div>
                    </div>

                    {/* Right: Stats */}
                    <div className="condo-right">
                        <div className="units-left-badge">
                            <span className="units-number">15</span>
                            <span className="units-text">Units Left!</span>
                        </div>
                        <div className="condo-price-box">
                            <div className="starting-from-text">Starting<br />From</div>
                            <div className="condo-price-value">$1,8XX</div>
                            <div className="condo-price-unit">/sqm net</div>
                        </div>
                        <div className="secure-now-section">
                            <h3 className="secure-now-title">Secure Yours Now!</h3>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── Listings Below Hero ── */}
            <div className="condo-listings-page">

                {/* Completed Condos for Sale */}
                <section className="condo-section">
                    <div className="condo-section-header">
                        <div>
                            <h2 className="condo-section-title">Completed Condos for Sale</h2>
                        </div>
                        <span className="condo-section-count">{condosForSale.length} Properties</span>
                    </div>
                    <div className="condo-grid">
                        {condosForSale.map(c => (
                            <Link to={`/property/${c.id}`} key={c.id} className="condo-card">
                                <div className="condo-card-img-wrap">
                                    <img src={c.img} alt={c.name} />
                                    <span className="condo-video-badge">&#9654; VIDEO</span>
                                </div>
                                <div className="condo-card-info">
                                    <h4>{c.name}</h4>
                                    <p className="condo-card-price">{c.price}</p>
                                    <p className="condo-card-loc">{c.location}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="condo-view-more-wrap">
                        <button className="condo-view-more-btn">View More</button>
                    </div>
                </section>

                {/* Completed Condos for Rent */}
                <section className="condo-section">
                    <div className="condo-section-header">
                        <div>
                            <h2 className="condo-section-title">Completed Condos for Rent</h2>
                        </div>
                        <span className="condo-section-count">{condosForRent.length} Properties</span>
                    </div>
                    <div className="condo-grid">
                        {condosForRent.map(c => (
                            <Link to={`/property/${c.id}`} key={c.id} className="condo-card">
                                <div className="condo-card-img-wrap">
                                    <img src={c.img} alt={c.name} />
                                    <span className="condo-video-badge">&#9654; VIDEO</span>
                                </div>
                                <div className="condo-card-info">
                                    <h4>{c.name}</h4>
                                    <p className="condo-card-price">{c.price}</p>
                                    <p className="condo-card-loc">{c.location}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="condo-view-more-wrap">
                        <button className="condo-view-more-btn">View More</button>
                    </div>
                </section>

                {/* ── News & Guides ── */}
                <section className="condo-section">
                    <div className="condo-section-header">
                        <div>
                            <h2 className="condo-section-title">News &amp; Guides</h2>
                        </div>
                    </div>

                    <div className="condo-news-layout">
                        {/* Featured promo */}
                        <div className="condo-news-featured">
                            <img
                                src="https://phnompenh.com/wp-content/uploads/2019/12/luxury-condo-phnom-penh-vue-lobby-e1613917461656.jpg"
                                alt="Time Square 9"
                                className="condo-news-featured-img"
                            />
                            <div className="condo-news-featured-overlay">
                                <div className="condo-news-featured-badge">FEATURED</div>
                                <h3>Time Square 9 — The Gatsby Residence</h3>
                                <p>BKK1 Prime Location · Starting from <strong>$1,700/sqm</strong></p>
                                <button className="condo-news-featured-btn">Secure Pre-Sale Deal</button>
                            </div>
                        </div>

                        {/* Articles list */}
                        <div className="condo-news-articles">
                            {[
                                {
                                    title: 'Cambodia Allows Latin Alphabet Names on Condo Titles for Foreign Property Owners',
                                    date: 'July 13, 2026, 10:24 a.m.',
                                    excerpt: 'The Ministry of Land Management, Urban Planning and Construction (MLMUPC) has introduced a new ch...',
                                    img: 'https://397c8c72.delivery.rocketcdn.me/wp-content/uploads/2025/09/Apartment-for-rent-in-Phnom-Penh-%E2%80%93-Tonle-Bassac-Main-living-area-with-river-glow-13-of-21.jpg',
                                },
                                {
                                    title: 'Escrow Services in Cambodia: What They Are, How They Work...',
                                    date: 'July 10, 2026, 2:09 p.m.',
                                    excerpt: 'You bought a property, let say a house or condo. 2 important questions: What if the seller doesn\'t...',
                                    img: 'https://www.dabest-properties.com/wp-content/uploads/2025/09/Vue-Aston-%E2%80%93-Bedroom-Condo-For-Rent-Koh-Norea-Phnom-Penh-Pool.jpg',
                                },
                                {
                                    title: 'Everything You Need to Know About Borey Peng Huoth Boeung Snor...',
                                    date: 'July 7, 2026, 11:14 a.m.',
                                    excerpt: 'When people talk about premium borey developments in Phnom Penh, Borey Peng Huoth Boeung Snor is...',
                                    img: 'https://images.realestate.com.kh/listings/2021-11/35016357-16f3-4c59-a439-759352a05d39.jpeg',
                                },
                            ].map((article, i) => (
                                <div key={i} className="condo-news-article">
                                    <img src={article.img} alt={article.title} className="condo-news-thumb" />
                                    <div className="condo-news-article-body">
                                        <h4 className="condo-news-article-title">{article.title}</h4>
                                        <p className="condo-news-article-date">{article.date}</p>
                                        <p className="condo-news-article-excerpt">{article.excerpt}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="condo-view-more-wrap">
                                <button className="condo-view-more-btn">View More</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Featured Developers ── */}
                <section className="condo-section">
                    <div className="condo-section-header">
                        <div>
                            <h2 className="condo-section-title">Featured Developers</h2>
                        </div>
                    </div>
                    <div className="condo-grid">
                        {[
                            { name: 'Naki Group Co., Ltd.', desc: 'Naki Realty was founded in Cambodia...', img: 'https://images.realestate.com.kh/__sized__/users/2021-07/naki-thumbnail-270x202-70.jpeg' },
                            { name: 'Bodaiju Residences', desc: 'Bodaiju Residences is strategically loc...', img: 'https://images.realestate.com.kh/__sized__/offices/bodaiju-logo-thumbnail-270x202.png' },
                            { name: 'Tanichu Assetment Co., Ltd', desc: 'Tanichu Assetment Co., Ltd is a leadin...', img: 'https://images.realestate.com.kh/__sized__/users/2025-06/86b7339b-51cf-48e4-b78f-22f147fb9a21-thumbnail-270x202.png' },
                            { name: 'Megakim World Corp Ltd', desc: 'Megakim World Corp Ltd. is one of Ca...', img: 'https://images.realestate.com.kh/__sized__/users/2025-06/watermark-template-thumbnail-270x202.png' },
                            { name: 'Global Titan Stone Real Estate', desc: 'GLOBAL TITAN STONE REAL ESTATE...', img: 'https://images.realestate.com.kh/__sized__/offices/logo_Y8naGO9-thumbnail-270x202-70.jpg' },
                        ].map((dev, i) => (
                            <Link to="#" key={i} className="condo-card dev-card">
                                <div className="dev-card-img-wrap">
                                    <img src={dev.img} alt={dev.name} onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + dev.name + '&background=fff&color=111827&size=200'; }} />
                                </div>
                                <div className="condo-card-info">
                                    <h4>{dev.name}</h4>
                                    <p className="condo-card-loc">{dev.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="condo-view-more-wrap">
                        <button className="condo-view-more-btn">View More</button>
                    </div>
                </section>

                {/* ── Popular Locations ── */}
                <section className="condo-section">
                    <div className="condo-section-header">
                        <div>
                            <h2 className="condo-section-title">Popular Locations</h2>
                        </div>
                    </div>
                    <div className="condo-grid">
                        {[
                            { name: 'Phnom Penh', sale: '7k', rent: '27k', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEiNTBobEhESuXH9M6QkVvDK58FYz1N81r2HqdI6uWp5aqpg9gmGEOrQPd&s=10' },
                            { name: 'Chamkarmon', sale: '1k', rent: '16k', img: 'https://images.realestate.com.kh/files/2020-08/p1122131_YDKuk4W.jpg' },
                            { name: 'Daun Penh', sale: '349', rent: '3k', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN9PqZYJ5krekEwTOFQy3pfqyWHQ7OieIpjdIJT9pBZg&s=10' },
                            { name: 'BKK 1', sale: '309', rent: '6k', img: 'https://images.realestate.com.kh/files/2023-07/bkk-phnom-penh-cambodia-development_Df0GHNm.jpg' },
                            { name: 'Russian Market', sale: '103', rent: '2k', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwGYyHatD_5UgzHPwmImnYpAKuX-RCeqTbrOFbmOip8a-o29qxLViiVUE&s=10' },
                        ].map((loc, i) => (
                            <Link to="#" key={i} className="condo-location-card">
                                <img src={loc.img} alt={loc.name} className="loc-bg" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=500&q=80'; }} />
                                <div className="loc-overlay">
                                    <h3 className="loc-title">{loc.name}</h3>
                                </div>
                                <div className="loc-stats">
                                    <span>Sale: {loc.sale}</span>
                                    <span>Rent: {loc.rent}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
