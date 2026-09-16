const fs = require('fs');
let content = fs.readFileSync('src/components/layout/AppLayout.tsx', 'utf8');

// Menu Icon
content = content.replace(
  '<Menu className="w-5 h-5" />',
  '<Menu className="w-7 h-7" />'
);

// Bell Icon
content = content.replace(
  '<Bell className="w-5 h-5" />',
  '<Bell className="w-6 h-6" />'
);

// Avatar
content = content.replace(
  '<div className="w-8 h-8 rounded-full bg-surface border border-border overflow-hidden ml-1 group-hover:border-[#00e5ff]/50 transition-colors">',
  '<div className="w-10 h-10 rounded-full bg-surface border border-border overflow-hidden ml-1 group-hover:border-[#00e5ff]/50 transition-colors shadow-sm">'
);

fs.writeFileSync('src/components/layout/AppLayout.tsx', content);
