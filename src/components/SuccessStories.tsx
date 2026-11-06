import React, { useState } from 'react';
import { CLIENT_STORIES } from '../data/mockData';
import { Building2, CheckCircle } from 'lucide-react';

export const SuccessStories: React.FC = () => {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImgError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="clients" className="py-20 sm:py-28 bg-gradient-to-b from-[#eef4ff] to-[#f4f7fb]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2.5 text-[#1d5fd6] font-extrabold text-xs tracking-[0.18em] uppercase mb-3">
            <span className="w-7 h-[3px] bg-[#ffc20e] rounded-full" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#0c2f6e] tracking-tight leading-tight">
            Trusted by leading brands
          </h2>
          <p className="mt-3 text-[#5b6b85] text-base sm:text-lg leading-relaxed">
            Conveyor systems RISETECH has engineered and supplied to top-tier manufacturers and logistics leaders across India.
          </p>
        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mt-12">
          {CLIENT_STORIES.map((client) => {
            const hasError = imgErrors[client.id];

            return (
              <article
                key={client.id}
                className="group relative bg-white rounded-2xl border border-[#dfe6f1] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_50px_rgba(12,47,110,0.12)] flex flex-col justify-between overflow-hidden"
              >
                {/* Top multi-tone border */}
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#0c2f6e] via-[#1d5fd6] to-[#ffc20e]" />

                <div>
                  {/* Logo Box */}
                  <div className="h-24 rounded-xl bg-[#f6f8fc] border border-dashed border-[#c9d5e8] p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-[#f0f4fb] transition-colors">
                    {!hasError ? (
                      <img
                        src={client.logoUrl}
                        alt={`${client.name} Logo`}
                        onError={() => handleImgError(client.id)}
                        className="max-h-[64px] max-w-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex items-center gap-2 text-[#0c2f6e] font-black text-xl tracking-tight">
                        <Building2 className="w-6 h-6 text-[#1d5fd6]" />
                        <span>{client.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Sector Badge */}
                  <div className="mt-5">
                    <span className="text-[0.74rem] font-extrabold text-[#1d5fd6] tracking-wider uppercase">
                      {client.sector}
                    </span>
                    <h3 className="text-xl font-bold text-[#0c2f6e] mt-1 group-hover:text-[#1d5fd6] transition-colors">
                      {client.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-2.5 text-[#5b6b85] text-[0.92rem] leading-relaxed">
                    {client.description}
                  </p>
                </div>

                {/* Project Highlight */}
                {client.projectHighlights && (
                  <div className="mt-5 pt-3.5 border-t border-dashed border-[#dfe6f1] flex items-start gap-2 text-xs text-[#6e7e98] italic">
                    <CheckCircle className="w-3.5 h-3.5 text-[#14a36b] mt-0.5 flex-shrink-0 not-italic" />
                    <span>{client.projectHighlights}</span>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
