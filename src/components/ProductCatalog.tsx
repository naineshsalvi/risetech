import React, { useState } from 'react';
import { PRODUCTS } from '../data/mockData';
import { ConveyorThumbnail } from './ConveyorThumbnails';
import { ProductCategory, Product } from '../types';
import { ArrowUpRight, Gauge, Layers } from 'lucide-react';

interface Props {
  onOpenQuoteModal: (productName?: string) => void;
}

export const ProductCatalog: React.FC<Props> = ({ onOpenQuoteModal }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | ProductCategory>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filterTabs: { label: string; value: 'all' | ProductCategory }[] = [
    { label: 'All', value: 'all' },
    { label: 'Belt', value: 'belt' },
    { label: 'Modular', value: 'modular' },
    { label: 'Roller', value: 'roller' },
    { label: 'Special', value: 'special' },
  ];

  const filteredProducts = PRODUCTS.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  );

  return (
    <section id="products" className="py-20 sm:py-28 bg-white border-y border-[#dfe6f1]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2.5 text-[#1d5fd6] font-extrabold text-xs tracking-[0.18em] uppercase mb-3">
            <span className="w-7 h-[3px] bg-[#ffc20e] rounded-full" />
            <span>Our Range</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#0c2f6e] tracking-tight leading-tight">
            Conveyor systems for every line
          </h2>
          <p className="mt-3 text-[#5b6b85] text-base sm:text-lg leading-relaxed">
            Seven standard engineered families, each customized to your load weight, line speed and physical floor layout.
          </p>
        </div>

        {/* Filter Tabs & Gallery Jump Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-10">
          <div className="flex flex-wrap gap-2 p-1.5 rounded-full bg-[#f4f7fb] border border-[#dfe6f1] w-fit shadow-sm">
            {filterTabs.map((tab) => {
            const count =
              tab.value === 'all'
                ? PRODUCTS.length
                : PRODUCTS.filter((p) => p.category === tab.value).length;
            const isActive = activeFilter === tab.value;

            return (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#0c2f6e] text-white shadow-[0_6px_16px_rgba(12,47,110,0.25)]'
                    : 'text-[#0c2f6e] hover:bg-[#e4ecf7]'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-xs px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-[#ffc20e] text-[#071f4d]' : 'bg-[#e0e7f3] text-[#5b6b85]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
          </div>

          <a
            href="#gallery"
            className="btn-sheen inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ffc20e] text-[#071f4d] font-black text-xs sm:text-sm shadow-md hover:bg-[#ffd84d] transition-all w-fit"
          >
            <span>📸 View Real Photo Gallery (6 Photos)</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-2xl border border-[#dfe6f1] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_50px_rgba(12,47,110,0.12)] relative"
            >
              {/* Product Thumbnail Diagram */}
              <div className="h-[180px] bg-gradient-to-b from-[#f2f6fd] to-[#e6eefb] border-b border-[#dfe6f1] p-4 flex items-center justify-center relative overflow-hidden group-hover:from-[#ebf2fc] group-hover:to-[#dde7f9] transition-colors">
                <span className="absolute top-3.5 left-3.5 bg-[#0c2f6e] text-white text-[0.72rem] font-extrabold uppercase tracking-wider px-3 py-1 rounded-md shadow-sm z-10">
                  {product.categoryLabel}
                </span>

                <div className="w-[88%] transform group-hover:scale-105 transition-transform duration-300">
                  <ConveyorThumbnail kind={product.svgKind} />
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black text-[#0c2f6e] group-hover:text-[#1d5fd6] transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-[#5b6b85] text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="mt-4 space-y-2 text-sm text-[#0f1b33]">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-[2px] bg-[#ffc20e] flex-shrink-0" />
                        <span className="font-medium text-[#46546c]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technical Meta Tag (Applications & Capacity) */}
                  <div className="mt-4 pt-3.5 border-t border-[#dfe6f1] space-y-1 text-xs text-[#6e7e98]">
                    {product.loadCapacity && (
                      <div className="flex items-center gap-1.5">
                        <Gauge className="w-3.5 h-3.5 text-[#1d5fd6] flex-shrink-0" />
                        <span><strong>Capacity:</strong> {product.loadCapacity}</span>
                      </div>
                    )}
                    {product.typicalApplications && (
                      <div className="flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#1d5fd6] flex-shrink-0" />
                        <span className="truncate"><strong>Best for:</strong> {product.typicalApplications}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-[#dfe6f1] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1d5fd6] uppercase tracking-wide">
                    Custom Engineered
                  </span>
                  <button
                    onClick={() => onOpenQuoteModal(product.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#0c2f6e] hover:text-[#1d5fd6] bg-[#f4f7fb] hover:bg-[#e4ecf7] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Request Quote</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
