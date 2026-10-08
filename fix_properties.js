const fs = require('fs');
let content = fs.readFileSync('src/app/properties/page.tsx', 'utf8');

// Import useSearchParams and Suspense
if (!content.includes("useSearchParams")) {
    content = content.replace("import React, { useState, useMemo } from 'react';", "import React, { useState, useMemo, Suspense } from 'react';\nimport { useSearchParams } from 'next/navigation';");
}

// Rename PropertiesPage to PropertiesContent
content = content.replace("export default function PropertiesPage() {", "function PropertiesContent() {");

// Add useSearchParams inside PropertiesContent
content = content.replace(/React\.useEffect\(\(\) => \{\s*const params = new URLSearchParams\(window\.location\.search\);\s*const cat = params\.get\('category'\);\s*if \(cat\) \{\s*setCategory\(cat\);\s*setAppliedFilters\(prev => \(\{ \.\.\.prev, category: cat \}\)\);\s*\}\s*\}, \[\]\);/, `
    const searchParams = useSearchParams();
    React.useEffect(() => {
      const cat = searchParams.get('category');
      if (cat) {
        setCategory(cat);
        setAppliedFilters(prev => ({ ...prev, category: cat }));
        setCurrentPage(1); // Fix page reset on redirect
      }
    }, [searchParams]);
`);

// Also fix APPLY FILTER button to reset page
content = content.replace(/setAppliedFilters\(\{ searchTerm, category, city, propertyType, propertyStatus, bhk, listedBy, minPrice, maxPrice, minSize, maxSize \}\);\s*\}\}\s*className="px-4 py-2 sm:px-8 sm:py-3 bg-\[#1ebbbb\]/g, `setAppliedFilters({ searchTerm, category, city, propertyType, propertyStatus, bhk, listedBy, minPrice, maxPrice, minSize, maxSize });\n                    setCurrentPage(1);\n                  }}\n                  className="px-4 py-2 sm:px-8 sm:py-3 bg-[#1ebbbb]`);

// Export the wrapper component
content += `

export default function PropertiesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32 text-center text-slate-500 font-bold">Loading...</div>}>
      <PropertiesContent />
    </Suspense>
  );
}
`;

fs.writeFileSync('src/app/properties/page.tsx', content, 'utf8');
console.log("Fixed PropertiesPage");
