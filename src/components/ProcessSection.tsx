import React from 'react';
import { PROCESS_STEPS } from '../data/mockData';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 sm:py-28 bg-[#f4f7fb]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2.5 text-[#1d5fd6] font-extrabold text-xs tracking-[0.18em] uppercase mb-3">
            <span className="w-7 h-[3px] bg-[#ffc20e] rounded-full" />
            <span>How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#0c2f6e] tracking-tight leading-tight">
            From survey to smooth running
          </h2>
          <p className="mt-3 text-[#5b6b85] text-base sm:text-lg leading-relaxed">
            Our systematic engineering workflow guarantees that every conveyor line integrates seamlessly with your production equipment and floor space.
          </p>
        </div>

        {/* 4 Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl border border-[#dfe6f1] border-t-4 border-t-[#0c2f6e] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(12,47,110,0.1)] flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ffc20e] text-[#071f4d] flex items-center justify-center font-black text-xl mb-5 shadow-sm">
                  {step.number}
                </div>
                <h3 className="text-lg font-black text-[#0c2f6e] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#5b6b85] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-dashed border-[#dfe6f1] text-xs text-[#8a97ad] leading-normal">
                {step.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
