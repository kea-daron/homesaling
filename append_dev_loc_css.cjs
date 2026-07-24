const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'pages', 'Condo', 'Condo.css');

const newCSS = `
/* ===========================
   Featured Developers Section
=========================== */
.dev-card-img-wrap {
    background: #fff;
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 180px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    position: relative;
    overflow: hidden;
}

.dev-card-img-wrap img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: transform 0.3s;
}

.dev-card:hover .dev-card-img-wrap img {
    transform: scale(1.05);
}

/* ===========================
   Popular Locations Section
=========================== */
.condo-location-card {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    aspect-ratio: 4/5;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    transition: transform 0.35s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.35s;
    background: #111827;
}

.condo-location-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,185,106,0.3);
}

.loc-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
    filter: brightness(0.85);
}

.condo-location-card:hover .loc-bg {
    transform: scale(1.1);
    filter: brightness(1);
}

.loc-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(10, 16, 32, 0.95) 0%, rgba(10,16,32,0.4) 40%, transparent 100%);
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.loc-title {
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    margin: 0;
    font-family: 'Playfair Display', serif;
    letter-spacing: 0.5px;
    text-shadow: 0 2px 8px rgba(0,0,0,0.6);
    transition: color 0.3s, transform 0.3s;
}

.condo-location-card:hover .loc-title {
    color: #d4b96a;
    transform: scale(1.05);
}

.loc-stats {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    padding: 14px 16px;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    border-top: 1px solid rgba(255,255,255,0.1);
    font-size: 13px;
    color: #d4b96a;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
}

.loc-stats span {
    display: flex;
    align-items: center;
    gap: 4px;
}
`;

fs.appendFileSync(cssPath, newCSS, 'utf8');
console.log('Appended Developer and Location CSS to Condo.css');
