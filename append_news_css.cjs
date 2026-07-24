const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'pages', 'Condo', 'Condo.css');

const newsCSS = `
/* ===========================
   News & Guides Section
=========================== */
.condo-news-layout {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
}

.condo-news-featured {
    flex: 1.2;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    background: #111827;
    border: 1px solid rgba(255,255,255,0.06);
    display: flex;
    align-items: flex-end;
    min-height: 380px;
}

.condo-news-featured-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.condo-news-featured-overlay {
    position: relative;
    z-index: 2;
    padding: 30px;
    background: linear-gradient(to top, rgba(10, 16, 32, 0.95) 0%, rgba(10, 16, 32, 0.6) 50%, transparent 100%);
    width: 100%;
    color: #fff;
}

.condo-news-featured-badge {
    display: inline-block;
    background: #d4b96a;
    color: #0a1020;
    font-size: 11px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 4px;
    margin-bottom: 12px;
    letter-spacing: 1px;
}

.condo-news-featured h3 {
    font-size: 26px;
    font-family: 'Playfair Display', serif;
    margin: 0 0 10px;
    color: #fff;
    line-height: 1.3;
}

.condo-news-featured p {
    font-size: 14px;
    color: #ddd;
    margin: 0 0 20px;
}

.condo-news-featured p strong {
    color: #d4b96a;
}

.condo-news-featured-btn {
    background: #d4b96a;
    color: #0a1020;
    border: none;
    padding: 12px 28px;
    font-size: 14px;
    font-weight: 600;
    border-radius: 40px;
    cursor: pointer;
    transition: background 0.2s, transform 0.1s;
}

.condo-news-featured-btn:hover {
    background: #e8d086;
    transform: translateY(-2px);
}

.condo-news-articles {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.condo-news-article {
    display: flex;
    gap: 16px;
    background: #111827;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 10px;
    padding: 16px;
    transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
    text-decoration: none;
    color: inherit;
}

.condo-news-article:hover {
    transform: translateX(4px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
    border-color: rgba(212, 185, 106, 0.3);
}

.condo-news-thumb {
    width: 140px;
    height: 100px;
    object-fit: cover;
    border-radius: 6px;
}

.condo-news-article-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.condo-news-article-title {
    font-size: 15px;
    font-weight: 600;
    color: #f0f0f0;
    margin: 0 0 6px;
    line-height: 1.4;
    font-family: 'Inter', sans-serif;
    transition: color 0.2s;
}

.condo-news-article:hover .condo-news-article-title {
    color: #d4b96a;
}

.condo-news-article-date {
    font-size: 12px;
    color: #6b7a99;
    margin: 0 0 6px;
}

.condo-news-article-excerpt {
    font-size: 13px;
    color: #999;
    margin: 0;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.condo-news-articles .condo-view-more-wrap {
    justify-content: flex-end;
    margin-top: auto;
}
`;

fs.appendFileSync(cssPath, newsCSS, 'utf8');
console.log('Appended News & Guides CSS to Condo.css');
