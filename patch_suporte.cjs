const fs = require('fs');
let content = fs.readFileSync('src/pages/Suporte.tsx', 'utf8');

// Title size and margin
content = content.replace(
  'className="flex flex-col items-center text-center mb-16"',
  'className="flex flex-col items-center text-center mb-10 md:mb-16"'
);
content = content.replace(
  'className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4"',
  'className="text-3xl md:text-5xl font-black text-white tracking-tight mb-3 md:mb-4 px-4"'
);

// Grid gap
content = content.replace(
  'className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"',
  'className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full px-2"'
);

// Card Paddings and border radius
content = content.replace(
  'className="group relative w-full rounded-[32px] p-[1px] cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(37,211,102,0.2)]"',
  'className="group relative w-full rounded-[24px] md:rounded-[32px] p-[1px] cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(37,211,102,0.2)]"'
);
content = content.replace(
  'className="relative w-full h-full bg-[#050508] rounded-[31px] p-10 md:p-12 flex flex-col items-start z-10 overflow-hidden"',
  'className="relative w-full h-full bg-[#050508] rounded-[23px] md:rounded-[31px] p-6 md:p-12 flex flex-col items-start z-10 overflow-hidden"'
);

// Card 2
content = content.replace(
  'className="group relative w-full rounded-[32px] p-[1px] cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,229,255,0.2)]"',
  'className="group relative w-full rounded-[24px] md:rounded-[32px] p-[1px] cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,229,255,0.2)]"'
);
content = content.replace(
  'className="relative w-full h-full bg-[#050508] rounded-[31px] p-10 md:p-12 flex flex-col items-start z-10 overflow-hidden"',
  'className="relative w-full h-full bg-[#050508] rounded-[23px] md:rounded-[31px] p-6 md:p-12 flex flex-col items-start z-10 overflow-hidden"'
);

// Icon sizes
content = content.replace(
  'className="absolute -right-8 -bottom-8 w-64 h-64 text-[#25D366]/5 group-hover:text-[#25D366]/10 transition-colors duration-500 rotate-12"',
  'className="absolute -right-4 -bottom-4 md:-right-8 md:-bottom-8 w-48 h-48 md:w-64 md:h-64 text-[#25D366]/5 group-hover:text-[#25D366]/10 transition-colors duration-500 rotate-12"'
);
content = content.replace(
  'className="absolute -right-8 -bottom-8 w-64 h-64 text-[#00e5ff]/5 group-hover:text-[#00e5ff]/10 transition-colors duration-500 -rotate-12"',
  'className="absolute -right-4 -bottom-4 md:-right-8 md:-bottom-8 w-48 h-48 md:w-64 md:h-64 text-[#00e5ff]/5 group-hover:text-[#00e5ff]/10 transition-colors duration-500 -rotate-12"'
);

// Card Titles
content = content.replace(
  'className="text-3xl font-black text-white mb-4"',
  'className="text-2xl md:text-3xl font-black text-white mb-2 md:mb-4"'
);
content = content.replace(
  'className="text-3xl font-black text-white mb-4"',
  'className="text-2xl md:text-3xl font-black text-white mb-2 md:mb-4"'
);

fs.writeFileSync('src/pages/Suporte.tsx', content);
