import React, { useState } from 'react';

export const BrandLogoAnimation: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="mt-6 max-w-[520px] rounded-2xl bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent border border-white/15 p-4 sm:p-5 backdrop-blur-md shadow-[0_16px_36px_rgba(0,0,0,0.25)] relative overflow-hidden group transition-all duration-300 hover:border-[#ffc20e]/50 hover:from-white/[0.12]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background ambient gleam */}
      <div
        className="absolute -right-16 -top-16 w-36 h-36 rounded-full pointer-events-none opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-40"
        style={{ background: 'radial-gradient(circle, #ffc20e 0%, transparent 70%)' }}
      />

      <div className="flex items-center gap-4 sm:gap-5 relative z-10">
        {/* Animated 3D Logo Emblem */}
        <div className="relative flex-shrink-0">
          {/* Subtle glowing halo */}
          <div className="absolute inset-0 rounded-xl bg-[#ffc20e]/20 blur-md scale-95 transition-transform duration-500 group-hover:scale-110" />

          {/* 3D Logo Box with floating & light sweep animation */}
          <div
            className={`w-[68px] h-[54px] sm:w-[78px] sm:h-[62px] relative transition-transform duration-500 ease-out ${
              isHovered ? 'scale-105 -rotate-1' : 'animate-[logoFloat_4s_ease-in-out_infinite]'
            }`}
            style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
          >
            <svg
              viewBox="0 0 120 96"
              className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="anim-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffe680" />
                  <stop offset="35%" stopColor="#ffd84d" />
                  <stop offset="70%" stopColor="#f5b400" />
                  <stop offset="100%" stopColor="#b37a00" />
                </linearGradient>

                <linearGradient id="anim-silver" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="40%" stopColor="#e2e8f0" />
                  <stop offset="80%" stopColor="#94a3b8" />
                  <stop offset="100%" stopColor="#64748b" />
                </linearGradient>

                {/* Shimmer light sweep clip */}
                <clipPath id="logoShimmerClip">
                  <path d="M6 30 H48 V60 H28 L16 60 Z" />
                  <path d="M18 14 H58 L44 30 H6 Z" />
                  <path d="M52 16 H116 V28 H84 V80 H64 V28 H52 Z" />
                </clipPath>

                <linearGradient id="shimmerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.7)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>

              {/* Base Geometric Facets */}
              <g>
                {/* Golden carton / forward transport element */}
                <path
                  d="M6 30 H48 V60 H28 L16 60 Z"
                  fill="url(#anim-gold)"
                  className="transition-opacity duration-300"
                />
                <path
                  d="M18 14 H58 L44 30 H6 Z"
                  fill="url(#anim-gold)"
                  className="transition-opacity duration-300"
                />

                {/* Structural steel T-beam support arm */}
                <path
                  d="M52 16 H116 V28 H84 V80 H64 V28 H52 Z"
                  fill="url(#anim-silver)"
                />
              </g>

              {/* Shimmer light beam traveling across the logo */}
              <g clipPath="url(#logoShimmerClip)">
                <rect
                  x="-100"
                  y="0"
                  width="60"
                  height="100"
                  fill="url(#shimmerGrad)"
                  transform="skewX(-25)"
                  className="animate-[logoSheen_3.6s_ease-in-out_infinite]"
                />
              </g>

              {/* Forward momentum arrows inside beam */}
              <g opacity="0.35">
                <path d="M70 22 L75 22" stroke="#071f4d" strokeWidth="2" strokeLinecap="round" />
                <path d="M88 22 L93 22" stroke="#071f4d" strokeWidth="2" strokeLinecap="round" />
              </g>
            </svg>
          </div>
        </div>

        {/* Brand Text & Live Metric Status */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-black text-lg sm:text-xl text-white tracking-wider leading-none">
              RISETECH
            </span>
            <span className="px-2 py-0.5 rounded text-[0.62rem] font-black uppercase tracking-wider bg-[#ffc20e] text-[#071f4d] shadow-xs">
              EST. 2021
            </span>
          </div>

          <div className="text-[0.74rem] sm:text-[0.78rem] font-bold text-[#c8d6f0] uppercase tracking-wider mt-1 truncate">
            Heavy-Duty Industrial Conveying Systems
          </div>

          {/* Micro Conveyor Velocity Track */}
          <div className="mt-2.5 flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-black/40 rounded-full overflow-hidden relative border border-white/10">
              <div
                className="absolute inset-y-0 left-0 right-0 animate-[trackMove_2s_linear_infinite]"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(90deg, #ffc20e 0px, #ffc20e 8px, transparent 8px, transparent 16px)',
                }}
              />
            </div>
            <span className="text-[0.66rem] font-extrabold text-[#ffd84d] uppercase tracking-widest whitespace-nowrap flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Continuous 24/7 Flow
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
