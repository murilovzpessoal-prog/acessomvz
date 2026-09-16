const fs = require('fs');

let scan = fs.readFileSync('src/pages/Scanner.tsx', 'utf8');

// Title size
scan = scan.replace(
  'className="font-black text-2xl text-white group-hover:text-[#00e5ff] transition-colors duration-500 mb-4 drop-shadow-2xl flex items-center gap-2"',
  'className="font-black text-lg md:text-2xl text-white group-hover:text-[#00e5ff] transition-colors duration-500 mb-2 md:mb-4 drop-shadow-2xl flex items-center gap-2"'
);

// Stats spacing
scan = scan.replace(
  'className="flex items-center gap-4 mb-6"',
  'className="flex items-center gap-2 md:gap-4 mb-4 md:mb-6"'
);

// Stat number size
scan = scan.replace(
  'className="text-lg font-black text-white">{profile.followers}',
  'className="text-sm md:text-lg font-black text-white">{profile.followers}'
);
scan = scan.replace(
  'className="text-lg font-black text-white">{profile.views}',
  'className="text-sm md:text-lg font-black text-white">{profile.views}'
);

// Button sizing
scan = scan.replace(
  'className="w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest',
  'className="w-full py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest'
);

fs.writeFileSync('src/pages/Scanner.tsx', scan);
