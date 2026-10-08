const fs = require('fs');

let content = fs.readFileSync('src/app/services/page.tsx', 'utf8');

const oldArray =           {[
            { 
              title: "Residential Buying & Selling", 
              desc: "Discover premium homes, luxury villas, and modern apartments across top localities without paying any middleman fees. Our platform connects you directly with verified property owners, ensuring complete transparency, faster negotiations, and significant savings on every transaction. We provide end-to-end assistance from discovery to deal closure.",
              img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
            },
            { 
              title: "Commercial Leasing", 
              desc: "Unlock the perfect workspace for your growing business with our commercial leasing solutions. We offer Grade-A office spaces, retail shops, and co-working environments in prime business districts. Connect directly with landlords to negotiate the best lease terms, completely bypassing hefty commercial brokerage commissions.",
              img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            },
            { 
              title: "Land & Farmland Investments", 
              desc: "Secure your future with high-yield land and farmland investments. We offer thoroughly verified and legally cleared agricultural and non-agricultural land plots. Whether you're looking for long-term capital appreciation, farming ventures, or building a farmhouse retreat, our curated listings offer safe and profitable opportunities direct from owners.",
              img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop"
            },
            { 
              title: "Furniture & Interior Design", 
              desc: "Transform your newly acquired property into a dream home with our premium furniture and interior design services. We partner with top-tier interior studios and manufacturers to offer you bespoke design solutions, modular kitchens, and high-quality furnishings at exclusive partner discounts. Move into a beautifully curated space without the hassle.",
              img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop"
            }
          ];

const newArray =           {[
            { 
              title: "Residential Buying & Selling", 
              desc: "Discover premium homes, luxury villas, and modern apartments across top localities without paying any middleman fees. Our platform connects you directly with verified property owners, ensuring complete transparency, faster negotiations, and significant savings on every transaction. We provide end-to-end assistance from discovery to deal closure.",
              img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
              href: "/properties?category=Buy"
            },
            { 
              title: "Commercial Leasing", 
              desc: "Unlock the perfect workspace for your growing business with our commercial leasing solutions. We offer Grade-A office spaces, retail shops, and co-working environments in prime business districts. Connect directly with landlords to negotiate the best lease terms, completely bypassing hefty commercial brokerage commissions.",
              img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
              href: "/properties?category=Commercial+Offices"
            },
            { 
              title: "Land & Farmland Investments", 
              desc: "Secure your future with high-yield land and farmland investments. We offer thoroughly verified and legally cleared agricultural and non-agricultural land plots. Whether you're looking for long-term capital appreciation, farming ventures, or building a farmhouse retreat, our curated listings offer safe and profitable opportunities direct from owners.",
              img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop",
              href: "/properties?category=Lands+%26+Farmlands"
            },
            { 
              title: "Furniture & Interior Design", 
              desc: "Transform your newly acquired property into a dream home with our premium furniture and interior design services. We partner with top-tier interior studios and manufacturers to offer you bespoke design solutions, modular kitchens, and high-quality furnishings at exclusive partner discounts. Move into a beautifully curated space without the hassle.",
              img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
              href: "/properties?category=Furniture+Rentals"
            }
          ];

content = content.replace(oldArray, newArray);
content = content.replace('Link href="/properties"', 'Link href={service.href}');

fs.writeFileSync('src/app/services/page.tsx', content, 'utf8');
console.log("Updated");
