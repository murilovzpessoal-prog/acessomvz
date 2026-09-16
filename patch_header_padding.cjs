const fs = require('fs');
let content = fs.readFileSync('src/components/layout/AppLayout.tsx', 'utf8');

content = content.replace(
  'className="py-5 md:py-6 border-b border-border flex items-center justify-between gap-4 md:gap-6 px-4 md:px-6 lg:px-8 sticky top-0 bg-background/95 backdrop-blur-xl z-30"',
  'className="pt-6 pb-5 md:py-6 border-b border-border flex items-center justify-between gap-4 md:gap-6 px-4 md:px-6 lg:px-8 sticky top-0 bg-background/95 backdrop-blur-xl z-30"'
);

fs.writeFileSync('src/components/layout/AppLayout.tsx', content);
