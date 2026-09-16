const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  'https://juugaynebfxjngbpwfgb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1dWdheW5lYmZ4am5nYnB3ZmdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkzMTg3NTIsImV4cCI6MjEwNDg5NDc1Mn0.RFqQFlDFI1qF-sFCyXUdDvns89aqVbCpvslWfq8v4Dc'
);

async function test() {
  const { data, error } = await supabase.auth.signUp({
    email: 'teste.antigravity@gmail.com',
    password: 'senhadehomologacao'
  });
  if (error) {
    console.error("ERRO:", error.message);
  } else {
    console.log("SUCESSO ABSOLUTO! Usuario criou a senha e logou.");
  }
}
test();
