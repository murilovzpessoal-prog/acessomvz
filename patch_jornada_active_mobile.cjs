const fs = require('fs');
let content = fs.readFileSync('src/pages/Jornada.tsx', 'utf8');

// Header Block
content = content.replace(
  'className="w-16 h-16 rounded-2xl flex items-center justify-center border shadow-xl"',
  'className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border shadow-xl"'
);
content = content.replace(
  '<selectedGoalData.icon className="w-8 h-8"',
  '<selectedGoalData.icon className="w-6 h-6 md:w-8 md:h-8"'
);
content = content.replace(
  'className="text-3xl md:text-5xl font-black text-white tracking-tight flex items-baseline gap-3 mt-1"',
  'className="text-2xl md:text-5xl font-black text-white tracking-tight flex items-baseline gap-3 mt-1"'
);
content = content.replace(
  'className="text-xl md:text-2xl text-white/40 font-medium uppercase tracking-widest"',
  'className="text-lg md:text-2xl text-white/40 font-medium uppercase tracking-widest"'
);

// Columns Gap
content = content.replace(
  'className="xl:col-span-1 flex flex-col gap-6"',
  'className="xl:col-span-1 flex flex-col gap-4 md:gap-6"'
);
content = content.replace(
  'className="grid grid-cols-1 md:grid-cols-2 gap-6"',
  'className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"'
);
content = content.replace(
  'className="xl:col-span-2 flex flex-col gap-6"',
  'className="xl:col-span-2 flex flex-col gap-4 md:gap-6"'
);

// Tip Card
content = content.replace(
  'className="bg-[#050505] border rounded-3xl p-6 relative overflow-hidden"',
  'className="bg-[#050505] border rounded-[20px] md:rounded-3xl p-5 md:p-6 relative overflow-hidden"'
);

// Action Plan Card
content = content.replace(
  'className="bg-[#050505] border border-white/5 rounded-3xl p-7 flex-1"',
  'className="bg-[#050505] border border-white/5 rounded-[20px] md:rounded-3xl p-5 md:p-7 flex-1"'
);
content = content.replace(
  'className="space-y-6"',
  'className="space-y-5 md:space-y-6"'
);
content = content.replace( // Fix vertical line gap
  'className="absolute left-[13px] top-8 bottom-[-24px] w-[2px] bg-white/5"',
  'className="absolute left-[13px] top-8 bottom-[-20px] md:bottom-[-24px] w-[2px] bg-white/5"'
);

// Dashboard Cards
content = content.replace(
  'className="bg-[#050505] border border-white/5 rounded-3xl p-7 flex flex-col justify-center relative overflow-hidden"',
  'className="bg-[#050505] border border-white/5 rounded-[20px] md:rounded-3xl p-5 md:p-7 flex flex-col justify-center relative overflow-hidden"'
);
content = content.replace(
  'className="bg-[#050505] border border-white/5 rounded-3xl p-7 relative overflow-hidden group"',
  'className="bg-[#050505] border border-white/5 rounded-[20px] md:rounded-3xl p-5 md:p-7 relative overflow-hidden group"'
);
content = content.replace(
  'className="bg-[#050505] border border-white/5 rounded-3xl p-7"',
  'className="bg-[#050505] border border-white/5 rounded-[20px] md:rounded-3xl p-5 md:p-7"'
);

fs.writeFileSync('src/pages/Jornada.tsx', content);
