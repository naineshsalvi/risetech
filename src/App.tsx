/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero3DConveyor } from './components/Hero3DConveyor';
import { Marquee } from './components/Marquee';
import { SuccessStories } from './components/SuccessStories';
import { ProductCatalog } from './components/ProductCatalog';
import { ImageGallery } from './components/ImageGallery';
import { IndustriesSection } from './components/IndustriesSection';
import { SavingsCalculator } from './components/SavingsCalculator';
import { ProcessSection } from './components/ProcessSection';
import { WhyUsCounters } from './components/WhyUsCounters';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  const handleOpenQuoteModal = (productName?: string) => {
    setSelectedProduct(productName || '');
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setSelectedProduct('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f7fb] text-[#0f1b33]">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3D Animated Conveyor Hero Section */}
        <Hero3DConveyor onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Industrial Ribbon Marquee */}
        <Marquee />

        {/* Client Success Stories */}
        <SuccessStories />

        {/* Product Catalog with Interactive Filters & SVG diagrams */}
        <ProductCatalog onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Real Production Equipment Image Gallery with Animated Thumbnails & Lightbox */}
        <ImageGallery onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Industries Served */}
        <IndustriesSection />

        {/* Interactive Labor ROI & Savings Estimator */}
        <SavingsCalculator onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 4-Step Engineering & Delivery Process */}
        <ProcessSection />

        {/* Why RISETECH & Metric Counter Band */}
        <WhyUsCounters />

        {/* Contact Information & Technical Quote Form */}
        <ContactSection preselectedProduct={selectedProduct} />
      </main>

      {/* Footer with Industrial Banner and Back-to-Top Button */}
      <Footer />

      {/* Interactive Quick Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        preselectedProduct={selectedProduct}
      />
    </div>
  );
}
