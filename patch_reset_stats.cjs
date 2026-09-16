const fs = require('fs');
let content = fs.readFileSync('src/pages/Jornada.tsx', 'utf8');

// Change localStorage key to reset for the user
content = content.replace(
  /mvz_jornada_stats/g,
  'mvz_jornada_stats_v2'
);

// Change initial state to 0
content = content.replace(
  "      1: { chartData: [0, 50, 120, 80, 200, 150, 400], total: 4320 },",
  "      1: { chartData: [0, 0, 0, 0, 0, 0, 0], total: 0 },"
);
content = content.replace(
  "      2: { chartData: [150, 300, 280, 500, 450, 700, 1000], total: 8500 },",
  "      2: { chartData: [0, 0, 0, 0, 0, 0, 0], total: 0 },"
);
content = content.replace(
  "      3: { chartData: [500, 800, 750, 900, 1200, 950, 1100], total: 24500 }",
  "      3: { chartData: [0, 0, 0, 0, 0, 0, 0], total: 0 }"
);

// Wait, I should also ensure maxChart is correctly calculated even when all zeros.
// Math.max(...[0,0,0], 1) is 1. This prevents division by 0. So it's fine.

fs.writeFileSync('src/pages/Jornada.tsx', content);
