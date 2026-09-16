const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Add import
if (!content.includes("import { Login }")) {
  content = content.replace(
    "import { Aula } from './pages/Aula';",
    "import { Aula } from './pages/Aula';\nimport { Login } from './pages/Login';"
  );
}

// 2. Add Route
if (!content.includes('<Route path="/login" element={<Login />} />')) {
  content = content.replace(
    '<Route path="/aula/:id" element={<Aula />} />',
    '<Route path="/login" element={<Login />} />\n        <Route path="/aula/:id" element={<Aula />} />'
  );
}

fs.writeFileSync('src/App.tsx', content);
