const fs = require('fs');
let content = fs.readFileSync('src/pages/Suporte.tsx', 'utf8');

// Replace WhatsApp button with a link
content = content.replace(
  '<button className="mt-auto flex items-center gap-3 text-[#25D366] font-bold text-sm tracking-widest uppercase group-hover:gap-5 transition-all relative z-10">',
  '<a href="https://w.app/gabimvz" target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center gap-3 text-[#25D366] font-bold text-sm tracking-widest uppercase group-hover:gap-5 transition-all relative z-10">'
);
content = content.replace(
  'Iniciar Conversa <ArrowRight className="w-5 h-5" />\n              </button>',
  'Iniciar Conversa <ArrowRight className="w-5 h-5" />\n              </a>'
);

// Replace Email button with a link
content = content.replace(
  '<button className="mt-auto flex items-center gap-3 text-[#00e5ff] font-bold text-sm tracking-widest uppercase group-hover:gap-5 transition-all relative z-10">',
  '<a href="mailto:mvzsuporte1@gmail.com" className="mt-auto flex items-center gap-3 text-[#00e5ff] font-bold text-sm tracking-widest uppercase group-hover:gap-5 transition-all relative z-10">'
);
content = content.replace(
  'Enviar E-mail <ArrowRight className="w-5 h-5" />\n              </button>',
  'Enviar E-mail <ArrowRight className="w-5 h-5" />\n              </a>'
);

fs.writeFileSync('src/pages/Suporte.tsx', content);
