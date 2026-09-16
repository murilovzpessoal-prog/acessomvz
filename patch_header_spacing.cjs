const fs = require('fs');
let content = fs.readFileSync('src/components/layout/AppLayout.tsx', 'utf8');

// 1. Add gap to the header
content = content.replace(
  'className="h-[90px] md:h-[100px] border-b border-border flex items-center justify-between px-6 lg:px-8 sticky top-0 bg-background/95 backdrop-blur-xl z-30"',
  'className="h-[90px] md:h-[100px] border-b border-border flex items-center justify-between gap-4 md:gap-6 px-4 md:px-6 lg:px-8 sticky top-0 bg-background/95 backdrop-blur-xl z-30"'
);

// 2. Adjust Left Container gap and Menu button padding
content = content.replace(
  'className="flex items-center gap-4 w-full max-w-xl"',
  'className="flex items-center gap-3 md:gap-4 w-full max-w-xl"'
);
content = content.replace(
  'className="lg:hidden p-2 text-text-muted hover:text-white transition-colors shrink-0"',
  'className="lg:hidden p-1 md:p-2 text-text-muted hover:text-white transition-colors shrink-0"'
);

// 3. Adjust Right Container gap
content = content.replace(
  'className="flex items-center gap-6 shrink-0 relative"',
  'className="flex items-center gap-4 md:gap-6 shrink-0 relative"'
);

fs.writeFileSync('src/components/layout/AppLayout.tsx', content);
