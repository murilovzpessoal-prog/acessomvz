const fs = require('fs');
const csvPath = '/Users/murilohenriquemoreiravaz/.gemini/antigravity/brain/6c70a0d9-098c-4ad8-8a8d-eccef03484e7/.user_uploaded/media_1789321717352.csv';

const content = fs.readFileSync(csvPath, 'utf8');

// The CSV is comma-separated. The 10th column is Email do Cliente
const lines = content.split('\n');
const emails = new Set();

// Skip header
for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    // Simple CSV split (not handling commas inside quotes, but emails don't have commas)
    const cols = line.split(',');
    
    // Status is at column 5 (0-indexed) = Status da Venda. 'paid' or similar.
    // Actually let's just get the email. Email is at column 9 (0-indexed).
    // Let's verify by finding the exact column index from the header.
    const headerCols = lines[0].split(',');
    const emailIndex = headerCols.findIndex(col => col.trim() === 'Email do Cliente');
    
    if (emailIndex !== -1 && cols.length > emailIndex) {
        let email = cols[emailIndex].trim();
        // Remove quotes if present
        if (email.startsWith('"') && email.endsWith('"')) {
            email = email.slice(1, -1);
        }
        
        if (email && email.includes('@')) {
            emails.add(email.toLowerCase());
        }
    }
}

const uniqueEmails = Array.from(emails);
console.log(`Extraídos ${uniqueEmails.length} e-mails únicos do CSV.`);

if (uniqueEmails.length > 0) {
    let sqlQuery = 'INSERT INTO public.compras_aprovadas (email, status) VALUES\n';
    
    const values = uniqueEmails.map(email => `('${email.replace(/'/g, "''")}', 'active')`);
    sqlQuery += values.join(',\n') + '\nON CONFLICT (email) DO NOTHING;';
    
    fs.writeFileSync('import_alunos.sql', sqlQuery);
    console.log('Arquivo import_alunos.sql gerado com sucesso! Tamanho:', sqlQuery.length, 'bytes');
}

