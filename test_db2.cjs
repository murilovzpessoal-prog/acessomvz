const { createClient } = require('@supabase/supabase-js');
const supabaseAdmin = createClient(
  'https://juugaynebfxjngbpwfgb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4OTMxODc1MiwiZXhwIjoyMTA0ODk0NzUyfQ.DRHujiAc3t7G-TVo-p-eBBnR5-HX-LtZQgKtRr4CGsw'
);

async function test() {
  const { data, error } = await supabaseAdmin.from('compras_aprovadas').select('*');
  console.log("Error:", error);
  console.log("Linhas em compras_aprovadas:", data);
}
test();
