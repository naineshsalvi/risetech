import React, { useState, useEffect } from 'react';
import { X, Check, Send, MessageCircle, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export const QuoteModal: React.FC<Props> = ({
  isOpen,
  onClose,
  preselectedProduct = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    type: preselectedProduct,
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedProduct) {
      setFormData((prev) => ({ ...prev, type: preselectedProduct }));
    }
  }, [preselectedProduct]);

  // Handle ESC key to dismiss modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const createWhatsAppUrl = (data: typeof formData) => {
    const text = `*NEW CONVEYOR QUOTE ENQUIRY - RISETECH*
----------------------------------------
*Name:* ${data.name || 'Not provided'}
*Company:* ${data.company || 'Not provided'}
*Phone:* ${data.phone || 'Not provided'}
*Email:* ${data.email || 'Not provided'}
*Conveyor Type:* ${data.type || 'Not specified'}
*Details / Layout:*
${data.details ? data.details : 'No additional notes provided'}
----------------------------------------
_Inquiry sent from RISETECH Website Modal_`;

    return `https://wa.me/919004450610?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const waUrl = createWhatsAppUrl(formData);
    // Directly land on WhatsApp on mobile number +91 9004450610
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        // Clicking backdrop closes modal
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl border border-[#dfe6f1] shadow-[0_25px_60px_rgba(0,0,0,0.4)] my-auto max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#0c2f6e] text-white p-5 sm:p-6 flex items-center justify-between border-b-2 border-[#ffc20e] relative z-20 flex-shrink-0">
          <div>
            <span className="text-[0.68rem] font-black uppercase tracking-widest text-[#ffd84d] block">
              RISETECH Engineering
            </span>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-black text-white mt-0.5">
              Request a Conveyor Quote
            </h3>
          </div>

          {/* Prominent Cross Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleClose();
            }}
            className="p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/30 text-white hover:text-[#ffd84d] transition-all cursor-pointer flex items-center justify-center border border-white/10 shadow-sm"
            aria-label="Close dialog"
            title="Close (Esc)"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 pointer-events-none stroke-[2.5]" />
          </button>
        </div>

        {/* Content Area with internal scroll if screen height is constrained */}
        <div className="p-6 sm:p-7 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h4 className="text-xl font-black text-[#0c2f6e] mb-2">
                Quote Request Received!
              </h4>
              <p className="text-sm text-[#5b6b85] mb-6 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Our Bhiwandi engineering and estimation team will review your specifications and contact you within one business day.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={`tel:${COMPANY_DETAILS.phoneClean}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0c2f6e] hover:bg-[#071f4d] text-white font-bold text-xs shadow-sm transition-colors cursor-pointer"
                  title="Call in Phone Dialer"
                >
                  <Phone className="w-4 h-4 text-[#ffc20e]" />
                  <span>Call {COMPANY_DETAILS.phone}</span>
                </a>
                <a
                  href={createWhatsAppUrl(formData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp Chat</span>
                </a>
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0c2f6e] font-bold text-xs transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[0.74rem] font-bold text-[#5b6b85] uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfe6f1] bg-[#f7f9fd] text-[#0f1b33] text-sm focus:outline-none focus:border-[#1d5fd6] focus:bg-white focus:ring-3 focus:ring-[#1d5fd6]/15 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[0.74rem] font-bold text-[#5b6b85] uppercase tracking-wider mb-1">
                    Company *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfe6f1] bg-[#f7f9fd] text-[#0f1b33] text-sm focus:outline-none focus:border-[#1d5fd6] focus:bg-white focus:ring-3 focus:ring-[#1d5fd6]/15 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[0.74rem] font-bold text-[#5b6b85] uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="email@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfe6f1] bg-[#f7f9fd] text-[#0f1b33] text-sm focus:outline-none focus:border-[#1d5fd6] focus:bg-white focus:ring-3 focus:ring-[#1d5fd6]/15 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[0.74rem] font-bold text-[#5b6b85] uppercase tracking-wider mb-1">
                    Phone *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+91..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfe6f1] bg-[#f7f9fd] text-[#0f1b33] text-sm focus:outline-none focus:border-[#1d5fd6] focus:bg-white focus:ring-3 focus:ring-[#1d5fd6]/15 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[0.74rem] font-bold text-[#5b6b85] uppercase tracking-wider mb-1">
                  Target Conveyor System *
                </label>
                <select
                  required
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfe6f1] bg-[#f7f9fd] text-[#0f1b33] text-sm focus:outline-none focus:border-[#1d5fd6] focus:bg-white focus:ring-3 focus:ring-[#1d5fd6]/15 transition-all"
                >
                  <option value="">Choose a conveyor type</option>
                  <option value="Belt conveyor">Belt conveyor</option>
                  <option value="Loading / unloading conveyor">Loading / unloading conveyor</option>
                  <option value="Modular belt conveyor">Modular belt conveyor</option>
                  <option value="Roller conveyor">Roller conveyor</option>
                  <option value="Modular conveyor">Modular conveyor</option>
                  <option value="Curve conveyor">Curve conveyor</option>
                  <option value="Flat belt conveyor">Flat belt conveyor</option>
                  <option value="Turnkey Custom Line">Complete Turnkey Line</option>
                  <option value="Need Guidance">Need Engineering Recommendation</option>
                </select>
              </div>

              <div>
                <label className="block text-[0.74rem] font-bold text-[#5b6b85] uppercase tracking-wider mb-1">
                  Required Length, Load or Layout details
                </label>
                <textarea
                  rows={3}
                  placeholder="Approximate line length (meters), load per carton or pallet, speed requirements..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#dfe6f1] bg-[#f7f9fd] text-[#0f1b33] text-sm focus:outline-none focus:border-[#1d5fd6] focus:bg-white focus:ring-3 focus:ring-[#1d5fd6]/15 transition-all resize-y"
                />
              </div>

              {/* Action Buttons: Cancel and Submit */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="py-3 px-5 rounded-xl border border-[#dfe6f1] text-[#5b6b85] hover:text-[#0c2f6e] hover:bg-slate-100 font-bold text-sm transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 btn-sheen py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-sm shadow-[0_10px_24px_rgba(37,211,102,0.35)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Send Quote Request to WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
