const fs = require('fs');

let content = fs.readFileSync('src/components/CustomSelect.tsx', 'utf8');

const oldEffect =   useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);;

const newEffect =   useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [isOpen]);;

content = content.replace(oldEffect, newEffect);
fs.writeFileSync('src/components/CustomSelect.tsx', content, 'utf8');
console.log("Updated CustomSelect");
