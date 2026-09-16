const fs = require('fs');

const transcriptPath = '/Users/murilohenriquemoreiravaz/.gemini/antigravity/brain/6c70a0d9-098c-4ad8-8a8d-eccef03484e7/.system_generated/logs/transcript_full.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').trim().split('\n');

for (let i = lines.length - 1; i >= 0; i--) {
    const log = JSON.parse(lines[i]);
    if (log.type === 'USER_INPUT') {
        console.log("Comprimento da mensagem:", log.content.length);
        console.log("Inicio da mensagem:", log.content.substring(0, 100));
        break;
    }
}
