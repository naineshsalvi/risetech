import React from 'react';

interface Props {
  kind: 'flat' | 'incline' | 'modular' | 'roller' | 'chainmod' | 'curve' | 'long';
  className?: string;
}

export const ConveyorThumbnail: React.FC<Props> = ({ kind, className = 'w-full h-auto' }) => {
  const BLUE = '#1d5fd6';

  switch (kind) {
    case 'flat':
      return (
        <svg viewBox="0 0 200 110" className={className} aria-label="Flat Belt Conveyor Diagram">
          {/* Belt base & guides */}
          <rect x="20" y="62" width="160" height="10" rx="3" fill="#2b2f36" />
          <rect x="20" y="58" width="160" height="6" fill={BLUE} />
          {/* Support legs */}
          <rect x="34" y="72" width="8" height="28" fill={BLUE} />
          <rect x="158" y="72" width="8" height="28" fill={BLUE} />
          {/* Cartons on belt */}
          <rect x="40" y="40" width="30" height="22" rx="2" fill="#e0b47a" stroke="#8a5a2a" strokeWidth="1" />
          <line x1="55" y1="40" x2="55" y2="62" stroke="#ffffff" strokeWidth="2" strokeDasharray="3 2" opacity="0.6" />
          <rect x="100" y="40" width="30" height="22" rx="2" fill="#e0b47a" stroke="#8a5a2a" strokeWidth="1" />
          <line x1="115" y1="40" x2="115" y2="62" stroke="#ffffff" strokeWidth="2" strokeDasharray="3 2" opacity="0.6" />
        </svg>
      );

    case 'incline':
      return (
        <svg viewBox="0 0 200 110" className={className} aria-label="Incline Cleated Conveyor Diagram">
          {/* Support truss */}
          <line x1="30" y1="92" x2="30" y2="105" stroke={BLUE} strokeWidth="6" strokeLinecap="round" />
          <line x1="150" y1="30" x2="150" y2="105" stroke={BLUE} strokeWidth="6" strokeLinecap="round" />
          <line x1="30" y1="105" x2="150" y2="105" stroke="#8a97ad" strokeWidth="3" />
          {/* Inclined bed */}
          <path d="M30 92 L150 30" stroke={BLUE} strokeWidth="14" strokeLinecap="round" />
          <path d="M30 92 L150 30" stroke="#2b2f36" strokeWidth="8" strokeDasharray="6 10" />
          {/* Climbing carton */}
          <rect x="68" y="44" width="28" height="20" rx="2" fill="#e0b47a" stroke="#8a5a2a" strokeWidth="1" transform="rotate(-27 68 44)" />
        </svg>
      );

    case 'modular':
      return (
        <svg viewBox="0 0 200 110" className={className} aria-label="Modular Belt Conveyor Diagram">
          {/* Modular grid bed */}
          <rect x="20" y="58" width="160" height="14" rx="4" fill="#1e9d5a" />
          <rect x="20" y="52" width="160" height="5" fill="#ff8a1f" />
          <rect x="20" y="72" width="160" height="5" fill="#ff8a1f" />
          {/* Legs */}
          <rect x="26" y="78" width="8" height="22" fill={BLUE} />
          <rect x="166" y="78" width="8" height="22" fill={BLUE} />
          {/* Washdown food container */}
          <rect x="50" y="36" width="30" height="20" rx="2" fill="#e0b47a" stroke="#8a5a2a" strokeWidth="1" />
          <rect x="110" y="36" width="30" height="20" rx="2" fill="#e0b47a" stroke="#8a5a2a" strokeWidth="1" />
        </svg>
      );

    case 'roller':
      return (
        <svg viewBox="0 0 200 110" className={className} aria-label="Roller Conveyor Diagram">
          {/* Blue side rails */}
          <rect x="20" y="60" width="160" height="6" fill={BLUE} />
          {/* Cylindrical rollers */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <rect key={i} x={26 + i * 19} y="50" width="6" height="26" rx="3" fill="#c9d2de" stroke="#8f9bac" strokeWidth="0.5" />
          ))}
          {/* Support legs */}
          <rect x="30" y="78" width="8" height="22" fill={BLUE} />
          <rect x="150" y="78" width="8" height="22" fill={BLUE} />
          {/* Tote / Pallet */}
          <rect x="70" y="34" width="34" height="18" rx="2" fill="#e0b47a" stroke="#8a5a2a" strokeWidth="1" />
        </svg>
      );

    case 'chainmod':
      return (
        <svg viewBox="0 0 200 110" className={className} aria-label="Heavy Modular Conveyor Diagram">
          {/* Interlocking plastic modules */}
          <rect x="20" y="56" width="160" height="18" rx="4" fill="#2b2f36" />
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <rect key={i} x={24 + i * 17} y="56" width="12" height="18" rx="2" fill="#3b4048" />
          ))}
          <rect x="20" y="52" width="160" height="5" fill={BLUE} />
          {/* Support legs */}
          <rect x="34" y="74" width="8" height="26" fill={BLUE} />
          <rect x="158" y="74" width="8" height="26" fill={BLUE} />
          {/* Heavy carton */}
          <rect x="80" y="36" width="36" height="20" rx="2" fill="#e0b47a" stroke="#8a5a2a" strokeWidth="1" />
        </svg>
      );

    case 'curve':
      return (
        <svg viewBox="0 0 200 110" className={className} aria-label="Curve Conveyor Diagram">
          {/* 90 degree curve track */}
          <path
            d="M30 100 Q60 98 80 70 Q100 40 150 36"
            fill="none"
            stroke={BLUE}
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M30 100 Q60 98 80 70 Q100 40 150 36"
            fill="none"
            stroke="#2b2f36"
            strokeWidth="7"
            strokeDasharray="5 9"
          />
          {/* Corner legs */}
          <circle cx="34" cy="98" r="4" fill="#071f4d" />
          <circle cx="146" cy="38" r="4" fill="#071f4d" />
          {/* Corner routing parcel */}
          <rect x="92" y="28" width="26" height="18" rx="2" fill="#e0b47a" stroke="#8a5a2a" strokeWidth="1" transform="rotate(-15 92 28)" />
        </svg>
      );

    case 'long':
    default:
      return (
        <svg viewBox="0 0 200 110" className={className} aria-label="Flat Level Conveyor Diagram">
          {/* Long continuous deck */}
          <rect x="10" y="60" width="180" height="12" rx="3" fill="#2b2f36" />
          <rect x="10" y="56" width="180" height="5" fill={BLUE} />
          {/* Tri-leg support */}
          <rect x="18" y="72" width="8" height="26" fill={BLUE} />
          <rect x="94" y="72" width="8" height="26" fill={BLUE} />
          <rect x="176" y="72" width="8" height="26" fill={BLUE} />
          {/* Gear motor block */}
          <rect x="170" y="48" width="14" height="10" rx="2" fill="#4a5566" />
          {/* Moving boxes */}
          <rect x="30" y="38" width="30" height="20" rx="2" fill="#e0b47a" stroke="#8a5a2a" strokeWidth="1" />
          <rect x="110" y="38" width="30" height="20" rx="2" fill="#e0b47a" stroke="#8a5a2a" strokeWidth="1" />
        </svg>
      );
  }
};
