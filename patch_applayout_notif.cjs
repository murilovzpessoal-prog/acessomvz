const fs = require('fs');
let content = fs.readFileSync('src/components/layout/AppLayout.tsx', 'utf8');

// 1. Add state definition
const stateInsertion = `  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [activeNotifications, setActiveNotifications] = useState<string[]>([]);

  const ALL_NOTIFICATIONS = [
    "Confira o módulo POV e domine a estrutura de vídeos que mais converte.",
    "Confira o módulo One Prompt e acelere sua pesquisa de produtos.",
    "Assista ao módulo Escala para aprender a dobrar seus resultados hoje.",
    "Novos produtos validados chegando na aba de produtos. Fique de olho!",
    "Utilize o gerador de headline para prender a atenção nos primeiros segundos.",
    "A consistência é a chave do jogo. Você já postou seus vídeos hoje?",
    "Não se apegue ao produto. O segredo está em testar diferentes abordagens.",
    "Lembre-se: teste o ambiente junto com o produto para achar o campeão.",
    "Sua loja passa credibilidade? Uma revisão rápida pode salvar vendas.",
    "Bora pra cima! O primeiro milhão começa com as pequenas execuções diárias."
  ];

  const handleToggleNotifications = () => {
    if (!isNotificationsOpen) {
      const shuffled = [...ALL_NOTIFICATIONS].sort(() => 0.5 - Math.random());
      setActiveNotifications(shuffled.slice(0, 3));
    }
    setIsNotificationsOpen(!isNotificationsOpen);
  };
`;
content = content.replace(
  'const [isSearchOpen, setIsSearchOpen] = useState(false);',
  `const [isSearchOpen, setIsSearchOpen] = useState(false);\n${stateInsertion}`
);

// 2. Replace the Bell button area
const bellArea = `<div className="flex items-center gap-6 shrink-0 relative">
            <button 
              className="relative text-text-muted hover:text-white transition-colors"
              onClick={handleToggleNotifications}
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-pink rounded-full border-[2px] border-background animate-pulse"></span>
            </button>

            {isNotificationsOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsNotificationsOpen(false)}
                />
                <div className="absolute top-12 right-12 w-80 bg-[#0a0a0f]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
                    <span className="text-[13px] font-bold text-white tracking-wide">Notificações</span>
                    <span className="text-[9px] uppercase tracking-widest text-[#00e5ff] font-bold bg-[#00e5ff]/10 border border-[#00e5ff]/20 px-2 py-1 rounded-md">{activeNotifications.length} Novas</span>
                  </div>
                  <div className="flex flex-col">
                    {activeNotifications.map((notif, i) => (
                      <div key={i} className="p-4 border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#00e5ff] shrink-0 mt-1 shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
                        <p className="text-xs text-white/70 leading-relaxed font-medium">
                          {notif}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div 
                    className="p-3 bg-black/40 text-center cursor-pointer hover:bg-white/5 transition-colors"
                    onClick={() => setIsNotificationsOpen(false)}
                  >
                    <span className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white/60 font-bold transition-colors">Marcar como lidas</span>
                  </div>
                </div>
              </>
            )}

            <div 
              className="flex items-center gap-2.5 cursor-pointer group"`;

content = content.replace(
  `<div className="flex items-center gap-6 shrink-0">
            <button className="relative text-text-muted hover:text-white transition-colors">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-pink rounded-full border-[2px] border-background"></span>
            </button>
            <div 
              className="flex items-center gap-2.5 cursor-pointer group"`,
  bellArea
);

fs.writeFileSync('src/components/layout/AppLayout.tsx', content);
