const fs = require('fs');
const path = require('path');

const pages = ['Condo', 'Borey', 'Land'];

pages.forEach(page => {
    const prefix = page.toLowerCase();
    const cssPath = path.join(__dirname, 'src', 'pages', page, `${page}.css`);
    
    if (fs.existsSync(cssPath)) {
        let css = fs.readFileSync(cssPath, 'utf8');
        
        // Check if responsive styles are already there to avoid duplicates
        if (!css.includes('/* Responsive Styles */')) {
            const responsiveCSS = `
/* ===========================
   Responsive Styles
=========================== */
@media (max-width: 992px) {
    .${prefix}-hero-inner {
        flex-direction: column;
        text-align: center;
        padding: 100px 20px 40px;
        height: auto;
    }
    
    .${prefix}-hero-content {
        align-items: center;
    }

    .${prefix}-hero-visual {
        margin-top: 40px;
    }

    .${prefix}-hero-title {
        font-size: 42px;
    }

    .units-number {
        font-size: 56px;
    }

    .${prefix}-price-value {
        font-size: 40px;
    }

    .${prefix}-nav {
        flex-direction: column;
        gap: 12px;
    }
    
    .${prefix}-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .${prefix}-news-layout {
        flex-direction: column;
    }
    
    .${prefix}-news-featured {
        width: 100%;
        margin-bottom: 24px;
    }
    
    .${prefix}-news-articles {
        width: 100%;
    }
}

@media (max-width: 768px) {
    .${prefix}-hero-title {
        font-size: 32px;
    }
    
    .${prefix}-hero-sub {
        font-size: 16px;
    }

    .${prefix}-hero-search {
        flex-direction: column;
        border-radius: 12px;
    }

    .search-divider {
        display: none;
    }

    .search-btn {
        width: 100%;
        border-radius: 8px;
        justify-content: center;
        margin-top: 10px;
    }
    
    .${prefix}-grid {
        grid-template-columns: 1fr;
    }
    
    .${prefix}-section-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
    
    .${prefix}-section {
        padding: 40px 20px;
    }
}
`;
            fs.appendFileSync(cssPath, responsiveCSS);
            console.log(`Added responsive CSS to ${page}.css`);
        } else {
            console.log(`Responsive CSS already exists in ${page}.css`);
        }
    }
});
