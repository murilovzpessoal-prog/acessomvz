const fs = require('fs');
let content = fs.readFileSync('src/components/layout/AppLayout.tsx', 'utf8');

content = content.replace(
  "import { twMerge } from 'tailwind-merge';",
  "import { twMerge } from 'tailwind-merge';\nimport { SearchPalette } from '../SearchPalette';"
);

content = content.replace(
  "export function AppLayout() {\n  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);",
  "export function AppLayout() {\n  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);\n  const [isSearchOpen, setIsSearchOpen] = useState(false);"
);

content = content.replace(
  "  React.useEffect(() => {",
  "  React.useEffect(() => {\n    const handleGlobalSearch = (e) => {\n      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {\n        e.preventDefault();\n        setIsSearchOpen(true);\n      }\n    };\n    window.addEventListener('keydown', handleGlobalSearch);\n    return () => window.removeEventListener('keydown', handleGlobalSearch);\n  }, []);\n\n  React.useEffect(() => {"
);

content = content.replace(
  '<input \n                type="text" \n                placeholder="Buscar aulas, módulos ou conteúdos..." \n                className="w-full bg-surface border border-border rounded-lg pl-10 pr-14 py-2.5 text-[13px] focus:outline-none focus:border-white/20 transition-all placeholder:text-text-muted text-white"\n              />',
  '<input \n                type="text" \n                readOnly\n                onClick={() => setIsSearchOpen(true)}\n                placeholder="Buscar aulas, módulos ou conteúdos..." \n                className="w-full bg-surface border border-border rounded-lg pl-10 pr-14 py-2.5 text-[13px] focus:outline-none focus:border-white/20 transition-all placeholder:text-text-muted text-white cursor-text"\n              />'
);

content = content.replace(
  "    </div>\n  );",
  "      <SearchPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />\n    </div>\n  );"
);

fs.writeFileSync('src/components/layout/AppLayout.tsx', content);
