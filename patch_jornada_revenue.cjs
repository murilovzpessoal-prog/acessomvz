const fs = require('fs');
let content = fs.readFileSync('src/pages/Jornada.tsx', 'utf8');

// 1. Add useEffect import if not present
if (!content.includes("useEffect")) {
  content = content.replace("import React, { useState } from 'react';", "import React, { useState, useEffect } from 'react';");
}

// 2. State definition replacement
content = content.replace(
  "const [revenue, setRevenue] = useState('');",
  `const [revenue, setRevenue] = useState('');

  // Stats persisting
  const [stats, setStats] = useState(() => {
    try {
      const saved = localStorage.getItem('mvz_jornada_stats');
      if (saved) return JSON.parse(saved);
    } catch(e) {}
    return {
      1: { chartData: [0, 50, 120, 80, 200, 150, 400], total: 4320 },
      2: { chartData: [150, 300, 280, 500, 450, 700, 1000], total: 8500 },
      3: { chartData: [500, 800, 750, 900, 1200, 950, 1100], total: 24500 }
    };
  });

  const handleRegisterRevenue = () => {
    if (!revenue || !activeGoal) return;
    const valueStr = revenue.replace(/\\./g, '').replace(',', '.');
    const value = parseFloat(valueStr);
    if (isNaN(value) || value <= 0) return;

    setStats(prev => {
      const currentGoalStats = prev[activeGoal];
      const newChartData = [...currentGoalStats.chartData];
      
      // Update today's bar
      newChartData[newChartData.length - 1] += value;
      
      const newTotal = currentGoalStats.total + value;
      
      const nextStats = {
        ...prev,
        [activeGoal]: {
          chartData: newChartData,
          total: newTotal
        }
      };
      
      localStorage.setItem('mvz_jornada_stats', JSON.stringify(nextStats));
      return nextStats;
    });
    
    setRevenue(''); // Clear input
  };

  const formatCurrency = (val) => {
    return val.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };`
);

// 3. chartData extraction update
content = content.replace(
  "const chartData = selectedGoalData?.chartData || [];",
  "const currentStats = activeGoal ? stats[activeGoal] : null;\n  const chartData = currentStats?.chartData || selectedGoalData?.chartData || [];\n  const total30Days = currentStats?.total || 0;"
);

// 4. Update total display
content = content.replace(
  '<h3 className="text-4xl font-black text-white tracking-tight drop-shadow-md">\n                  R$ 4.320<span className="text-xl text-white/40">,00</span>\n                </h3>',
  `<h3 className="text-4xl font-black text-white tracking-tight drop-shadow-md">
                  R$ {formatCurrency(total30Days).split(',')[0]}<span className="text-xl text-white/40">,{formatCurrency(total30Days).split(',')[1]}</span>
                </h3>`
);

// 5. Update + button
content = content.replace(
  '<button \n                  className="text-black w-14 h-14 rounded-2xl flex items-center justify-center hover:scale-105 transition-all shrink-0"\n                  style={{ backgroundColor: selectedGoalData.colorHex, boxShadow: `0 0 20px ${selectedGoalData.colorHex}60` }}\n                >',
  `<button 
                  onClick={handleRegisterRevenue}
                  className="text-black w-14 h-14 rounded-2xl flex items-center justify-center hover:scale-105 transition-all shrink-0 active:scale-95"
                  style={{ backgroundColor: selectedGoalData.colorHex, boxShadow: \`0 0 20px \${selectedGoalData.colorHex}60\` }}
                >`
);

// 6. Update input onChange to allow only numbers and comma
content = content.replace(
  'onChange={(e) => setRevenue(e.target.value)}',
  'onChange={(e) => setRevenue(e.target.value.replace(/[^0-9,]/g, ""))}'
);

fs.writeFileSync('src/pages/Jornada.tsx', content);
