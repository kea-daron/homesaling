import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Land.css';

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

const landForSale = [
    { id: 1, name: 'R&F CITY', price: 'Price from: $70,000', location: 'Chak Angrae Leu, Meanchey, Phnom...', img: 'https://cdn.fazwaz-kh.com/wbr/k40z-_UKbZxTbjsa9Y9gvcrwZog/355x240/unit/1433016/img-20230905-133231-799-edited-thumbnail-1040x780-70.jpeg' },
    { id: 2, name: 'Arakawa Residence', price: 'Price from: $33,600', location: 'Tuek Thla, Sen Sok, Phnom Penh', img: 'https://www.angkorrealestate.com/images/properties/6667/6667_photo.jpg' },
    { id: 3, name: 'Le Conde BKK1', price: 'Price from: $85,000', location: 'BKK 1, Boeng Keng Kang, Phnom Penh', img: 'https://images.realestate.com.kh/__sized__/listings/2019-09/1_L11STtY-thumbnail-400x300-70.jpeg' },
    { id: 4, name: 'Time Square 3', price: 'Price from: POA', location: 'Boeung Kak 1, Toul Kork, Phnom Penh', img: 'https://imagedelivery.net/bBsVuKsKiUpsZnvyHdOikg/345bef0d-f0df-4375-87c7-385fc99c3c00/md' },
    { id: 5, name: 'Time Square 306', price: 'Price from: POA', location: 'BKK 1, Boeng Keng Kang, Phnom Penh', img: 'https://cdn.fazwaz-kh.com/wbr/iBTvIa8stLJAb7yE7xGpdrINYb8/355x240/unit/1526842/photo-5-2023-11-01-15-03-05-thumbnail-1040x780-70.jpeg' },
];

const landForRent = [
    { id: 6, name: 'J Tower 2 Landminium', price: 'Price from: $183,645', location: 'BKK 1, Boeng Keng Kang, Phnom Penh', img: 'https://images.khmer24.co/23-09-11/411361-corner-land-for-sale-near-borey-moha-boeng-trea-1694421976-59758483-b.jpg' },
    { id: 7, name: 'Vue Aston', price: 'Price from: $72,000', location: 'Nirouth, Chbar Ampov, Phnom Penh', img: 'https://images.realestate.com.kh/listings/original/2025-06/koh-rong-land-detail-3.jpeg' },
    { id: 8, name: 'The Penthouse Residence', price: 'Price from: $170,000', location: 'Tonle Bassac, Chamkarmorn, Phnom...', img: 'https://images.khmer24.co/21-10-26/585733-land-for-sale-along-national-road-132-1635217458-24384285-c.jpg' },
    { id: 9, name: 'R&F CITY MIRO', price: 'Price from: $50,000', location: 'Chak Angrae Leu, Meanchey, Phnom...', img: 'https://cdn.fazwaz-kh.com/wbr/MWM2nhk0OusjoUC6FqPpqydn-bI/355x240/unit/1540694/1-english-thumbnail-1040x780-70.jpeg' },
    { id: 10, name: 'Urban Village Phase 2', price: 'Price from: $78,030', location: 'Chak Angrae Leu, Meanchey, Phnom...', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRaLqWAYXZvzy06Z4N13iSBO3tPHASiE-gFk9IedSpyFFFIj8ae2XurEb&s=10' },
];

export default function Land() {
    const [activeTab, setActiveTab] = useState('Buy');

    return (
        <div className="land-page">

            {/* ── Hero Section ── */}
            <div className="land-hero">
                <div className="land-hero-overlay"></div>
                <div className="land-hero-layout">

                    {/* Center: Search Box */}
                    <div className="land-center">
                        <div className="land-hero-search">
                            <h2>Find Land in Cambodia</h2>
                            <div className="land-search-tabs">
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
                            <div className="land-search-input">
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
                    <div className="land-right">
                        <div className="units-left-badge">
                            <span className="units-number">15</span>
                            <span className="units-text">Units Left!</span>
                        </div>
                        <div className="land-price-box">
                            <div className="starting-from-text">Starting<br />From</div>
                            <div className="land-price-value">$1,8XX</div>
                            <div className="land-price-unit">/sqm net</div>
                        </div>
                        <div className="secure-now-section">
                            <h3 className="secure-now-title">Secure Yours Now!</h3>
                        </div>
                    </div>

                </div>
            </div>

            {/* ── Listings Below Hero ── */}
            <div className="land-listings-page">

                {/* Completed Land for Sale */}
                <section className="land-section">
                    <div className="land-section-header">
                        <div>
                            <h2 className="land-section-title">Completed Land for Sale</h2>
                        </div>
                        <span className="land-section-count">{landForSale.length} Properties</span>
                    </div>
                    <div className="land-grid">
                        {landForSale.map(c => (
                            <Link to={`/property/${c.id}`} key={c.id} className="land-card">
                                <div className="land-card-img-wrap">
                                    <img src={c.img} alt={c.name} />
                                    <span className="land-video-badge">&#9654; VIDEO</span>
                                </div>
                                <div className="land-card-info">
                                    <h4>{c.name}</h4>
                                    <p className="land-card-price">{c.price}</p>
                                    <p className="land-card-loc">{c.location}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="land-view-more-wrap">
                        <button className="land-view-more-btn">View More</button>
                    </div>
                </section>

                {/* Completed Land for Rent */}
                <section className="land-section">
                    <div className="land-section-header">
                        <div>
                            <h2 className="land-section-title">Completed Land for Rent</h2>
                        </div>
                        <span className="land-section-count">{landForRent.length} Properties</span>
                    </div>
                    <div className="land-grid">
                        {landForRent.map(c => (
                            <Link to={`/property/${c.id}`} key={c.id} className="land-card">
                                <div className="land-card-img-wrap">
                                    <img src={c.img} alt={c.name} />
                                    <span className="land-video-badge">&#9654; VIDEO</span>
                                </div>
                                <div className="land-card-info">
                                    <h4>{c.name}</h4>
                                    <p className="land-card-price">{c.price}</p>
                                    <p className="land-card-loc">{c.location}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="land-view-more-wrap">
                        <button className="land-view-more-btn">View More</button>
                    </div>
                </section>

                {/* ── News & Guides ── */}
                <section className="land-section">
                    <div className="land-section-header">
                        <div>
                            <h2 className="land-section-title">News &amp; Guides</h2>
                        </div>
                    </div>

                    <div className="land-news-layout">
                        {/* Featured promo */}
                        <div className="land-news-featured">
                            <img
                                src="https://dakakunrealty.com/userfiles/thumbs/IMG_1716-Edit.jpg"
                                alt="Time Square 9"
                                className="land-news-featured-img"
                            />
                            <div className="land-news-featured-overlay">
                                <div className="land-news-featured-badge">FEATURED</div>
                                <h3>Time Square 9 — The Gatsby Residence</h3>
                                <p>BKK1 Prime Location · Starting from <strong>$1,700/sqm</strong></p>
                                <button className="land-news-featured-btn">Secure Pre-Sale Deal</button>
                            </div>
                        </div>

                        {/* Articles list */}
                        <div className="land-news-articles">
                            {[
                                {
                                    title: 'Cambodia Allows Latin Alphabet Names on Land Titles for Foreign Property Owners',
                                    date: 'July 13, 2026, 10:24 a.m.',
                                    excerpt: 'The Ministry of Land Management, Urban Planning and Construction (MLMUPC) has introduced a new ch...',
                                    img: 'https://photos.ips-cambodia.com/photos/property/15635/22112410567f4308-15635-1365-sqm-residential-land-for-sale-svay-dangkum-siem-reap3-360x250.thumb.jpg',
                                },
                                {
                                    title: 'Escrow Services in Cambodia: What They Are, How They Work...',
                                    date: 'July 10, 2026, 2:09 p.m.',
                                    excerpt: 'You bought a property, let say a house or land. 2 important questions: What if the seller doesn\'t...',
                                    img: 'https://photos.ips-cambodia.com/photos/property/15635/22112410560fd803-15635-1365-sqm-residential-land-for-sale-svay-dangkum-siem-reap1-360x250.thumb.jpg',
                                },
                                {
                                    title: 'Everything You Need to Know About Borey Peng Huoth Boeung Snor...',
                                    date: 'July 7, 2026, 11:14 a.m.',
                                    excerpt: 'When people talk about premium borey developments in Phnom Penh, Borey Peng Huoth Boeung Snor is...',
                                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_ZCGFZXErHntsPR-R8f9f4RkbmQ5FZQx37Ug2RvksPcKfr9YW_PwKM4&s=10',
                                },
                            ].map((article, i) => (
                                <div key={i} className="land-news-article">
                                    <img src={article.img} alt={article.title} className="land-news-thumb" />
                                    <div className="land-news-article-body">
                                        <h4 className="land-news-article-title">{article.title}</h4>
                                        <p className="land-news-article-date">{article.date}</p>
                                        <p className="land-news-article-excerpt">{article.excerpt}</p>
                                    </div>
                                </div>
                            ))}

                            <div className="land-view-more-wrap">
                                <button className="land-view-more-btn">View More</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Featured Developers ── */}
                <section className="land-section">
                    <div className="land-section-header">
                        <div>
                            <h2 className="land-section-title">Featured Developers</h2>
                        </div>
                    </div>
                    <div className="land-grid">
                        {[
                            { name: 'Naki Group Co., Ltd.', desc: 'Naki Realty was founded in Cambodia...', img: 'https://images.realestate.com.kh/__sized__/users/2021-07/naki-thumbnail-270x202-70.jpeg' },
                            { name: 'Bodaiju Residences', desc: 'Bodaiju Residences is strategically loc...', img: 'https://images.realestate.com.kh/__sized__/offices/bodaiju-logo-thumbnail-270x202.png' },
                            { name: 'Tanichu Assetment Co., Ltd', desc: 'Tanichu Assetment Co., Ltd is a leadin...', img: 'https://images.realestate.com.kh/__sized__/users/2025-06/86b7339b-51cf-48e4-b78f-22f147fb9a21-thumbnail-270x202.png' },
                            { name: 'Megakim World Corp Ltd', desc: 'Megakim World Corp Ltd. is one of Ca...', img: 'https://images.realestate.com.kh/__sized__/users/2025-06/watermark-template-thumbnail-270x202.png' },
                            { name: 'Global Titan Stone Real Estate', desc: 'GLOBAL TITAN STONE REAL ESTATE...', img: 'https://images.realestate.com.kh/__sized__/offices/logo_Y8naGO9-thumbnail-270x202-70.jpg' },
                        ].map((dev, i) => (
                            <Link to="#" key={i} className="land-card dev-card">
                                <div className="dev-card-img-wrap">
                                    <img src={dev.img} alt={dev.name} onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + dev.name + '&background=fff&color=111827&size=200'; }} />
                                </div>
                                <div className="land-card-info">
                                    <h4>{dev.name}</h4>
                                    <p className="land-card-loc">{dev.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="land-view-more-wrap">
                        <button className="land-view-more-btn">View More</button>
                    </div>
                </section>

                {/* ── Popular Locations ── */}
                <section className="land-section">
                    <div className="land-section-header">
                        <div>
                            <h2 className="land-section-title">Popular Locations</h2>
                        </div>
                    </div>
                    <div className="land-grid">
                        {[
                            { name: 'Phnom Penh', sale: '7k', rent: '27k', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEiNTBobEhESuXH9M6QkVvDK58FYz1N81r2HqdI6uWp5aqpg9gmGEOrQPd&s=10' },
                            { name: 'Chamkarmon', sale: '1k', rent: '16k', img: 'https://images.realestate.com.kh/files/2020-08/p1122131_YDKuk4W.jpg' },
                            { name: 'Daun Penh', sale: '349', rent: '3k', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN9PqZYJ5krekEwTOFQy3pfqyWHQ7OieIpjdIJT9pBZg&s=10' },
                            { name: 'BKK 1', sale: '309', rent: '6k', img: 'https://images.realestate.com.kh/files/2023-07/bkk-phnom-penh-cambodia-development_Df0GHNm.jpg' },
                            { name: 'Russian Market', sale: '103', rent: '2k', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwGYyHatD_5UgzHPwmImnYpAKuX-RCeqTbrOFbmOip8a-o29qxLViiVUE&s=10' },
                        ].map((loc, i) => (
                            <Link to="#" key={i} className="land-location-card">
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
