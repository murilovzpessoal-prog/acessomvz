const fs = require('fs');
let content = fs.readFileSync('src/components/layout/AppLayout.tsx', 'utf8');

content = content.replace(
  "navigate('/login');\\n              }}",
  "supabase.auth.signOut();\\n                navigate('/login');\\n              }}"
);

fs.writeFileSync('src/components/layout/AppLayout.tsx', content);
