import React, { useRef, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Cog, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';
import { BrandLogoAnimation } from './BrandLogoAnimation';

interface Props {
  onOpenQuoteModal: () => void;
}



export const Hero3DConveyor: React.FC<Props> = ({ onOpenQuoteModal }) => {
  const stageRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  // Interactive 3D tilt tracking cursor on fine pointer devices
  useEffect(() => {
    const stage = stageRef.current;
    const scene = sceneRef.current;
    if (!stage || !scene) return;

    const isFinePointer = window.matchMedia('(pointer:fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      scene.style.setProperty('--tx', `${x * 16}deg`);
      scene.style.setProperty('--ty', `${-y * 12}deg`);
    };

    const handlePointerLeave = () => {
      scene.style.setProperty('--tx', '0deg');
      scene.style.setProperty('--ty', '0deg');
    };

    stage.addEventListener('pointermove', handlePointerMove);
    stage.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      stage.removeEventListener('pointermove', handlePointerMove);
      stage.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <header id="top" className="relative pt-[90px] sm:pt-[110px] overflow-hidden">
      <div className="relative bg-gradient-to-br from-[#0c2f6e] via-[#071f4d] to-[#0a2a63] text-white overflow-hidden pb-16 sm:pb-24 border-b-4 border-[#ffc20e]">
        {/* Ambient background glow & industrial floor grid */}
        <div
          className="absolute -right-24 -top-24 w-[380px] sm:w-[600px] h-[380px] sm:h-[600px] rounded-full pointer-events-none opacity-40 blur-2xl"
          style={{ background: 'radial-gradient(circle, rgba(255,194,14,0.3) 0%, transparent 70%)' }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at 70% 60%, #000 25%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 70% 60%, #000 25%, transparent 70%)',
          }}
        />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10 pt-10 sm:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 xl:col-span-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#071f4d] border border-[#ffc20e]/60 text-[#ffd84d] text-[0.7rem] sm:text-xs font-black tracking-wider uppercase shadow-md max-w-full">
                <span className="w-2 h-2 rounded-full bg-[#ffc20e] animate-pulse flex-shrink-0" />
                <span className="whitespace-nowrap">Established 2021 · Bhiwandi, Maharashtra</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-[2.5rem] sm:text-[3.4rem] lg:text-[4.2rem] font-black leading-[1.05] tracking-tight text-white mt-5">
                Moving your business{' '}
                <span className="text-[#ffc20e] inline-flex items-center">
                  FORWARD
                  <span className="inline-block ml-2 text-[#ffd84d] animate-[chev_1.2s_ease-in-out_infinite]">
                    »
                  </span>
                </span>
              </h1>

              {/* RISETECH Animated Business Brand Emblem */}
              <BrandLogoAnimation />

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap gap-3.5 mt-8 items-center">
                <button
                  onClick={onOpenQuoteModal}
                  className="btn-sheen inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#ffc20e] text-[#071f4d] font-black text-base shadow-[0_12px_32px_rgba(255,194,14,0.45)] hover:shadow-[0_16px_40px_rgba(255,194,14,0.6)] hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-5 h-5 text-[#071f4d]" />
                </button>

                <a
                  href={`tel:${COMPANY_DETAILS.phoneClean}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#ffc20e]/60 bg-[#ffc20e]/10 text-[#ffd84d] hover:bg-[#ffc20e] hover:text-[#071f4d] font-bold text-base transition-all cursor-pointer"
                  title="Click to open dialer: +91 9004450610"
                >
                  <Phone className="w-4 h-4 text-[#ffc20e] group-hover:text-[#071f4d]" />
                  <span>Call Us Now</span>
                </a>

                <a
                  href="#products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-white/30 text-white bg-white/5 backdrop-blur-sm font-bold text-base hover:border-[#ffc20e] hover:text-[#ffc20e] hover:-translate-y-0.5 transition-all"
                >
                  <span>View Products</span>
                </a>
              </div>

              {/* Three Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/15">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ffc20e]/15 border border-[#ffc20e]/40 flex items-center justify-center flex-shrink-0">
                    <Cog className="w-5 h-5 text-[#ffc20e]" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white">
                    Precision<br />Engineering
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ffc20e]/15 border border-[#ffc20e]/40 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#ffc20e]" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white">
                    Reliable<br />Performance
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ffc20e]/15 border border-[#ffc20e]/40 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#ffc20e]" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white">
                    Built to<br />Last
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Animated Conveyor Stage */}
            <div className="lg:col-span-6 xl:col-span-6 relative">
              <div className="relative">
                {/* 3D Stage Container */}
                <div
                  ref={stageRef}
                  className="stage-3d w-full cursor-grab active:cursor-grabbing select-none"
                  aria-label="Continuous 3D Conveyor Simulation"
                >
                  <div
                    ref={sceneRef}
                    className="scene-3d"
                  >
                    {/* Shadow underneath the conveyor */}
                    <div className="shadow-3d" />

                    {/* Main deck holding the belt, frame, rollers and cartons */}
                    <div className="deck-3d">
                      {/* Conveyor Belt Surface with animated slats */}
                      <div className="belt-3d" />

                      {/* Extruded Side Rails */}
                      <div className="rail-3d rail-top" />
                      <div className="rail-3d rail-bot" />

                      {/* Spinning End Drums / Rollers */}
                      <div className="roller-3d r1" />
                      <div className="roller-3d r2" />

                      {/* Structural Support Legs */}
                      <div className="leg-3d l1" />
                      <div className="leg-3d l2" />
                      <div className="leg-3d l3" />

                      {/* Electric Drive Motor Block with power LED & fin detailing */}
                      <div className="motor-3d flex flex-col justify-between p-1">
                        <div className="h-1.5 rounded-sm bg-slate-300/40" />
                        <div className="flex items-center justify-between px-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
                          <span className="text-[6px] font-black text-slate-300 font-mono tracking-tighter">24V</span>
                        </div>
                      </div>

                      {/* Photoelectric Sensor Gate & Glowing Laser Beam */}
                      <div className="gate-3d relative">
                        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#ffc20e] shadow-[0_0_10px_#ffc20e]" />
                      </div>
                      <div className="gate-beam-3d" />

                      {/* 3D Moving Cartons - Clean Plain 3D Corrugated Boxes */}
                      {/* Carton 1 */}
                      <div className="ride-3d">
                        <div className="cube-shadow-3d" />
                        <div className="cube-3d">
                          <div className="face-3d bottom" />
                          <div className="face-3d back" />
                          <div className="face-3d left" />
                          <div className="face-3d right" />
                          <div className="face-3d front" />
                          <div className="face-3d top">
                            <div className="face-3d tape absolute inset-0 pointer-events-none" />
                            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-amber-950/30 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      {/* Carton 2 */}
                      <div className="ride-3d d2">
                        <div className="cube-shadow-3d" />
                        <div className="cube-3d">
                          <div className="face-3d bottom" />
                          <div className="face-3d back" />
                          <div className="face-3d left" />
                          <div className="face-3d right" />
                          <div className="face-3d front" />
                          <div className="face-3d top">
                            <div className="face-3d tape absolute inset-0 pointer-events-none" />
                            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-amber-950/30 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      {/* Carton 3 */}
                      <div className="ride-3d d3">
                        <div className="cube-shadow-3d" />
                        <div className="cube-3d">
                          <div className="face-3d bottom" />
                          <div className="face-3d back" />
                          <div className="face-3d left" />
                          <div className="face-3d right" />
                          <div className="face-3d front" />
                          <div className="face-3d top">
                            <div className="face-3d tape absolute inset-0 pointer-events-none" />
                            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-amber-950/30 pointer-events-none" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
