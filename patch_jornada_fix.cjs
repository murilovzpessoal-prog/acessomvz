const fs = require('fs');
let content = fs.readFileSync('src/pages/Jornada.tsx', 'utf8');

// Revert banner container to full width
content = content.replace(
  `        {/* Top Banner Box */}
        <div className="relative z-10 max-w-4xl mx-auto mb-8 w-full px-6 md:px-4 animate-in fade-in slide-in-from-top-4 duration-700">
          {/* Subtle Outer glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#00e5ff]/10 to-[#ff007f]/5 rounded-2xl blur-xl" />
          
          {/* Glass frame */}
          <div className="relative p-[3px] rounded-2xl bg-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/20 max-w-sm md:max-w-none mx-auto">`,
  `        {/* Top Banner Box */}
        <div className="relative z-10 max-w-6xl mx-auto mb-8 w-full px-4 animate-in fade-in slide-in-from-top-4 duration-700">
          {/* Subtle Outer glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#00e5ff]/10 to-[#ff007f]/5 rounded-2xl blur-xl" />
          
          {/* Glass frame */}
          <div className="relative p-[3px] rounded-2xl bg-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/20">`
);

// Fix banner image height on mobile to prevent text cutoff
content = content.replace(
  `              <img 
                src="/banner-jornada.png" 
                alt="Banner Escolha seu Destino" 
                className="w-full h-auto object-cover"
              />`,
  `              <img 
                src="/banner-jornada.png" 
                alt="Banner Escolha seu Destino" 
                className="w-full h-[240px] md:h-auto md:aspect-auto object-cover"
              />`
);

// Fix cards to be full width but max height on mobile
content = content.replace(
  'className="group relative w-full max-w-[280px] md:max-w-none mx-auto aspect-[4/5] rounded-3xl p-[1px] cursor-pointer overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:scale-[1.02] flex-shrink-0 shadow-2xl"',
  'className="group relative w-full h-[400px] md:h-auto md:aspect-[4/5] rounded-3xl p-[1px] cursor-pointer overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:scale-[1.02] flex-shrink-0 shadow-2xl"'
);

fs.writeFileSync('src/pages/Jornada.tsx', content);
