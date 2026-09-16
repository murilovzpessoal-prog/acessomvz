const { createClient } = require('@supabase/supabase-js');

// Config do frontend
const supabase = createClient(
  'https://juugaynebfxjngbpwfgb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1dWdheW5lYmZ4am5nYnB3ZmdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkzMTg3NTIsImV4cCI6MjEwNDg5NDc1Mn0.RFqQFlDFI1qF-sFCyXUdDvns89aqVbCpvslWfq8v4Dc'
);

// Config de Admin (Webhook)
const supabaseAdmin = createClient(
  'https://juugaynebfxjngbpwfgb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4OTMxODc1MiwiZXhwIjoyMTA0ODk0NzUyfQ.DRHujiAc3t7G-TVo-p-eBBnR5-HX-LtZQgKtRr4CGsw'
);

async function runTests() {
  console.log("1. Testando bloqueio de intrusos...");
  const { error: signUpError } = await supabase.auth.signUp({
    email: 'hacker@teste.com',
    password: 'senha123456'
  });
  
  if (signUpError) {
    console.log("✅ Intruso bloqueado com sucesso! Erro retornado:", signUpError.message);
  } else {
    console.log("❌ ERRO GRAVE: Intruso conseguiu criar conta!");
  }

  console.log("\n2. Simulando webhook de Venda Aprovada para cliente@teste.com...");
  await supabaseAdmin.from('compras_aprovadas').upsert({ email: 'cliente@teste.com', status: 'active' });

  console.log("\n3. Cliente tentando criar senha no primeiro acesso...");
  const { data: signUpData, error: validSignUpError } = await supabase.auth.signUp({
    email: 'cliente@teste.com',
    password: 'senha123456'
  });

  if (validSignUpError) {
    console.log("❌ ERRO: Cliente verdadeiro foi bloqueado! Erro:", validSignUpError.message);
  } else {
    console.log("✅ Cliente verdadeiro conseguiu criar conta com sucesso!");
    
    console.log("\n4. Limpando dados de teste...");
    if (signUpData.user) {
      await supabaseAdmin.auth.admin.deleteUser(signUpData.user.id);
    }
    await supabaseAdmin.from('compras_aprovadas').delete().eq('email', 'cliente@teste.com');
  }
}

runTests();
