const fs = require('fs');

const css = `
/* ---- NEW SECTIONS ---- */
.pd-section-title { font-size: 18px; font-weight: bold; margin: 30px 0 15px 0; color: #333; }
.pd-overview-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 20px; }
.pd-overview-item { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: #555; }
.pd-overview-item svg { width: 16px; height: 16px; color: #999; flex-shrink: 0; margin-top: 3px; }
.pd-overview-item strong { display: block; font-weight: normal; margin-bottom: 2px; }
.pd-overview-item a { color: #1B2D6B; text-decoration: none; font-weight: 600; }

.pd-highlights-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 20px; }
.pd-highlight-item { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; color: #444; }
.pd-highlight-item svg { width: 16px; height: 16px; color: #333; }

.pd-feature-row { background: #f9f9f9; padding: 10px 15px; display: flex; align-items: center; gap: 8px; font-size: 13px; color: #555; font-weight: 600; margin-bottom: 5px; }
.pd-feature-row svg { width: 16px; height: 16px; color: #777; }
.pd-features-container { margin-bottom: 20px; }
.pd-features-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }

.pd-explore-tabs { display: flex; margin-bottom: 10px; }
.pd-explore-tab { flex: 1; padding: 12px; text-align: center; font-weight: bold; cursor: pointer; font-size: 14px; border: 1px solid #ddd; }
.pd-explore-tab.active { background-color: #1B2D6B; color: white; border-color: #1B2D6B; }
.pd-explore-tab.inactive { background-color: white; color: #777; }
.pd-explore-list { border-top: 2px solid #1B2D6B; display: flex; flex-direction: column; gap: 10px; }
.pd-explore-item { display: flex; align-items: center; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
.pd-explore-item-left { display: flex; align-items: center; gap: 15px; flex: 1; }
.pd-explore-img { width: 80px; height: 60px; object-fit: cover; border-radius: 4px; }
.pd-explore-details h4 { margin: 0 0 5px 0; font-size: 14px; color: #333; }
.pd-explore-specs { display: flex; gap: 12px; font-size: 12px; color: #777; }
.pd-explore-specs span { display: flex; align-items: center; gap: 4px; }
.pd-explore-specs svg { width: 14px; height: 14px; color: #999; }
.pd-explore-price { font-weight: bold; font-size: 16px; color: #333; margin-right: 15px; }

.pd-map-img { width: 100%; height: auto; border-radius: 4px; margin-bottom: 20px; cursor: pointer; border: 1px solid #eee; }
.pd-location-banner { position: relative; margin-bottom: 0; }
.pd-location-banner img { width: 100%; height: auto; border-top-left-radius: 4px; border-top-right-radius: 4px; }
.pd-location-footer { display: flex; justify-content: space-between; align-items: center; padding: 15px; border: 1px solid #ddd; border-top: none; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; margin-bottom: 20px; background: white;}
.pd-loc-title { font-size: 16px; font-weight: bold; margin-bottom: 5px; }
.pd-loc-link { color: #1B2D6B; font-size: 12px; text-decoration: none; font-weight: bold; }
.pd-loc-stats { display: flex; gap: 20px; }
.pd-loc-stat-item { display: flex; align-items: center; gap: 5px; font-size: 12px; color: #555; }
.pd-loc-stat-item svg { width: 14px; height: 14px; color: #777; }
.pd-loc-stat-item strong { color: #333; }

.pd-similar-grid { display: flex; gap: 15px; overflow-x: auto; padding-bottom: 10px; }
.pd-similar-card { flex: 0 0 200px; border: 1px solid #ddd; border-radius: 4px; overflow: hidden; }
.pd-similar-card img { width: 100%; height: 140px; object-fit: cover; }
.pd-similar-card-body { padding: 10px; font-size: 11px; color: #555; }
.pd-similar-card-body h4 { font-size: 12px; color: #333; margin: 0 0 5px 0; line-height: 1.4; }
.pd-similar-card-body p { margin: 2px 0; }
.pd-similar-more-btn { text-align: center; margin-top: 20px; }
.pd-similar-more-btn button { background: #1B2D6B; color: white; border: none; padding: 10px 20px; border-radius: 4px; font-weight: bold; cursor: pointer; }
`;

fs.appendFileSync('src/pages/PropertyDetail/PropertyDetail.css', css);
