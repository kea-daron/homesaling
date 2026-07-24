const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;
            
            content = content.replace(/<span className="label">Property Type<\/span>[\s\S]*?<span className="value">[^<]+<\/span>/g, '<span className="label">Property Type</span>');
            content = content.replace(/<span className="label">Price<\/span>[\s\S]*?<span className="value">[^<]+<\/span>/g, '<span className="label">Price</span>');
            content = content.replace(/<span className="label">Bedrooms<\/span>[\s\S]*?<span className="value">[^<]+<\/span>/g, '<span className="label">Bedrooms</span>');

            if (content !== original) {
                fs.writeFileSync(fullPath, content);
                console.log('Updated JSX:', fullPath);
            }
        }
    }
}

processDir('src/pages');
