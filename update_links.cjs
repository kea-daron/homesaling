const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const pages = [
  'PhnomPenh/PhnomPenh.jsx',
  'BKK/BKK.jsx',
  'Chamkamorn/Chamkamorn.jsx',
  'DounPenh/DounPenh.jsx',
  'RussianMarket/RussianMarket.jsx',
  'Sihanoukville/Sihanoukville.jsx',
  'Kampot/Kampot.jsx',
  'SiemReap/SiemReap.jsx',
  'Battambong/Battambong.jsx'
];

pages.forEach(p => {
  const fullPath = path.join(pagesDir, p);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Make sure Link is imported if not already
    if (!content.includes('import { Link }')) {
      content = content.replace("import React from 'react';", "import React from 'react';\nimport { Link } from 'react-router-dom';");
    }

    // Replace <div className="property-card"> with Link wrapper
    // We only replace the exact div start, and we must replace the ending div
    // A simple regex might be fragile, but since the structure is perfectly uniform:
    content = content.replace(/<div className="property-card">/g, '<Link to="/property/1" className="property-card" style={{textDecoration: "none", color: "inherit", display: "block"}}>');
    
    // The closing div of the card is right after the actions div
    const closingPattern = /<div className="actions">\s*<button className="tel-btn">[^<]*<\/button>\s*<button className="contact-btn">Contact<\/button>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g;
    
    content = content.replace(closingPattern, (match) => {
      // Replace the very last </div> with </Link>
      return match.substring(0, match.lastIndexOf('</div>')) + '</Link>';
    });

    fs.writeFileSync(fullPath, content);
    console.log(`Updated ${p}`);
  }
});
