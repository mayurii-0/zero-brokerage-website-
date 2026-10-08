const fs = require('fs');
let content = fs.readFileSync('src/app/services/page.tsx', 'utf8');

content = content.replace(/title: "Residential Buying & Selling",[\s\S]*?img: ".*?"/g, `$&,\n              href: "/properties?category=Buy"`);
content = content.replace(/title: "Commercial Leasing",[\s\S]*?img: ".*?"/g, `$&,\n              href: "/properties?category=Commercial+Offices"`);
content = content.replace(/title: "Land & Farmland Investments",[\s\S]*?img: ".*?"/g, `$&,\n              href: "/properties?category=Lands+%26+Farmlands"`);
content = content.replace(/title: "Furniture & Interior Design",[\s\S]*?img: ".*?"/g, `$&,\n              href: "/properties?category=Furniture+Rentals"`);

content = content.replace(/<Link href="\/properties"/g, '<Link href={service.href}');

fs.writeFileSync('src/app/services/page.tsx', content, 'utf8');
