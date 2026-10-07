const fs = require('fs');

const path = 'src/components/PropertyShowcase.tsx';
let content = fs.readFileSync(path, 'utf8');

const lines = content.split('\n');
let currentCategory = '';

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('"category":')) {
        currentCategory = lines[i].split('"category":')[1].split('"')[1];
    }
    
    if (lines[i].includes('"image":')) {
        let newImage = '/images/urban-stay.jpg';
        if (currentCategory === 'Buy') newImage = '/images/modern-residence.jpg';
        else if (currentCategory === 'Rent / Lease') newImage = '/images/urban-stay.jpg';
        else if (currentCategory === 'Lands & Farmlands') newImage = '/images/greenfield-land.jpg';
        else if (currentCategory === 'Commercial Offices') newImage = '/images/business-workspace.jpg';
        else if (currentCategory === 'Furniture Rentals') newImage = '/images/service-furniture.jpg';

        lines[i] = lines[i].replace(/"image":\s*"[^"]+"/, `"image": "${newImage}"`);
    }
}

fs.writeFileSync(path, lines.join('\n'), 'utf8');
