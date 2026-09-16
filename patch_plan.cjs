const fs = require('fs');
let content = fs.readFileSync('src/pages/Jornada.tsx', 'utf8');

// Replace Goal 1 Plan
content = content.replace(
  "      plan: [\n        'Assistir aos Módulos 1 e 2 (Fundamentos da plataforma).',\n        'Configurar sua primeira loja do zero sem CNPJ inicial.',\n        'Encontrar 3 produtos validados na biblioteca gringa.',\n        'Publicar 1 vídeo por dia durante 30 dias consecutivos.',\n      ],",
  `      plan: [
        { title: 'Domine o formato que mais converte', desc: 'Assista ao módulo Estilo POV e escolha uma estrutura de vídeo para replicar.' },
        { title: 'Escolha 3 produtos para atacar', desc: 'Selecione 3 produtos validados, com potencial de venda, e concentre sua produção neles. Nada de testar 15 produtos ao mesmo tempo.' },
        { title: 'Entre em modo de execução', desc: 'Publique 3 vídeos por dia, utilizando os formatos ensinados, e registre diariamente seu resultado no painel.' },
        { title: 'Identifique o vencedor e escale', desc: 'Ao encontrar produto ou vídeo gerando vendas, assista ao módulo Escala e multiplique o que funcionou até alcançar R$1.000 no mês.' },
      ],`
);

// Replace Goal 2 Plan
content = content.replace(
  "      plan: [\n        'Dominar a estrutura de Hooks Magnéticos (Módulo 4).',\n        'Estruturar loja profissional e formalizar.',\n        'Contratar editores ou usar IA avançada para volume.',\n        'Postar 3 vídeos curtos por dia focados em retenção.',\n      ],",
  `      plan: [
        { title: 'Domine a estrutura de Hooks', desc: 'Assista ao Módulo 4 e aplique a estrutura de retenção para prender a atenção logo nos primeiros segundos.' },
        { title: 'Estruture sua loja profissional', desc: 'Formalize sua operação e crie uma página de vendas com alta taxa de conversão.' },
        { title: 'Delegue e aumente o volume', desc: 'Contrate editores ou utilize ferramentas de IA avançada para não depender apenas do seu tempo.' },
        { title: 'Otimize a retenção diária', desc: 'Poste 3 vídeos curtos por dia e analise as métricas para entender exatamente o que funciona.' },
      ],`
);

// Replace Goal 3 Plan
content = content.replace(
  "      plan: [\n        'Criar esteira de produção de conteúdo (Módulo Elite).',\n        'Tráfego pago básico para impulsionar vídeos orgânicos.',\n        'Diversificar produtos e criar marca própria (Whitelabel).',\n        'Faturar no mínimo 30k/mês consistentes.',\n      ],",
  `      plan: [
        { title: 'Crie uma esteira de produção', desc: 'Implemente os processos do Módulo Elite para automatizar a criação de conteúdo em massa.' },
        { title: 'Tráfego pago como combustível', desc: 'Utilize tráfego pago básico para impulsionar os vídeos orgânicos que já validaram a oferta.' },
        { title: 'Crie sua marca própria', desc: 'Faça a transição para Whitelabel, fidelize clientes e escale a sua margem de lucro.' },
        { title: 'Constância no faturamento', desc: 'Delegue o operacional e foque na estratégia para manter um piso de R$30k/mês.' },
      ],`
);

// Replace mapping
content = content.replace(
  '<p className="text-[14px] text-white/80 leading-relaxed font-medium pt-1">{step}</p>',
  `<div className="flex flex-col pt-0.5">
                    <span className="text-[14px] text-white font-bold mb-1">{step.title}</span>
                    <span className="text-[13px] text-white/60 leading-relaxed pr-4">{step.desc}</span>
                  </div>`
);

fs.writeFileSync('src/pages/Jornada.tsx', content);
