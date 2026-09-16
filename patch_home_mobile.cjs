const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Container
content = content.replace(
  'className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 max-w-3xl"',
  'className="absolute inset-0 z-20 flex flex-col justify-center px-4 md:px-16 w-[80%] sm:w-[70%] md:w-full max-w-3xl"'
);

// Badge
content = content.replace(
  'className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 w-max shadow-lg"',
  'className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 md:mb-6 w-max shadow-lg"'
);
content = content.replace(
  '<Sparkles className="w-4 h-4 text-[#00e5ff]" />',
  '<Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#00e5ff]" />'
);
content = content.replace(
  'className="text-[10px] font-black text-white tracking-[0.2em] uppercase"',
  'className="text-[9px] md:text-[10px] font-black text-white tracking-[0.2em] uppercase"'
);

// Title
content = content.replace(
  'className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tighter mb-4 drop-shadow-2xl"',
  'className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tighter mb-3 md:mb-4 drop-shadow-2xl"'
);

// Paragraph
content = content.replace(
  'className="text-white/60 text-sm md:text-base font-medium max-w-md leading-relaxed mb-8"',
  'className="text-white/60 text-xs md:text-base font-medium max-w-[240px] md:max-w-md leading-relaxed mb-6 md:mb-8"'
);

// Button
content = content.replace(
  'className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black text-sm w-max hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]"',
  'className="flex items-center gap-2 md:gap-3 bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs md:text-sm w-max hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]"'
);

fs.writeFileSync('src/pages/Home.tsx', content);
