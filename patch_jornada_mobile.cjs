const fs = require('fs');
let content = fs.readFileSync('src/pages/Jornada.tsx', 'utf8');

// Fix the banner block
content = content.replace(
  `        <div className="relative z-10 max-w-6xl mx-auto mb-8 w-full px-4">
          {/* Subtle Outer glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#00e5ff]/10 to-[#ff007f]/5 rounded-2xl blur-xl" />
        {/* Top Banner Box */}
        <div className="w-full max-w-4xl mx-auto px-6 mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="relative p-[3px] rounded-2xl bg-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/20 max-w-sm md:max-w-none mx-auto">`,
  `        {/* Top Banner Box */}
        <div className="relative z-10 max-w-4xl mx-auto mb-8 w-full px-6 md:px-4 animate-in fade-in slide-in-from-top-4 duration-700">
          {/* Subtle Outer glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#00e5ff]/10 to-[#ff007f]/5 rounded-2xl blur-xl" />
          
          {/* Glass frame */}
          <div className="relative p-[3px] rounded-2xl bg-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/20 max-w-sm md:max-w-none mx-auto">`
);

// Fix the grid cards (the main issue)
content = content.replace(
  'className="group relative w-full aspect-[4/5] rounded-3xl p-[1px] cursor-pointer overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:scale-[1.02] flex-shrink-0 shadow-2xl"',
  'className="group relative w-full max-w-[280px] md:max-w-none mx-auto aspect-[4/5] rounded-3xl p-[1px] cursor-pointer overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:scale-[1.02] flex-shrink-0 shadow-2xl"'
);

fs.writeFileSync('src/pages/Jornada.tsx', content);
