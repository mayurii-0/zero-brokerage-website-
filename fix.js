const fs = require('fs');
let content = fs.readFileSync('src/components/AnimatedSpotlight.tsx', 'utf8');

content = content.replace('href: "/properties"', 'href: "/properties?category=Furniture+Rentals"');
content = content.replace('href: "/properties"', 'href: "/properties?category=Commercial+Offices"');
content = content.replace('href: "/properties"', 'href: "/properties?category=Buy"');
content = content.replace('href: "/properties"', 'href: "/properties?category=Lands+%26+Farmlands"');

fs.writeFileSync('src/components/AnimatedSpotlight.tsx', content, 'utf8');
console.log("Done");
