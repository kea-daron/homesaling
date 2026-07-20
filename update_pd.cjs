const fs = require('fs');

const icons = `
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
`;

const newSections = `

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
                            <div className="pd-explore-tab active">Sale <span className="pd-tab-count" style={{background: 'white', color: '#1B2D6B'}}>18</span></div>
                            <div className="pd-explore-tab inactive">Rent <span className="pd-tab-count">5</span></div>
                        </div>
                        <div className="pd-explore-list">
                            {[1,2,3,4,5].map(i => (
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
                            <img src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1200&q=80" alt="Video" style={{filter: 'brightness(0.8)'}} />
                            <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', alignItems: 'center', gap: '15px'}}>
                                <h2 style={{color: 'white', fontSize: '36px', margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>PHNOM</h2>
                                <PlayIcon style={{width: '60px', height: '60px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'}} />
                                <h2 style={{color: 'white', fontSize: '36px', margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>PENH</h2>
                            </div>
                        </div>
                        <div className="pd-location-footer">
                            <div>
                                <img src="https://images.unsplash.com/photo-1581452932152-78096f30aebc?w=150&q=80" alt="Phnom Penh" style={{width: '80px', height: '50px', borderRadius: '4px', objectFit: 'cover'}} />
                            </div>
                            <div style={{flex: 1, marginLeft: '15px'}}>
                                <div className="pd-loc-title">Phnom Penh</div>
                                <a href="#" className="pd-loc-link">View Location</a>
                            </div>
                            <div className="pd-loc-stats">
                                <div className="pd-loc-stat-item"><HouseIcon /> <div>Buy<br/><strong>385K - 7615K</strong></div></div>
                                <div className="pd-loc-stat-item"><HouseIcon /> <div>Rent<br/><strong>3500 - 38K</strong></div></div>
                                <div className="pd-loc-stat-item"><TagIcon /> <div>For Sale<br/><strong>7603 Homes</strong></div></div>
                                <div className="pd-loc-stat-item"><FlagIcon /> <div>For Rent<br/><strong>32096 Homes</strong></div></div>
                            </div>
                        </div>

                        <h3 className="pd-section-title">Similar Villas in Dangkao</h3>
                        <div className="pd-similar-grid">
                            {[1,2,3,4].map(i => (
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
`;

let content = fs.readFileSync('src/pages/PropertyDetail/PropertyDetail.jsx', 'utf8');

// Insert icons right before `export default function PropertyDetail()`
content = content.replace('export default function PropertyDetail()', icons + '\nexport default function PropertyDetail()');

// Insert new sections right before `</div>\n\n                    {/* Right Sidebar Form */}`
content = content.replace('                    </div>\n\n                    {/* Right Sidebar Form */}', newSections + '\n                    </div>\n\n                    {/* Right Sidebar Form */}');

fs.writeFileSync('src/pages/PropertyDetail/PropertyDetail.jsx', content);
