const fs = require('fs');
let content = fs.readFileSync('src/pages/Login.tsx', 'utf8');

// Add supabase import
content = content.replace(
  "import { Mail, Lock, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';",
  "import { Mail, Lock, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';\nimport { supabase } from '../lib/supabase';"
);

// Add state for loading and error
content = content.replace(
  "const [password, setPassword] = useState('');",
  "const [password, setPassword] = useState('');\n  const [loading, setLoading] = useState(false);\n  const [errorMsg, setErrorMsg] = useState('');"
);

// Replace handleLogin function
const oldHandleLogin = `  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };`;

const newHandleLogin = `  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      // 1. Tenta fazer login normalmente
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        if (signInError.message.includes('Invalid login credentials')) {
          // Pode ser senha errada, OU o usuário não existe (primeiro acesso)
          // Vamos tentar criar a conta:
          const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
            email,
            password,
          });

          if (signUpError) {
            if (signUpError.message.includes('already registered')) {
              // Se ele já estava registrado, então no passo 1 era a senha que estava errada!
              setErrorMsg('Senha incorreta.');
            } else if (signUpError.message.includes('Acesso negado') || signUpError.message.includes('Database error') || signUpError.message.includes('trigger')) {
              // Barrado pela nossa trigger de compras
              setErrorMsg('Acesso negado: E-mail não possui compra ativa.');
            } else {
              setErrorMsg(signUpError.message);
            }
          } else {
            // Sucesso no SignUp! Se o Supabase estiver configurado para auto-login sem confirmação de e-mail:
            if (signUpData.session) {
              navigate('/');
            } else {
              setErrorMsg('Acesso criado! Você precisa desabilitar "Confirm email" no painel do Supabase para logar direto.');
            }
          }
        } else {
          setErrorMsg(signInError.message);
        }
      } else {
        // Login normal com sucesso!
        navigate('/');
      }
    } catch (err: any) {
      setErrorMsg('Erro inesperado: ' + err.message);
    } finally {
      setLoading(false);
    }
  };`;

content = content.replace(oldHandleLogin, newHandleLogin);

// Add error message to UI
content = content.replace(
  '<form onSubmit={handleLogin} className="space-y-5">',
  `<form onSubmit={handleLogin} className="space-y-5">
            {errorMsg && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold px-4 py-3 rounded-xl text-center">
                {errorMsg}
              </div>
            )}`
);

// Update button state
content = content.replace(
  'Acessar Plataforma <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />',
  '{loading ? "Autenticando..." : "Acessar Plataforma"} {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}'
);

fs.writeFileSync('src/pages/Login.tsx', content);
