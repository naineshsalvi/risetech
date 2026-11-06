import React, { useState, useEffect, useCallback } from 'react';
import { 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Layers, 
  Truck, 
  TrendingUp, 
  ShieldCheck, 
  Eye
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Flat Belt' | 'Incline & Cleated' | 'Modular Aluminum' | 'Truck & Container Loading';
  image: string;
  tag: string;
  description: string;
  specs: {
    beltType: string;
    frameMaterial: string;
    loadCapacity: string;
    inclineOrLength: string;
    suitableFor: string;
  };
  features: string[];
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'truck-bed-loader-01',
    title: 'Hydraulic Mobile Truck Bed Loading & Unloading Conveyor',
    category: 'Truck & Container Loading',
    image: '/assets/aistudio/image_1f6cc9ed.png',
    tag: 'RT-TRUCK-BED',
    description: 'High-throughput mobile truck bed conveyor loading and unloading brown cartons directly from logistics delivery trucks. Equipped with hydraulic scissor elevation arms, independent geared motor drive, push-button safety control console, and lockable caster outriggers.',
    specs: {
      beltType: 'High-Traction Diamond Green PVC Cleated Belt',
      frameMaterial: 'Heavy Structural Steel (Blue & Safety Yellow)',
      loadCapacity: '3,200+ cartons/hour (up to 60 kg/carton)',
      inclineOrLength: 'Hydraulic scissor lift with micro-height lock',
      suitableFor: 'Logistics fleets, truck loading/unloading, FMCG carton transit, warehouse sorting',
    },
    features: [
      'Direct truck bed docking eliminates manual lifting and reduces turn-around by 65%',
      'Integrated hydraulic lift adjusts smoothly to any truck bed or loading bay height',
      'Dual-direction forward/reverse belt motion for rapid loading and unloading',
      '4x industrial heavy-duty casters with dual screw jack outrigger floor locks'
    ]
  },
  {
    id: 'flat-belt-01',
    title: 'Industrial Horizontal Flat Belt Conveyor',
    category: 'Flat Belt',
    image: '/assets/aistudio/image_c6a40d0e.png',
    tag: 'RT-FLAT-01',
    description: 'Precision-aligned horizontal flat belt conveyor engineered with high-friction green PVC belting, powder-coated structural steel frame, integrated side guides, and micro-adjustable vibration-damped leveling feet.',
    specs: {
      beltType: 'High-Grip Green PVC / PU (2mm - 4mm)',
      frameMaterial: 'Powder-Coated Structural Steel / SS304',
      loadCapacity: 'Up to 150 kg/m continuous',
      inclineOrLength: '2m to 25m customizable sections',
      suitableFor: 'Assembly lines, automated packaging, carton transit & inspection',
    },
    features: [
      'Low-friction high-tensile wear-resistant belt surface',
      'Smooth variable speed drive with zero-backlash gearbox',
      'Integrated guide rails for carton orientation stability',
      'Vibration-damped leveling feet for quiet floor operation'
    ]
  },
  {
    id: 'incline-cleated-01',
    title: 'Stainless Steel Food-Grade Cleated Incline Conveyor',
    category: 'Incline & Cleated',
    image: '/assets/aistudio/image_5e87a464.png',
    tag: 'RT-CLEAT-SS',
    description: 'Sanitary AISI 304 stainless steel incline conveyor equipped with transverse cleats and a low-level feed hopper. Prevents product rollback while elevating grains, snacks, and food ingredients.',
    specs: {
      beltType: 'FDA Food-Grade Blue PU Belt with Solid Cleats',
      frameMaterial: 'AISI 304 Stainless Steel (Washdown Rated)',
      loadCapacity: 'Up to 80 kg/m elevation load',
      inclineOrLength: '30° to 60° adjustable steep angle',
      suitableFor: 'Food processing, grains, agro-produce, confectionery & pharma',
    },
    features: [
      'Full IP66 high-pressure washdown sanitary design',
      'Seamless welded transverse cleats prevent product back-slip',
      'Wide receiving hopper for direct chute or feeder transfer',
      'Corrosion-proof stainless frame with tool-free belt release'
    ]
  },
  {
    id: 'incline-cleated-02',
    title: 'DynaClean Corrugated Sidewall Steep-Angle Elevator',
    category: 'Incline & Cleated',
    image: '/assets/aistudio/image_265b6067.png',
    tag: 'RT-SIDEWALL-02',
    description: 'High-capacity steep-angle bucket elevator featuring continuous flexible wave sidewalls and deep transverse bucket cleats. Mounted on heavy-duty lockable swivel casters for quick plant repositioning.',
    specs: {
      beltType: 'Corrugated Wave Sidewalls + T-Bucket Cleats',
      frameMaterial: 'Sanitary Polymer & SS304 Hybrid Structure',
      loadCapacity: 'Up to 100 kg/m high-lift throughput',
      inclineOrLength: '45° to 75° ultra-steep elevation',
      suitableFor: 'Bulk granules, frozen foods, delicate hardware & small parts',
    },
    features: [
      'Wave sidewalls completely eliminate side spillage on steep climbs',
      '4x industrial lockable swivel casters for effortless portability',
      'Integrated digital speed controller console on chassis',
      'Easy-to-clean modular belt architecture minimizes changeover downtime'
    ]
  },
  {
    id: 'modular-aluminum-01',
    title: 'Heavy-Duty Modular Aluminum Incline Conveyor',
    category: 'Modular Aluminum',
    image: '/assets/aistudio/image_a3b2cac9.png',
    tag: 'RT-ALU-MOD',
    description: 'Rugged incline conveyor fabricated from structural extruded anodized aluminum T-slot profiles with green corrugated sidewall cleated belting. Combines lightweight strength with zero rust.',
    specs: {
      beltType: 'Heavy-Duty Cleated Belt with Flexible Sidewalls',
      frameMaterial: 'Anodized Extruded Aluminum T-Slot Profile',
      loadCapacity: 'Up to 120 kg/m distributed weight',
      inclineOrLength: '35° to 60° incline with mobile base',
      suitableFor: 'Plastic injection molding, stamping scrap, recycling & packaging',
    },
    features: [
      'Modular T-slot profile allows easy mounting of sensors & chutes',
      'Corrosion-free aluminum construction for harsh factory air',
      'High-impact lower guide rollers for smooth belt transition',
      'Heavy caster wheels with foot brakes for rapid line reconfiguration'
    ]
  },
  {
    id: 'container-loader-01',
    title: 'Telescopic Shipping Container Stuffing & Destuffing System',
    category: 'Truck & Container Loading',
    image: '/assets/aistudio/image_b60fd612.png',
    tag: 'RT-CONTAINER-40',
    description: 'Heavy-duty hydraulic mobile container loading and trailer unloading system docked directly into shipping containers. Accelerates turnaround times by over 65% with single-operator controls.',
    specs: {
      beltType: 'High-Traction Diamond Grip Heavy Rubber / PVC',
      frameMaterial: 'Reinforced Carbon Steel with Industrial Safety Striping',
      loadCapacity: '3,000+ cartons/hour (up to 70 kg/carton)',
      inclineOrLength: 'Telescopic reach with hydraulic height lift',
      suitableFor: 'Shipping container stuffing/destuffing, 3PL logistics, FMCG hubs',
    },
    features: [
      'Smooth hydraulic elevation adjusts to any trailer bed height',
      'Dual-direction motorized belt for rapid loading and unloading',
      'Heavy-duty industrial rubber wheels for yard and dock transit',
      'Dual emergency-stop pull cords & safety control console'
    ]
  }
];

interface Props {
  onOpenQuoteModal: (productName?: string) => void;
}

export const ImageGallery: React.FC<Props> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const categories = ['All', 'Truck & Container Loading', 'Flat Belt', 'Incline & Cleated', 'Modular Aluminum'];

  const filteredItems = selectedCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const activeItem = activeModalIndex !== null ? filteredItems[activeModalIndex] : null;

  const handleNext = useCallback(() => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((activeModalIndex + 1) % filteredItems.length);
  }, [activeModalIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((activeModalIndex - 1 + filteredItems.length) % filteredItems.length);
  }, [activeModalIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeModalIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModalIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalIndex, handleNext, handlePrev]);

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (activeModalIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModalIndex]);

  const getWhatsAppUrl = (modelTitle: string) => {
    const text = encodeURIComponent(
      `Hello RISETECH! I saw your conveyor gallery and I am interested in the ${modelTitle}. Please share technical specifications, pricing, and manufacturing lead time.`
    );
    return `https://wa.me/${COMPANY_DETAILS.phoneClean}?text=${text}`;
  };

  return (
    <section id="gallery" className="scroll-mt-24 py-20 sm:py-28 bg-[#f4f7fb] relative overflow-hidden">
      {/* Background ambient accents */}
      <div 
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(12,47,110,0.12) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-10 -right-32 w-96 h-96 rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(255,194,14,0.16) 0%, transparent 70%)' }}
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0c2f6e]/10 border border-[#0c2f6e]/20 text-[#0c2f6e] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#1d5fd6]" />
            <span>Real Production Systems · Made in Bhiwandi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c2f6e] tracking-tight leading-tight">
            Conveyor Systems <span className="text-[#1d5fd6]">In Action</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Explore authentic photographs of RISETECH conveyor machinery designed, fabricated, and installed for heavy-duty material handling across India.
          </p>
        </div>

        {/* Filter Category Segmented Buttons */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-[#dfe6f1] shadow-[0_4px_16px_rgba(12,47,110,0.06)] gap-1 flex-nowrap">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              const count = cat === 'All' 
                ? GALLERY_ITEMS.length 
                : GALLERY_ITEMS.filter(i => i.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    active
                      ? 'bg-[#0c2f6e] text-white shadow-md shadow-[#0c2f6e]/25'
                      : 'text-slate-600 hover:text-[#0c2f6e] hover:bg-slate-100'
                  }`}
                >
                  <span>{cat === 'All' ? 'All Equipment' : cat}</span>
                  <span className={`text-[0.7rem] px-1.5 py-0.2 rounded-full ${active ? 'bg-[#ffc20e] text-[#071f4d] font-black' : 'bg-slate-200 text-slate-700'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl border border-[#dfe6f1] overflow-hidden shadow-[0_6px_24px_rgba(12,47,110,0.08)] hover:shadow-[0_16px_40px_rgba(12,47,110,0.16)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Image Frame with Animated Thumbnail Zoom & Sheen */}
              <div 
                className="relative aspect-4/3 bg-slate-100 overflow-hidden cursor-pointer"
                onClick={() => setActiveModalIndex(index)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Subtle sheen highlight on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Floating Tag Badges */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="text-[0.68rem] font-black uppercase tracking-wider bg-[#0c2f6e] text-white px-2.5 py-1 rounded-md shadow-md">
                    {item.tag}
                  </span>
                  <span className="text-[0.68rem] font-bold bg-white/90 backdrop-blur-sm text-slate-800 px-2 py-1 rounded-md border border-slate-200 shadow-xs">
                    {item.category}
                  </span>
                </div>

                {/* Hover Quick-View Eye Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffc20e] text-[#071f4d] font-black text-xs shadow-xl transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-4 h-4 text-[#071f4d]" />
                    <span>View Specifications</span>
                  </span>
                </div>

                {/* Expand corner button */}
                <button
                  type="button"
                  aria-label={`Enlarge ${item.title}`}
                  className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-[#0c2f6e] flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Card Content & Key Specifications */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#0c2f6e] leading-snug group-hover:text-[#1d5fd6] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Micro Specs List */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 font-medium">Belt Type:</span>
                      <span className="font-bold text-slate-800 text-right truncate max-w-[65%]">
                        {item.specs.beltType.split('(')[0]}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 font-medium">Capacity:</span>
                      <span className="font-bold text-[#0c2f6e] text-right">
                        {item.specs.loadCapacity}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Dual Action Buttons */}
                <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setActiveModalIndex(index)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0c2f6e] font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getWhatsAppUrl(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Custom Fabrication */}
        <div className="mt-14 sm:mt-16 bg-gradient-to-r from-[#0c2f6e] via-[#071f4d] to-[#0a2a63] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-xl border border-white/10">
          <div 
            className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle, #ffc20e 0%, transparent 70%)' }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-black text-[#ffd84d] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-[#ffc20e]" />
                <span>Custom Conveyor Systems Manufactured To Order</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Need a Custom Length, Angle, or Specific Belt Material?
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Every conveyor shown in this gallery is custom-built in our Bhiwandi facility. We engineer exact lengths, cleat pitches, sidewalls, and motor drives for your factory footprint.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                onClick={() => onOpenQuoteModal()}
                className="btn-sheen inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#ffc20e] text-[#071f4d] font-black text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Request Custom Sizing</span>
                <ArrowRight className="w-4 h-4 text-[#071f4d]" />
              </button>

              <a
                href={`tel:${COMPANY_DETAILS.phoneClean}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/30 text-white hover:border-[#ffc20e] hover:text-[#ffc20e] font-bold text-sm transition-all whitespace-nowrap"
              >
                <span>Call {COMPANY_DETAILS.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          <div 
            className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[92vh] border border-white/20 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              onClick={() => setActiveModalIndex(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-sm transition-transform hover:scale-105 cursor-pointer shadow-lg"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left/Main Column: High-Res Image with Nav Arrows */}
            <div className="lg:w-3/5 bg-slate-900/95 relative flex items-center justify-center min-h-[300px] sm:min-h-[420px] p-6 sm:p-8">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-w-full max-h-[70vh] object-contain drop-shadow-2xl transition-all duration-300"
              />

              {/* Prev Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#ffc20e] text-white hover:text-[#071f4d] flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer shadow-lg"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#ffc20e] text-white hover:text-[#071f4d] flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer shadow-lg"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Slide Counter Indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white/90 text-xs font-mono font-bold tracking-wider">
                {activeModalIndex !== null ? activeModalIndex + 1 : 1} / {filteredItems.length}
              </div>
            </div>

            {/* Right Column: Detailed Specifications & Action Hub */}
            <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] lg:max-h-[85vh] bg-white">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-black text-[#1d5fd6] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 uppercase tracking-wider">
                    {activeItem.tag}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    {activeItem.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#0c2f6e] leading-snug">
                  {activeItem.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {activeItem.description}
                </p>

                {/* Key Technical Specs Table */}
                <div className="mt-6">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2.5">
                    Engineering Specifications
                  </h4>
                  <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200/80 space-y-2 text-xs">
                    <div className="flex items-start justify-between gap-2 py-1 border-b border-slate-200/60">
                      <span className="text-slate-500 font-medium">Belt Construction</span>
                      <span className="font-bold text-slate-900 text-right">{activeItem.specs.beltType}</span>
                    </div>
                    <div className="flex items-start justify-between gap-2 py-1 border-b border-slate-200/60">
                      <span className="text-slate-500 font-medium">Frame Architecture</span>
                      <span className="font-bold text-slate-900 text-right">{activeItem.specs.frameMaterial}</span>
                    </div>
                    <div className="flex items-start justify-between gap-2 py-1 border-b border-slate-200/60">
                      <span className="text-slate-500 font-medium">Throughput Capacity</span>
                      <span className="font-bold text-[#0c2f6e] text-right">{activeItem.specs.loadCapacity}</span>
                    </div>
                    <div className="flex items-start justify-between gap-2 py-1 border-b border-slate-200/60">
                      <span className="text-slate-500 font-medium">Configuration</span>
                      <span className="font-bold text-slate-900 text-right">{activeItem.specs.inclineOrLength}</span>
                    </div>
                    <div className="flex items-start justify-between gap-2 py-1">
                      <span className="text-slate-500 font-medium">Recommended For</span>
                      <span className="font-bold text-slate-900 text-right">{activeItem.specs.suitableFor}</span>
                    </div>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="mt-5">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
                    Key Advantages
                  </h4>
                  <ul className="space-y-1.5">
                    {activeItem.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col gap-2.5">
                <a
                  href={getWhatsAppUrl(activeItem.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm tracking-wide shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire on WhatsApp (+91 9004450610)</span>
                </a>

                <button
                  onClick={() => {
                    setActiveModalIndex(null);
                    onOpenQuoteModal(activeItem.title);
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-[#0c2f6e] hover:bg-[#071f4d] text-white font-bold text-sm tracking-wide shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Request Engineering Quote</span>
                  <ArrowRight className="w-4 h-4 text-[#ffc20e]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
