const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  'https://juugaynebfxjngbpwfgb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1dWdheW5lYmZ4am5nYnB3ZmdiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4OTMxODc1MiwiZXhwIjoyMTA0ODk0NzUyfQ.DRHujiAc3t7G-TVo-p-eBBnR5-HX-LtZQgKtRr4CGsw'
);

async function test() {
  const { data, error } = await supabase.from('compras_aprovadas').select('*').limit(1);
  if (error) {
    console.error("ERRO:", error.message);
  } else {
    console.log("SUCESSO: A tabela compras_aprovadas existe!");
  }
}
test();
