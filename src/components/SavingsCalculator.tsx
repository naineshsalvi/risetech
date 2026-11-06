import React, { useState, useMemo } from 'react';
import { SavingsInputs } from '../types';
import { Calculator, TrendingUp, Users, Clock, Zap, ArrowRight } from 'lucide-react';

interface Props {
  onOpenQuoteModal: () => void;
}

export const SavingsCalculator: React.FC<Props> = ({ onOpenQuoteModal }) => {
  const [inputs, setInputs] = useState<SavingsInputs>({
    workers: 4,
    hoursPerShift: 8,
    shiftsPerDay: 2,
    workingDaysPerYear: 300,
    labourCostPerHour: 120,
  });

  // Calculate savings using exact mathematical formula
  const results = useMemo(() => {
    const totalHours =
      inputs.workers *
      inputs.hoursPerShift *
      inputs.shiftsPerDay *
      inputs.workingDaysPerYear;

    const annualManualCost = totalHours * inputs.labourCostPerHour;
    const runningCostEst = annualManualCost * 0.08;
    const annualSavings = Math.max(annualManualCost * 0.8 - runningCostEst, 0);
    const hoursFreed = Math.round(totalHours * 0.8);
    const workersRedeployed = Number((inputs.workers * 0.8).toFixed(1));

    return {
      annualManualCost,
      runningCostEst,
      annualSavings,
      hoursFreed,
      workersRedeployed,
    };
  }, [inputs]);

  // Format in Indian currency notation
  const formatINR = (val: number) => {
    return '₹ ' + Math.round(val).toLocaleString('en-IN');
  };

  const handleSliderChange = (field: keyof SavingsInputs, value: number) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="savings" className="py-20 sm:py-28 bg-white border-y border-[#dfe6f1]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2.5 text-[#1d5fd6] font-extrabold text-xs tracking-[0.18em] uppercase mb-3">
            <span className="w-7 h-[3px] bg-[#ffc20e] rounded-full" />
            <span>Savings Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#0c2f6e] tracking-tight leading-tight">
            See what automation could save
          </h2>
          <p className="mt-3 text-[#5b6b85] text-base sm:text-lg leading-relaxed">
            Adjust the sliders to estimate yearly labour savings by replacing manual carrying with dedicated conveyors. Indicative only; a site survey gives exact engineering figures.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12 items-start">
          {/* Sliders Input Panel */}
          <div className="lg:col-span-6 bg-[#f7f9fd] p-7 sm:p-9 rounded-2xl border border-[#dfe6f1] shadow-sm space-y-6">
            {/* Slider 1: Workers */}
            <div>
              <div className="flex justify-between items-center text-sm font-bold text-[#5b6b85] mb-2">
                <span className="flex items-center gap-2 text-[#0c2f6e]">
                  <Users className="w-4 h-4 text-[#1d5fd6]" />
                  Workers on manual handling
                </span>
                <span className="text-lg font-black text-[#0c2f6e] bg-white px-3 py-0.5 rounded-lg border border-[#dfe6f1] shadow-xs">
                  {inputs.workers} <span className="text-xs font-semibold text-[#5b6b85]">workers</span>
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={inputs.workers}
                onChange={(e) => handleSliderChange('workers', Number(e.target.value))}
                className="w-full h-2 bg-[#dfe6f1] rounded-lg appearance-none cursor-pointer accent-[#0c2f6e]"
              />
              <div className="flex justify-between text-[0.72rem] text-[#8a97ad] mt-1">
                <span>1 worker</span>
                <span>20 workers</span>
              </div>
            </div>

            {/* Slider 2: Hours per shift */}
            <div>
              <div className="flex justify-between items-center text-sm font-bold text-[#5b6b85] mb-2">
                <span className="flex items-center gap-2 text-[#0c2f6e]">
                  <Clock className="w-4 h-4 text-[#1d5fd6]" />
                  Hours per shift
                </span>
                <span className="text-lg font-black text-[#0c2f6e] bg-white px-3 py-0.5 rounded-lg border border-[#dfe6f1] shadow-xs">
                  {inputs.hoursPerShift} <span className="text-xs font-semibold text-[#5b6b85]">hrs</span>
                </span>
              </div>
              <input
                type="range"
                min="4"
                max="12"
                value={inputs.hoursPerShift}
                onChange={(e) => handleSliderChange('hoursPerShift', Number(e.target.value))}
                className="w-full h-2 bg-[#dfe6f1] rounded-lg appearance-none cursor-pointer accent-[#0c2f6e]"
              />
              <div className="flex justify-between text-[0.72rem] text-[#8a97ad] mt-1">
                <span>4 hrs</span>
                <span>12 hrs</span>
              </div>
            </div>

            {/* Slider 3: Shifts per day */}
            <div>
              <div className="flex justify-between items-center text-sm font-bold text-[#5b6b85] mb-2">
                <span className="flex items-center gap-2 text-[#0c2f6e]">
                  <Zap className="w-4 h-4 text-[#1d5fd6]" />
                  Shifts per day
                </span>
                <span className="text-lg font-black text-[#0c2f6e] bg-white px-3 py-0.5 rounded-lg border border-[#dfe6f1] shadow-xs">
                  {inputs.shiftsPerDay} <span className="text-xs font-semibold text-[#5b6b85]">shifts</span>
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="3"
                value={inputs.shiftsPerDay}
                onChange={(e) => handleSliderChange('shiftsPerDay', Number(e.target.value))}
                className="w-full h-2 bg-[#dfe6f1] rounded-lg appearance-none cursor-pointer accent-[#0c2f6e]"
              />
              <div className="flex justify-between text-[0.72rem] text-[#8a97ad] mt-1">
                <span>1 shift (Single)</span>
                <span>2 shifts (Double)</span>
                <span>3 shifts (24/7)</span>
              </div>
            </div>

            {/* Slider 4: Working days per year */}
            <div>
              <div className="flex justify-between items-center text-sm font-bold text-[#5b6b85] mb-2">
                <span className="text-[#0c2f6e]">Working days per year</span>
                <span className="text-lg font-black text-[#0c2f6e] bg-white px-3 py-0.5 rounded-lg border border-[#dfe6f1] shadow-xs">
                  {inputs.workingDaysPerYear} <span className="text-xs font-semibold text-[#5b6b85]">days</span>
                </span>
              </div>
              <input
                type="range"
                min="200"
                max="360"
                value={inputs.workingDaysPerYear}
                onChange={(e) => handleSliderChange('workingDaysPerYear', Number(e.target.value))}
                className="w-full h-2 bg-[#dfe6f1] rounded-lg appearance-none cursor-pointer accent-[#0c2f6e]"
              />
              <div className="flex justify-between text-[0.72rem] text-[#8a97ad] mt-1">
                <span>200 days</span>
                <span>300 days (Standard)</span>
                <span>360 days</span>
              </div>
            </div>

            {/* Slider 5: Hourly Labour Cost */}
            <div>
              <div className="flex justify-between items-center text-sm font-bold text-[#5b6b85] mb-2">
                <span className="text-[#0c2f6e]">Labour cost per worker per hour (₹)</span>
                <span className="text-lg font-black text-[#0c2f6e] bg-white px-3 py-0.5 rounded-lg border border-[#dfe6f1] shadow-xs">
                  ₹ {inputs.labourCostPerHour} <span className="text-xs font-semibold text-[#5b6b85]">/hr</span>
                </span>
              </div>
              <input
                type="range"
                min="60"
                max="400"
                step="5"
                value={inputs.labourCostPerHour}
                onChange={(e) => handleSliderChange('labourCostPerHour', Number(e.target.value))}
                className="w-full h-2 bg-[#dfe6f1] rounded-lg appearance-none cursor-pointer accent-[#0c2f6e]"
              />
              <div className="flex justify-between text-[0.72rem] text-[#8a97ad] mt-1">
                <span>₹ 60/hr</span>
                <span>₹ 120/hr</span>
                <span>₹ 400/hr</span>
              </div>
            </div>
          </div>

          {/* Results Display Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#0c2f6e] to-[#071f4d] text-white p-8 sm:p-10 rounded-2xl shadow-[0_18px_50px_rgba(12,47,110,0.22)] relative overflow-hidden flex flex-col justify-between">
            {/* Ambient gold glow */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none opacity-30"
              style={{ background: 'radial-gradient(circle, rgba(255,194,14,0.4) 0%, transparent 70%)' }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-white/20">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#ffd84d]">
                  Calculated ROI Projection
                </span>
                <span className="flex items-center gap-1.5 text-xs text-white/70">
                  <Calculator className="w-3.5 h-3.5 text-[#ffc20e]" />
                  Annual Horizon
                </span>
              </div>

              {/* Rows */}
              <div className="mt-5 space-y-3.5 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-dashed border-white/15 text-[#c8d6f0]">
                  <span>Annual manual labour cost</span>
                  <strong className="text-white font-mono text-base">{formatINR(results.annualManualCost)}</strong>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-dashed border-white/15 text-[#c8d6f0]">
                  <span>Conveyor running &amp; power cost (est.)</span>
                  <strong className="text-white font-mono text-base">{formatINR(results.runningCostEst)}</strong>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-dashed border-white/15 text-[#c8d6f0]">
                  <span>Labour hours freed per year</span>
                  <strong className="text-[#ffd84d] font-mono text-base">
                    {results.hoursFreed.toLocaleString('en-IN')} hrs
                  </strong>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-dashed border-white/15 text-[#c8d6f0]">
                  <span>Workers redeployed (equivalent)</span>
                  <strong className="text-[#ffd84d] font-mono text-base">
                    {results.workersRedeployed} FTEs
                  </strong>
                </div>
              </div>

              {/* Big Savings Highlight */}
              <div className="mt-8 pt-6 border-t-2 border-[#ffc20e]/40">
                <span className="text-xs uppercase font-extrabold tracking-wider text-[#ffd84d]">
                  Estimated Net Yearly Saving
                </span>
                <div className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-[#ffc20e] tracking-tight mt-1 leading-none">
                  {formatINR(results.annualSavings)}
                </div>
              </div>

              <p className="mt-4 text-xs text-[#a9bddf] leading-relaxed">
                Assumes an automated conveyor line replaces 80% of repetitive manual handling time and runs at only ~8% of manual power/spares cost. Actual payback often ranges from 6 to 14 months.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-white/15 relative z-10">
              <button
                onClick={onOpenQuoteModal}
                className="w-full btn-sheen py-3.5 px-6 rounded-xl bg-[#ffc20e] text-[#071f4d] font-black text-sm tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Custom Layout &amp; Feasibility Study</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
