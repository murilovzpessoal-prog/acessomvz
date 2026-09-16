const fs = require('fs');
let content = fs.readFileSync('src/components/layout/AppLayout.tsx', 'utf8');

// Add supabase import
if (!content.includes("import { supabase } from '../../lib/supabase';")) {
  content = content.replace(
    "import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';",
    "import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';\nimport { supabase } from '../../lib/supabase';\nimport { useEffect } from 'react';"
  );
}

// Add Auth check inside AppLayout component
const authLogic = `
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/login');
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate('/login');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);
`;

// Replace `const navigate = useNavigate();` if it exists, else inject it at the top of the component
if (content.includes('const navigate = useNavigate();')) {
  content = content.replace('const navigate = useNavigate();', authLogic);
} else {
  content = content.replace(
    'export function AppLayout() {',
    'export function AppLayout() {\n' + authLogic
  );
}

fs.writeFileSync('src/components/layout/AppLayout.tsx', content);

// Also we need to protect Aula.tsx
let aulaContent = fs.readFileSync('src/pages/Aula.tsx', 'utf8');
if (!aulaContent.includes("import { supabase } from '../lib/supabase';")) {
  aulaContent = aulaContent.replace(
    "import { useParams, useNavigate } from 'react-router-dom';",
    "import { useParams, useNavigate } from 'react-router-dom';\nimport { supabase } from '../lib/supabase';\nimport { useEffect } from 'react';"
  );
  
  const authLogicAula = `
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/login');
      }
    });
  }, [navigate]);
`;

  if (aulaContent.includes('const navigate = useNavigate();')) {
    aulaContent = aulaContent.replace('const navigate = useNavigate();', 'const navigate = useNavigate();' + authLogicAula);
  } else {
    aulaContent = aulaContent.replace(
      'export function Aula() {',
      'export function Aula() {\n  const navigate = useNavigate();\n' + authLogicAula
    );
  }
  fs.writeFileSync('src/pages/Aula.tsx', aulaContent);
}

