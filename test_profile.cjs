const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  'https://juugaynebfxjngbpwfgb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1dWdheW5lYmZ4am5nYnB3ZmdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkzMTg3NTIsImV4cCI6MjEwNDg5NDc1Mn0.RFqQFlDFI1qF-sFCyXUdDvns89aqVbCpvslWfq8v4Dc'
);

async function check() {
  const { data: signIn, error: errSign } = await supabase.auth.signInWithPassword({
    email: 'tst@gmail.com',
    password: 'tst123'
  });
  if (errSign) {
    console.error("Sign in error:", errSign);
    return;
  }
  console.log("Logged in user:", signIn.user.id, signIn.user.user_metadata);

  // Try updating user_metadata
  const { data: updateData, error: updateErr } = await supabase.auth.updateUser({
    data: {
      full_name: 'Murilo Vaz Teste',
      avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb'
    }
  });

  if (updateErr) {
    console.error("Update error:", updateErr);
  } else {
    console.log("Updated user_metadata successfully:", updateData.user.user_metadata);
  }

  // Check if storage bucket exists or test upload
  const { data: buckets, error: bErr } = await supabase.storage.listBuckets();
  console.log("Buckets:", buckets, "Bucket error:", bErr);
}

check();
