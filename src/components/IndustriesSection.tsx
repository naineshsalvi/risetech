import React from 'react';
import { INDUSTRIES } from '../data/mockData';

export const IndustriesSection: React.FC = () => {
  return (
    <section id="industries" className="py-20 sm:py-28 bg-[#f4f7fb]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2.5 text-[#1d5fd6] font-extrabold text-xs tracking-[0.18em] uppercase mb-3">
            <span className="w-7 h-[3px] bg-[#ffc20e] rounded-full" />
            <span>Industries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#0c2f6e] tracking-tight leading-tight">
            Trusted across sectors
          </h2>
          <p className="mt-3 text-[#5b6b85] text-base sm:text-lg leading-relaxed">
            From heavy automotive stamping lines to sanitary cleanroom pharmaceuticals, our conveyors keep materials moving smoothly.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 mt-12">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="group relative bg-white p-6 rounded-2xl border border-[#dfe6f1] text-center transition-all duration-300 hover:bg-[#0c2f6e] hover:text-white hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(12,47,110,0.15)] flex flex-col items-center justify-between cursor-pointer"
            >
              <div>
                <span className="block text-4xl mb-3 transform transition-transform duration-300 group-hover:scale-125">
                  {ind.icon}
                </span>
                <h3 className="font-extrabold text-sm sm:text-base text-[#0c2f6e] group-hover:text-white leading-tight">
                  {ind.name}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-[#dfe6f1] group-hover:border-white/20 w-full text-[0.72rem] text-[#6e7e98] group-hover:text-slate-300 leading-snug">
                {ind.typicalConveyors}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
