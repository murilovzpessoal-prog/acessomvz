const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
  'https://juugaynebfxjngbpwfgb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1dWdheW5lYmZ4am5nYnB3ZmdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkzMTg3NTIsImV4cCI6MjEwNDg5NDc1Mn0.RFqQFlDFI1qF-sFCyXUdDvns89aqVbCpvslWfq8v4Dc'
);

async function testAvatar() {
  await supabase.auth.signInWithPassword({
    email: 'tst@gmail.com',
    password: 'tst123'
  });

  // 150KB base64 string
  const fakeBase64 = 'data:image/jpeg;base64,' + 'A'.repeat(150000);
  const { data, error } = await supabase.auth.updateUser({
    data: {
      avatar_url: fakeBase64
    }
  });

  console.log("Error updating with 150KB base64?", error ? error.message : "Success!");
  if (!error) {
    const { data: { user } } = await supabase.auth.getUser();
    console.log("Retrieved user avatar length:", user.user_metadata.avatar_url.length);
  }
}
testAvatar();
