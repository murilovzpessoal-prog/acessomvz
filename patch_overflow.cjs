const fs = require('fs');

// Patch AppLayout.tsx
let content = fs.readFileSync('src/components/layout/AppLayout.tsx', 'utf8');
content = content.replace(
  'className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto relative"',
  'className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto overflow-x-hidden relative"'
);
fs.writeFileSync('src/components/layout/AppLayout.tsx', content);

// Patch index.css
let css = fs.readFileSync('src/index.css', 'utf8');
css = css.replace(
  `  body {
    @apply bg-background text-text antialiased;
    font-family: 'Inter', system-ui, sans-serif;
  }`,
  `  html, body {
    overflow-x: hidden;
  }
  body {
    @apply bg-background text-text antialiased;
    font-family: 'Inter', system-ui, sans-serif;
  }`
);
fs.writeFileSync('src/index.css', css);
