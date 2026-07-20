import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyDetail.css';

// SVG Icons
const DownloadIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
);

const GridIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
);

const HeartOutline = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
);

const ShareIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"></circle>
        <circle cx="6" cy="12" r="3"></circle>
        <circle cx="18" cy="19" r="3"></circle>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
    </svg>
);

const CameraIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
        <circle cx="12" cy="13" r="4"></circle>
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
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);

const BedIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4v16M2 8h20v12H2M7 8v4" />
        <rect x="10" y="8" width="5" height="4" rx="1" />
    </svg>
);

const BathIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 6 C9 4.3 10.3 3 12 3 C13.7 3 15 4.3 15 6 L15 10" />
        <path d="M4 10 h16 v2 a8 8 0 0 1-16 0 v-2z" />
        <line x1="8" y1="21" x2="8" y2="19" />
        <line x1="16" y1="21" x2="16" y2="19" />
    </svg>
);

const AreaIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M3 9h18" />
    </svg>
);

const CompassIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
    </svg>
);

const StairsIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h4v-4h4v-4h4v-4h4V5"></path>
    </svg>
);

const CalendarIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);

const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);



const CheckmarkIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
);
const DocumentIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
);
const PersonIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);
const BarcodeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5v14M7 5v14M11 5v14M15 5v14M19 5v14M23 5v14"></path></svg>
);
const ClockIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);
const CarIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="10" width="18" height="9" rx="2" ry="2"></rect><path d="M5 10l2-5h10l2 5M7 15h.01M17 15h.01"></path></svg>
);
const WaterDropIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
);
const GateIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22V2M20 22V2M4 12h16M4 6h16M4 18h16M9 22V2M15 22V2"></path></svg>
);
const PlayIcon = () => (
    <svg viewBox="0 0 24 24" fill="red" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
);
const TagIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
);
const FlagIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path></svg>
);
const HouseIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
);

export default function PropertyDetail() {
    return (
        <div className="property-detail-page">
            <div className="pd-container">

                {/* Header Actions */}
                <div className="pd-header">
                    <div className="pd-breadcrumbs">
                        <Link to="/" style={{ color: '#555', textDecoration: 'none' }}>Boreys</Link> &gt; Chankiri Palm Creek
                    </div>
                    <div className="pd-actions">
                        <button className="btn-brochure">Brochure <DownloadIcon /></button>
                        <button className="action-icon-btn"><GridIcon /></button>
                        <button className="action-icon-btn"><HeartOutline /> Save</button>
                        <button className="action-icon-btn"><ShareIcon /> Share</button>
                    </div>
                </div>

                {/* Gallery */}
                <div className="pd-gallery">
                    <div className="pd-gallery-overlay pd-gallery-main">
                        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" alt="Main" className="pd-gallery-img" />
                        <div className="pd-gallery-tabs">
                            <button className="pd-tab active">
                                <CameraIcon /> Photos <span className="pd-tab-count">17</span>
                            </button>
                            <button className="pd-tab">
                                <MapIcon /> Map
                            </button>
                        </div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&q=80" alt="Thumb 1" className="pd-gallery-img" />
                    <img src="https://www.thespruce.com/thmb/WQdt9HXB78tKg5U5eITP4ZUlYcA=/2500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg" alt="Thumb 2" className="pd-gallery-img" />
                    <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80" alt="Thumb 3" className="pd-gallery-img" />
                    <div className="pd-gallery-overlay">
                        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80" alt="Thumb 4" className="pd-gallery-img" />
                        <div className="gallery-count-overlay">13 +</div>
                    </div>
                </div>

                {/* Content & Sidebar */}
                <div className="pd-content-wrapper">
                    <div className="pd-main-info">

                        {/* Title Row */}
                        <div className="pd-title-row">
                            <div className="pd-title-left">
                                <h1 className="pd-title">5 Bed, 5 Bath Villa for Sale & Rent in Chankiri Palm Creek</h1>
                                <div className="pd-title-loc"><PinIcon /> Chankiri Palm Creek</div>
                            </div>
                            <div className="pd-price-box">
                                <div className="pd-price-sale">For sale <span>$550,000</span></div>
                                <div className="pd-price-rent">For rent <span>$3,000</span> per month</div>
                            </div>
                        </div>

                        {/* Feature Grid */}
                        <div className="pd-feature-grid">
                            <div className="pd-feature-item">
                                <div className="pd-feature-value">5</div>
                                <div className="pd-feature-label"><BedIcon /> Bedroom</div>
                            </div>
                            <div className="pd-feature-item">
                                <div className="pd-feature-value">5</div>
                                <div className="pd-feature-label"><BathIcon /> Bathroom</div>
                            </div>
                            <div className="pd-feature-item">
                                <div className="pd-feature-value">299</div>
                                <div className="pd-feature-label"><AreaIcon /> Floor Area (m²)</div>
                            </div>
                            <div className="pd-feature-item">
                                <div className="pd-feature-value">135</div>
                                <div className="pd-feature-label"><AreaIcon /> Land Area (m²)</div>
                            </div>
                            <div className="pd-feature-item">
                                <div className="pd-feature-value">N</div>
                                <div className="pd-feature-label"><CompassIcon /> Facing</div>
                            </div>
                            <div className="pd-feature-item">
                                <div className="pd-feature-value">3</div>
                                <div className="pd-feature-label"><StairsIcon /> Floor Level</div>
                            </div>
                            <div className="pd-feature-item">
                                <div className="pd-feature-value">2023</div>
                                <div className="pd-feature-label"><CalendarIcon /> Completion Year</div>
                            </div>
                        </div>

                        {/* Description */}
                        <h2 className="pd-subtitle">Corner Villa for Sale/Rent in Borey Chankiri</h2>
                        <div className="pd-address"><PinIcon /> Location: Along Techo International Airport Road, Phnom Penh</div>

                        <p style={{ marginBottom: '5px' }}>Property Information</p>
                        <ul className="pd-desc-list">
                            <li>• Land Size: 299 sqm, 13m x 23m</li>
                            <li>• Villa Size: 135 sqm, 9.5m x 14.25m</li>
                            <li>• Total Floors: 3 (E0, E1, E2)</li>
                            <li>• Bedrooms: 5 | Bathrooms: 5</li>
                            <li>• Maid Room: 1</li>
                            <li>• Parking: 2 Cars</li>
                            <li>• Condition: Brand New, Partly Furnished</li>
                        </ul>

                        <button className="read-more-btn">Read more <ChevronDown /></button>


                        {/* --- NEW SECTIONS --- */}
                        <h3 className="pd-section-title">Property Overview</h3>
                        <div className="pd-overview-grid">
                            <div className="pd-overview-item">
                                <HouseIcon />
                                <div>
                                    <strong>Property type:</strong>
                                    Villa
                                </div>
                            </div>
                            <div className="pd-overview-item">
                                <DocumentIcon />
                                <div>
                                    <strong>Title:</strong>
                                    Hard Title
                                </div>
                            </div>
                            <div className="pd-overview-item">
                                <PersonIcon />
                                <div>
                                    <strong>Agency:</strong>
                                    <a href="#">Elyza-REAKH</a>
                                </div>
                            </div>
                            <div className="pd-overview-item">
                                <BarcodeIcon />
                                <div>
                                    <strong>Property ID:</strong>
                                    288094
                                </div>
                            </div>
                            <div className="pd-overview-item">
                                <ClockIcon />
                                <div>
                                    <strong>Listed:</strong>
                                    22 days ago
                                </div>
                            </div>
                            <div className="pd-overview-item">
                                <ClockIcon />
                                <div>
                                    <strong>Updated:</strong>
                                    22 days ago
                                </div>
                            </div>
                            <div className="pd-overview-item">
                                <HouseIcon />
                                <div>
                                    <strong>Project:</strong>
                                    <a href="#">Project 184750: Chankiri Palm Creek</a>
                                </div>
                            </div>
                        </div>

                        <h3 className="pd-section-title">Project Highlights</h3>
                        <div className="pd-highlights-grid">
                            <div className="pd-highlight-item"><CheckmarkIcon /> Brand Developer</div>
                            <div className="pd-highlight-item"><CheckmarkIcon /> Developer Financing</div>
                            <div className="pd-highlight-item"><CheckmarkIcon /> Project Complete</div>
                            <div className="pd-highlight-item"><CheckmarkIcon /> High Appreciation Value</div>
                        </div>

                        <h3 className="pd-section-title">Property Features</h3>
                        <div className="pd-features-container">
                            <div className="pd-feature-row"><GateIcon /> Balcony</div>
                        </div>

                        <h3 className="pd-section-title">Amenities</h3>
                        <div className="pd-features-grid">
                            <div className="pd-feature-row"><CarIcon /> Car Parking</div>
                            <div className="pd-feature-row"><WaterDropIcon /> Non-Flooding</div>
                        </div>

                        <h3 className="pd-section-title">Security</h3>
                        <div className="pd-features-container">
                            <div className="pd-feature-row"><GateIcon /> Gated Community</div>
                        </div>

                        <h3 className="pd-section-title">Explore properties in Chankiri Palm Creek</h3>
                        <div className="pd-explore-tabs">
                            <div className="pd-explore-tab active">Sale <span className="pd-tab-count" style={{ background: 'white', color: '#1B2D6B' }}>18</span></div>
                            <div className="pd-explore-tab inactive">Rent <span className="pd-tab-count">5</span></div>
                        </div>
                        <div className="pd-explore-list">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div className="pd-explore-item" key={i}>
                                    <div className="pd-explore-item-left">
                                        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=100&q=80" className="pd-explore-img" alt="thumb" />
                                        <div className="pd-explore-details">
                                            <h4>Villa Klem (Corner) for Sale...</h4>
                                            <div className="pd-explore-specs">
                                                <span><BedIcon /> 5</span>
                                                <span><BathIcon /> 5</span>
                                                <span><AreaIcon /> 291m²</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pd-explore-price">$438,800</div>
                                </div>
                            ))}
                        </div>

                        <h3 className="pd-section-title">Map</h3>
                        <img src="https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png" className="pd-map-img" alt="Map" />

                        <h3 className="pd-section-title">Location Overview</h3>
                        <div className="pd-location-banner">
                            <img src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1200&q=80" alt="Video" style={{ filter: 'brightness(0.8)' }} />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <h2 style={{ color: 'white', fontSize: '36px', margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>PHNOM</h2>
                                <PlayIcon style={{ width: '60px', height: '60px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }} />
                                <h2 style={{ color: 'white', fontSize: '36px', margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>PENH</h2>
                            </div>
                        </div>
                        <div className="pd-location-footer">
                            <div>
                                <img src="https://images.unsplash.com/photo-1581452932152-78096f30aebc?w=150&q=80" alt="Phnom Penh" style={{ width: '80px', height: '50px', borderRadius: '4px', objectFit: 'cover' }} />
                            </div>
                            <div style={{ flex: 1, marginLeft: '15px' }}>
                                <div className="pd-loc-title">Phnom Penh</div>
                                <a href="#" className="pd-loc-link">View Location</a>
                            </div>
                            <div className="pd-loc-stats">
                                <div className="pd-loc-stat-item"><HouseIcon /> <div>Buy<br /><strong>385K - 7615K</strong></div></div>
                                <div className="pd-loc-stat-item"><HouseIcon /> <div>Rent<br /><strong>3500 - 38K</strong></div></div>
                                <div className="pd-loc-stat-item"><TagIcon /> <div>For Sale<br /><strong>7603 Homes</strong></div></div>
                                <div className="pd-loc-stat-item"><FlagIcon /> <div>For Rent<br /><strong>32096 Homes</strong></div></div>
                            </div>
                        </div>

                        <h3 className="pd-section-title">Similar Villas in Dangkao</h3>
                        <div className="pd-similar-grid">
                            {[1, 2, 3, 4].map(i => (
                                <div className="pd-similar-card" key={i}>
                                    <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=200&q=80" alt="Villa" />
                                    <div className="pd-similar-card-body">
                                        <h4>Villa Klem (Corner) For Sale...</h4>
                                        <p>Price From: $438,800</p>
                                        <p>This spacious corner...</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="pd-similar-more-btn"><button>View More</button></div>

                    </div>

                    {/* Right Sidebar Form */}
                    <div className="pd-sidebar">
                        <div className="sidebar-header">Request Details</div>
                        <div className="sidebar-form">
                            <form onSubmit={e => e.preventDefault()}>
                                <div className="form-group-row">
                                    <input type="text" className="form-input" placeholder="Name" />
                                    <input type="text" className="form-input" placeholder="Phone" />
                                </div>
                                <input type="email" className="form-input" placeholder="Please enter your email address" style={{ marginBottom: '15px' }} />
                                <textarea className="form-textarea" placeholder="Write message to agent here"></textarea>
                                <button className="submit-btn">Submit details</button>
                            </form>

                            <div className="contact-options">
                                <div className="contact-or">Or contact us via</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                                    <a href="#" className="contact-link"><PhoneIcon className="icon-phone" /> Phone</a>
                                    <a href="#" className="contact-link"><span className="icon-telegram" style={{ fontWeight: 'bold', fontSize: '18px' }}>✈</span> Telegram</a>
                                    <a href="#" className="contact-link"><span className="icon-whatsapp" style={{ fontWeight: 'bold', fontSize: '18px' }}>✆</span> Whatsapp</a>
                                    <a href="#" className="contact-link"><span className="icon-wechat" style={{ fontWeight: 'bold', fontSize: '18px' }}>💬</span> Wechat</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

const ChevronDown = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);
