const fs = require('fs');

const showcaseFile = 'src/components/PropertyShowcase.tsx';
let content = fs.readFileSync(showcaseFile, 'utf8');

const startString = "const PROPERTIES = [";
const endString = "];\n\nconst PropertyShowcase = () => {";

const startIndex = content.indexOf(startString);
const endIndex = content.indexOf(endString);

if (startIndex !== -1 && endIndex !== -1) {
  const propertiesData = content.substring(startIndex, endIndex + 2); // gets the whole const PROPERTIES = [...];
  
  // Create the new file
  const exportData = `export ${propertiesData}\n`;
  fs.writeFileSync('src/data/mockProperties.ts', exportData);
  
  // Replace in original file
  const newContent = content.substring(0, startIndex) + "import { PROPERTIES } from '@/data/mockProperties';\n\nconst PropertyShowcase = () => {" + content.substring(endIndex + endString.length);
  fs.writeFileSync(showcaseFile, newContent);
  
  console.log("Successfully extracted PROPERTIES to src/data/mockProperties.ts");
} else {
  console.log("Could not find PROPERTIES array.");
}
