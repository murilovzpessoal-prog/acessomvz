const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  'https://juugaynebfxjngbpwfgb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1dWdheW5lYmZ4am5nYnB3ZmdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkzMTg3NTIsImV4cCI6MjEwNDg5NDc1Mn0.RFqQFlDFI1qF-sFCyXUdDvns89aqVbCpvslWfq8v4Dc'
);

async function test() {
  const { data, error } = await supabase.auth.signUp({
    email: 'tst@gmail.com',
    password: 'tst12'
  });
  if (error) {
    console.error("ERRO COM 5 CHARS:", error.message);
    const { data: d2, error: e2 } = await supabase.auth.signUp({
      email: 'tst@gmail.com',
      password: 'tst123'
    });
    if (e2) {
      console.error("ERRO AO CRIAR ADMIN:", e2.message);
    } else {
      console.log("CRIADO COM SUCESSO: tst123");
    }
  } else {
    console.log("CRIADO COM SUCESSO: tst12");
  }
}
test();
