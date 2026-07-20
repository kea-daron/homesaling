const fs = require('fs');

const css = `
/* ---- RESPONSIVE MEDIA QUERIES ---- */
@media (max-width: 768px) {
    .pd-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }
    
    .pd-actions {
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
    .pd-gallery {
        display: flex;
        flex-direction: column;
    }
    
    .pd-gallery-main {
        width: 100%;
        height: 300px;
    }
    
    .pd-gallery > img:not(.pd-gallery-main img) {
        display: none;
    }
    
    .pd-gallery-overlay:not(.pd-gallery-main) {
        display: none;
    }
    
    .pd-content-wrapper {
        flex-direction: column;
    }
    
    .pd-main-info {
        padding: 15px;
        width: 100%;
        box-sizing: border-box;
    }
    
    .pd-sidebar {
        width: 100%;
        position: static;
        margin-top: 20px;
    }
    
    .pd-title-row {
        flex-direction: column;
    }
    
    .pd-title {
        max-width: 100%;
        font-size: 20px;
    }
    
    .pd-price-box {
        text-align: left;
        margin-top: 15px;
    }
    
    .pd-overview-grid,
    .pd-highlights-grid,
    .pd-features-grid {
        grid-template-columns: 1fr;
    }
    
    .pd-loc-stats {
        flex-wrap: wrap;
    }
    
    .pd-explore-item {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
    
    .pd-explore-price {
        margin-right: 0;
        margin-left: 95px;
    }
    
    .pd-location-footer {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }
    
    .pd-loc-stats {
        width: 100%;
        justify-content: space-between;
    }
}
`;

fs.appendFileSync('src/pages/PropertyDetail/PropertyDetail.css', css);
