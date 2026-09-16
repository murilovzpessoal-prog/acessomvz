const fs = require('fs');
let content = fs.readFileSync('src/components/layout/AppLayout.tsx', 'utf8');

content = content.replace(
  '<div className="relative hidden sm:block w-full">',
  '<div className="relative flex-1 w-full">'
);
content = content.replace(
  'placeholder="Buscar aulas, módulos ou conteúdos..."',
  'placeholder="Buscar..."'
);
content = content.replace(
  '<div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-[#18181b] border border-border rounded px-1.5 py-0.5">',
  '<div className="absolute right-2.5 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1 bg-[#18181b] border border-border rounded px-1.5 py-0.5">'
);

fs.writeFileSync('src/components/layout/AppLayout.tsx', content);
