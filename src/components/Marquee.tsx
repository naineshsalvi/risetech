import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'Belt Conveyor',
    'Loading / Unloading',
    'Modular Belt',
    'Roller Conveyor',
    'Modular Conveyor',
    'Curve Conveyor',
    'Flat Belt Conveyor',
    'Custom Automation',
    'Bhiwandi Manufacturing',
  ];

  return (
    <div className="bg-[#0c2f6e] text-white overflow-hidden py-4 border-t-4 border-[#ffc20e] shadow-inner select-none" aria-hidden="true">
      <div className="marquee-track font-black text-sm sm:text-base tracking-widest uppercase">
        {/* Double array for seamless infinite marquee loop */}
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <span key={idx} className="inline-flex items-center gap-5 whitespace-nowrap text-slate-200">
            <span>{text}</span>
            <span className="w-2.5 h-2.5 bg-[#ffc20e] rotate-45 transform flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
};
