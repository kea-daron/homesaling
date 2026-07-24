const fs = require('fs');
const path = require('path');
const cssPath = path.join(__dirname, 'src', 'pages', 'Condo', 'Condo.css');
let content = fs.readFileSync(cssPath, 'utf8');

// Find the marker and cut everything from it
const marker = '/* ===========================\n   Condo Listings Below Hero\n=========================== */';
const markerAlt = '/* ===========================\r\n   Condo Listings Below Hero\r\n=========================== */';

const idx = content.indexOf('/* ===========================') ;
const endOfHero = content.lastIndexOf('.secure-icon-box {');
// Find the start of listings comment
let listingsStart = content.indexOf('/* ===========================\n   Condo Listings');
if (listingsStart === -1) listingsStart = content.indexOf('/* ===========================\r\n   Condo Listings');
if (listingsStart === -1) {
    // Try to find the .condo-listings-page selector directly
    listingsStart = content.indexOf('.condo-listings-page');
    if (listingsStart !== -1) {
        // back up to find the comment block before it
        const commentStart = content.lastIndexOf('/*', listingsStart);
        if (commentStart !== -1 && listingsStart - commentStart < 100) {
            listingsStart = commentStart;
        }
    }
}

const premiumCSS = `/* ===========================
   Condo Listings — Premium Design
=========================== */

.condo-listings-page {
    background: #0a1020;
    padding: 70px 0 90px;
    position: relative;
}

.condo-listings-page::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
        radial-gradient(ellipse at 10% 20%, rgba(27,45,107,0.18) 0%, transparent 60%),
        radial-gradient(ellipse at 90% 80%, rgba(212,185,106,0.06) 0%, transparent 60%);
    pointer-events: none;
}

.condo-section {
    max-width: 1240px;
    margin: 0 auto 72px;
    padding: 0 32px;
    position: relative;
}

.condo-section-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 32px;
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(212, 185, 106, 0.2);
}

.condo-section-title {
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    margin: 0 0 8px;
    font-family: 'Playfair Display', Georgia, serif;
    letter-spacing: 0.3px;
    position: relative;
}

.condo-section-title::after {
    content: '';
    display: block;
    width: 48px;
    height: 3px;
    background: linear-gradient(90deg, #d4b96a, transparent);
    margin-top: 8px;
    border-radius: 2px;
}

.condo-section-count {
    font-size: 13px;
    color: #d4b96a;
    font-family: 'Inter', sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 6px;
}

.condo-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    margin-bottom: 36px;
}

.condo-card {
    text-decoration: none;
    color: inherit;
    border-radius: 10px;
    overflow: hidden;
    background: #111827;
    border: 1px solid rgba(255,255,255,0.06);
    transition: transform 0.35s cubic-bezier(0.25, 0.8, 0.25, 1),
                box-shadow 0.35s cubic-bezier(0.25, 0.8, 0.25, 1),
                border-color 0.35s;
    display: flex;
    flex-direction: column;
}

.condo-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(212,185,106,0.3);
    border-color: rgba(212, 185, 106, 0.35);
}

.condo-card-img-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 16/10;
    overflow: hidden;
    background: #1c2333;
}

.condo-card-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.55s cubic-bezier(0.25, 0.8, 0.25, 1);
    filter: brightness(0.9);
}

.condo-card:hover .condo-card-img-wrap img {
    transform: scale(1.08);
    filter: brightness(1);
}

.condo-card-img-wrap::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(17,24,39,0.85) 0%, transparent 100%);
    pointer-events: none;
}

.condo-video-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(0,0,0,0.75);
    backdrop-filter: blur(4px);
    color: #fff;
    font-size: 10px;
    font-weight: 600;
    padding: 4px 9px;
    border-radius: 20px;
    letter-spacing: 0.8px;
    border: 1px solid rgba(255,255,255,0.15);
    z-index: 1;
}

.condo-card-info {
    padding: 16px 16px 18px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.condo-card-info h4 {
    font-size: 15px;
    font-weight: 700;
    color: #f0f0f0;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'Inter', sans-serif;
    transition: color 0.2s;
}

.condo-card:hover .condo-card-info h4 {
    color: #d4b96a;
}

.condo-card-price {
    font-size: 13px;
    color: #d4b96a;
    margin: 0;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
}

.condo-card-loc {
    font-size: 12px;
    color: #6b7a99;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'Inter', sans-serif;
}

.condo-view-more-wrap {
    display: flex;
    justify-content: center;
    margin-top: 4px;
}

.condo-view-more-btn {
    background: transparent;
    color: #d4b96a;
    border: 1px solid rgba(212, 185, 106, 0.5);
    padding: 12px 48px;
    font-size: 13px;
    font-weight: 600;
    border-radius: 40px;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    transition: all 0.3s ease;
}

.condo-view-more-btn:hover {
    background: rgba(212, 185, 106, 0.12);
    border-color: #d4b96a;
    color: #f0d890;
    box-shadow: 0 0 24px rgba(212,185,106,0.15);
    transform: translateY(-2px);
}
`;

if (listingsStart !== -1) {
    content = content.substring(0, listingsStart) + '\n' + premiumCSS;
    fs.writeFileSync(cssPath, content, 'utf8');
    console.log('Listings CSS replaced successfully. Start index:', listingsStart);
} else {
    console.log('Could not find listings section. Appending...');
    fs.appendFileSync(cssPath, '\n' + premiumCSS, 'utf8');
}
