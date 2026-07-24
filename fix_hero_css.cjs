const fs = require('fs');
const path = require('path');

const pages = ['Condo', 'Borey', 'Land'];

pages.forEach(page => {
    const prefix = page.toLowerCase();
    const cssPath = path.join(__dirname, 'src', 'pages', page, `${page}.css`);
    
    if (fs.existsSync(cssPath)) {
        const fixCSS = `
/* ===========================
   Hero Responsive Fixes
=========================== */
@media (max-width: 992px) {
    .${prefix}-hero-layout {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 80px 20px;
        gap: 40px;
        height: auto;
    }
    
    .${prefix}-center, .${prefix}-right {
        flex: 1 1 100%;
        max-width: 100%;
        width: 100%;
    }
}

@media (max-width: 768px) {
    .${prefix}-hero-search {
        padding: 24px 20px;
    }
    
    .${prefix}-hero-search h2 {
        font-size: 22px;
        white-space: normal;
    }
    
    .${prefix}-search-tabs {
        flex-wrap: wrap;
    }
    
    .${prefix}-search-tabs .tab {
        flex: 1 1 auto;
        padding: 10px;
    }
    
    .${prefix}-right {
        align-items: center;
    }
}
`;
        fs.appendFileSync(cssPath, fixCSS);
        console.log(`Fixed hero responsive CSS in ${page}.css`);
    }
});
