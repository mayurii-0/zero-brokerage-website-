const fs = require('fs');

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/transitionEnd:\s*\{\s*overflow:\s*"visible"\s*\}/g, 'overflow: "visible"');
    fs.writeFileSync(filePath, content, 'utf8');
}

fixFile('src/components/PropertyShowcase.tsx');
fixFile('src/app/properties/page.tsx');
console.log("Fixed");
