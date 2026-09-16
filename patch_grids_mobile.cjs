const fs = require('fs');

// Patch Produtos.tsx
let prod = fs.readFileSync('src/pages/Produtos.tsx', 'utf8');
prod = prod.replace(
  'className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pt-4"',
  'className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 pt-4"'
);
prod = prod.replace(
  'className="relative w-full aspect-[3/4] rounded-[32px] overflow-hidden',
  'className="relative w-full aspect-[3/4] rounded-2xl md:rounded-[32px] overflow-hidden'
);
prod = prod.replace( // also fix button padding to be smaller on mobile
  'className="w-full py-4 rounded-2xl font-black text-[11px] md:text-xs uppercase',
  'className="w-full py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase'
);
fs.writeFileSync('src/pages/Produtos.tsx', prod);


// Patch Scanner.tsx
let scan = fs.readFileSync('src/pages/Scanner.tsx', 'utf8');
scan = scan.replace(
  'className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"',
  'className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8"'
);
scan = scan.replace(
  'className="group relative w-full aspect-[9/16] rounded-[32px] overflow-hidden',
  'className="group relative w-full aspect-[9/16] rounded-2xl md:rounded-[32px] overflow-hidden'
);
fs.writeFileSync('src/pages/Scanner.tsx', scan);
