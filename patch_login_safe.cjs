const fs = require('fs');
let content = fs.readFileSync('src/pages/Login.tsx', 'utf8');

// 1. Revert left side to be DESKTOP ONLY
content = content.replace(
  '<div className="absolute inset-0 lg:relative flex lg:w-1/2 h-full overflow-hidden z-0">',
  '<div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">'
);
content = content.replace(
  '<div className="absolute inset-0 bg-gradient-to-b from-[#030303]/10 via-[#030303]/80 to-[#030303] lg:bg-none z-10" />\n        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-transparent via-[#030303]/50 to-[#030303] z-10" />',
  '<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#030303]/50 to-[#030303] z-10" />'
);
content = content.replace(
  'className="absolute inset-0 w-full h-full object-cover object-center opacity-60 lg:opacity-90"',
  'className="absolute inset-0 w-full h-full object-cover object-center opacity-90"'
);

// 2. Add the mobile-specific background RIGHT BEFORE the form
const rightSideStart = '<div className="w-full lg:w-1/2 flex items-center lg:items-center justify-center p-6 sm:p-12 relative z-10 overflow-hidden lg:bg-[#030303]">';
const mobileBackground = `
      {/* MOBILE BACKGROUND: Image (Hidden on Desktop) */}
      <div className="absolute inset-0 flex lg:hidden overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/10 via-[#030303]/80 to-[#030303] z-10" />
        <img 
          src="https://i.imgur.com/wdnnfZd.png" 
          alt="MVZ Workspace Mobile" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        />
      </div>

      {/* RIGHT SIDE: Authentication Form */}`;
content = content.replace(rightSideStart, mobileBackground + '\n      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative z-10 lg:overflow-hidden lg:bg-[#030303]">');

fs.writeFileSync('src/pages/Login.tsx', content);
