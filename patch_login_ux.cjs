const fs = require('fs');
let content = fs.readFileSync('src/pages/Login.tsx', 'utf8');

// 1. Add Info icon import
content = content.replace(
  "import { Mail, Lock, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';",
  "import { Mail, Lock, ArrowRight, ShieldCheck, CheckCircle2, Info } from 'lucide-react';"
);

// 2. Modify Senha label
content = content.replace(
  '<label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Senha</label>',
  '<label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Senha <span className="normal-case tracking-normal font-medium text-white/30 ml-1">ou crie uma agora</span></label>'
);

// 3. Add Info banner above button
const buttonHtml = `<button
              type="submit"`;
const infoBanner = `
            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 mb-2 flex gap-3 items-start">
              <Info className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
              <p className="text-[11px] text-white/50 leading-relaxed font-light">
                <strong className="text-white/80 font-medium">Primeiro acesso?</strong> Digite o e-mail exato usado na sua compra e invente uma senha. O sistema vai validar e criar sua conta na mesma hora.
              </p>
            </div>

            <button
              type="submit"`;
content = content.replace(buttonHtml, infoBanner);

// 4. Update the "Assine agora" link
content = content.replace(
  '<a href="#" className="text-white hover:underline font-medium">Assine agora</a>',
  '<a href="https://comunidadeamvz.com.br" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-medium">Assine agora</a>'
);

fs.writeFileSync('src/pages/Login.tsx', content);
