const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'pages', 'Condo', 'Condo.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

cssContent = cssContent.replace(/\.buy-page/g, '.condo-page');

const newCSS = `
/* Custom Condo Hero Banner */
.condo-hero {
    position: relative;
    width: 100%;
    min-height: 500px;
    background: #09112a url('../../assets/hero.png') no-repeat center center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 60px 20px;
    font-family: 'Playfair Display', Georgia, serif;
    overflow: hidden;
}

.condo-hero-overlay {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(9, 17, 42, 0.7);
    z-index: 1;
}

.condo-hero-content {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    gap: 40px;
}

/* Left side texts */
.condo-hero-text {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
}

.hero-floating-texts {
    position: relative;
    height: 150px;
    margin-bottom: 20px;
    color: #dfc888;
    font-style: italic;
    font-size: 20px;
}

.floating-text {
    position: absolute;
}
.floating-text.prime {
    top: 0; left: 0;
    font-size: 24px;
}
.floating-text.height {
    top: 30px; left: 180px;
    font-size: 16px;
    color: #fff;
    font-style: normal;
}
.floating-text.south {
    bottom: 0; left: 100px;
}

.main-titles {
    text-align: center;
}

.hero-main-title {
    font-size: 64px;
    color: #dfc888;
    margin: 0;
    font-weight: 500;
}

.hero-subtitle {
    font-size: 20px;
    color: #fff;
    margin-top: 5px;
    font-style: italic;
}

/* Search Box */
.condo-hero-search {
    flex: 1;
    background: rgba(9, 17, 42, 0.85);
    padding: 30px;
    border-radius: 4px;
    font-family: 'Inter', sans-serif;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    min-width: 400px;
}

.condo-hero-search h2 {
    text-align: center;
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 22px;
}

.condo-search-tabs {
    display: flex;
    margin-bottom: 15px;
}

.condo-search-tabs .tab {
    flex: 1;
    background: transparent;
    border: 1px solid #334;
    color: #fff;
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    transition: 0.3s ease;
}

.condo-search-tabs .tab.active {
    background: #1B2D6B; /* use updated main color */
    border-color: #1B2D6B;
}

.condo-search-tabs .tab:hover:not(.active) {
    background: rgba(255,255,255,0.1);
}

.condo-search-input {
    display: flex;
    background: #fff;
    align-items: center;
    border-radius: 4px;
    padding: 5px;
    margin-bottom: 15px;
}

.condo-search-input svg {
    color: #666;
    margin-left: 10px;
    width: 20px; height: 20px;
}

.condo-search-input input {
    flex: 1;
    border: none;
    padding: 10px;
    outline: none;
    font-size: 14px;
    color: #333;
}

.search-submit {
    background: #1B2D6B; /* used to be green, match the theme */
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
}
.search-submit svg {
    margin: 0;
    color: white;
}

.concierge-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #aaa;
    font-size: 13px;
    cursor: pointer;
}
.concierge-link:hover {
    color: #fff;
}

/* Right side pricing */
.condo-hero-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.units-left {
    font-size: 40px;
    color: #dfc888;
    margin-bottom: 20px;
}
.units-left .number {
    font-size: 60px;
}
.units-left .text {
    font-size: 30px;
}

.price-box {
    border: 1px solid #dfc888;
    padding: 20px 30px;
    display: flex;
    align-items: center;
    gap: 15px;
    color: #dfc888;
    margin-bottom: 20px;
}

.starting-from {
    font-size: 16px;
    text-align: right;
    font-style: italic;
}

.price-value {
    font-size: 48px;
    font-weight: bold;
}

.price-unit {
    font-size: 16px;
    font-style: italic;
}

.secure-now {
    font-size: 24px;
    font-style: italic;
    color: #fff;
    font-weight: normal;
}

/* Hide top filter bar logic if remaining */
.condo-page .top-filter-bar-wrapper {
    display: none; 
}
`;

fs.writeFileSync(cssPath, cssContent + '\\n' + newCSS, 'utf8');
console.log('Appended Condo CSS');
