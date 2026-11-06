import React, { useState, useEffect, useRef } from 'react';
import { WHY_US, COUNTERS } from '../data/mockData';

export const WhyUsCounters: React.FC = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);

          const duration = 1600;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Cubic ease out
            const eased = 1 - Math.pow(1 - progress, 3);

            const updated = [
              2021, // Static established
              Math.round(7 * eased),
              Math.round(6 * eased),
              Math.round(100 * eased),
            ];
            setCounts(updated);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="why" className="py-20 sm:py-28 bg-white border-t border-[#dfe6f1]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2.5 text-[#1d5fd6] font-extrabold text-xs tracking-[0.18em] uppercase mb-3">
            <span className="w-7 h-[3px] bg-[#ffc20e] rounded-full" />
            <span>Why RISETECH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#0c2f6e] tracking-tight leading-tight">
            Built to last
          </h2>
          <p className="mt-3 text-[#5b6b85] text-base sm:text-lg leading-relaxed">
            Designed to perform. Built to last. That core engineering commitment guides every single conveyor line we deliver across India.
          </p>
        </div>

        {/* 3 Navy Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {WHY_US.map((item, idx) => (
            <div
              key={idx}
              className="relative p-8 sm:p-9 rounded-2xl bg-gradient-to-br from-[#0c2f6e] to-[#071f4d] text-white overflow-hidden shadow-md flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Corner circle glow */}
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#ffc20e]/15 pointer-events-none transition-transform duration-500 group-hover:scale-125" />

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-md bg-white/10 text-[#ffd84d] text-[0.7rem] font-black tracking-wider uppercase mb-4">
                  {item.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#ffc20e] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#c8d6f0] text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Counter Band */}
        <div
          ref={containerRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16 pt-12 border-t border-[#dfe6f1]"
        >
          {/* Est 2021 */}
          <div className="bg-[#f7f9fd] border border-[#dfe6f1] p-6 sm:p-7 rounded-2xl text-center shadow-xs transition-transform hover:-translate-y-1">
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c2f6e] tracking-tight">
              Est. 2021
            </span>
            <span className="block mt-2 font-bold text-xs sm:text-sm text-[#5b6b85]">
              Established
            </span>
            <span className="block mt-1 text-[0.72rem] text-[#8a97ad]">
              Bhiwandi, Maharashtra
            </span>
          </div>

          {/* 7 Conveyor Families */}
          <div className="bg-[#f7f9fd] border border-[#dfe6f1] p-6 sm:p-7 rounded-2xl text-center shadow-xs transition-transform hover:-translate-y-1">
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c2f6e] tracking-tight">
              {hasAnimated ? counts[1] : 7}
            </span>
            <span className="block mt-2 font-bold text-xs sm:text-sm text-[#5b6b85]">
              Conveyor families
            </span>
            <span className="block mt-1 text-[0.72rem] text-[#8a97ad]">
              Standard design lines
            </span>
          </div>

          {/* 6 Success stories */}
          <div className="bg-[#f7f9fd] border border-[#dfe6f1] p-6 sm:p-7 rounded-2xl text-center shadow-xs transition-transform hover:-translate-y-1">
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c2f6e] tracking-tight">
              {hasAnimated ? counts[2] : 6}
            </span>
            <span className="block mt-2 font-bold text-xs sm:text-sm text-[#5b6b85]">
              Success stories shown
            </span>
            <span className="block mt-1 text-[0.72rem] text-[#8a97ad]">
              National enterprise clients
            </span>
          </div>

          {/* 100% Custom engineered */}
          <div className="bg-[#f7f9fd] border border-[#dfe6f1] p-6 sm:p-7 rounded-2xl text-center shadow-xs transition-transform hover:-translate-y-1">
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c2f6e] tracking-tight">
              {hasAnimated ? counts[3] : 100}%
            </span>
            <span className="block mt-2 font-bold text-xs sm:text-sm text-[#5b6b85]">
              Custom-engineered
            </span>
            <span className="block mt-1 text-[0.72rem] text-[#8a97ad]">
              Precision floor plan match
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
