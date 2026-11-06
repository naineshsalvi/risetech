import React, { useState } from 'react';
import { COMPANY_DETAILS, PRODUCTS } from '../data/mockData';
import { Phone, Mail, MapPin, Copy, Check, Send, MessageCircle } from 'lucide-react';

interface Props {
  preselectedProduct?: string;
}

export const ContactSection: React.FC<Props> = ({ preselectedProduct = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    type: preselectedProduct || '',
    msg: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const createWhatsAppUrl = (data: typeof formData) => {
    const text = `*NEW CONVEYOR QUOTE ENQUIRY - RISETECH*
----------------------------------------
*Name:* ${data.name || 'Not provided'}
*Company:* ${data.company || 'Not provided'}
*Phone:* ${data.phone || 'Not provided'}
*Email:* ${data.email || 'Not provided'}
*Conveyor Type:* ${data.type || 'Not specified'}
*Specifications / Requirements:*
${data.msg ? data.msg : 'No additional notes provided'}
----------------------------------------
_Sent from RISETECH Official Website_`;

    return `https://wa.me/919004450610?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const waUrl = createWhatsAppUrl(formData);
    // Direct redirect to WhatsApp on mobile number +91 9004450610
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      type: '',
      msg: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#f4f7fb]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact Info & Legal Badges */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[#1d5fd6] font-extrabold text-xs tracking-[0.18em] uppercase mb-3">
                <span className="w-7 h-[3px] bg-[#ffc20e] rounded-full" />
                <span>Get in Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#0c2f6e] tracking-tight leading-tight">
                Talk to our team
              </h2>
              <p className="mt-3 text-[#5b6b85] text-base leading-relaxed">
                Share your material type, required throughput and available floor space. We'll reply within one business day with a customized layout and price estimate.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5">
              {/* Phone Card - Click to Open Dialer */}
              <a
                href={`tel:${COMPANY_DETAILS.phoneClean}`}
                className="group flex items-center justify-between gap-4 p-4.5 rounded-2xl bg-white border border-[#dfe6f1] transition-all duration-300 hover:border-[#ffc20e] hover:translate-x-1 hover:shadow-md cursor-pointer"
                title="Click to open dialer and call +91 9004450610"
                aria-label="Call +91 9004450610 in dialer"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-[#0c2f6e] flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 shadow-sm">
                    <Phone className="w-5 h-5 text-[#ffc20e]" />
                  </div>
                  <div className="min-w-0">
                    <small className="block text-[0.74rem] font-extrabold text-[#5b6b85] uppercase tracking-wider">
                      Direct Mobile / Sales (Click to Call)
                    </small>
                    <strong className="text-base sm:text-lg font-black text-[#0c2f6e] group-hover:text-[#1d5fd6] transition-colors truncate block">
                      {COMPANY_DETAILS.phone}
                    </strong>
                  </div>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ffc20e] text-[#071f4d] font-black text-xs tracking-wider uppercase shadow-xs flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </span>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="group flex items-center gap-4 p-4.5 rounded-2xl bg-white border border-[#dfe6f1] transition-all duration-300 hover:border-[#ffc20e] hover:translate-x-1 hover:shadow-md cursor-pointer"
                title="Send email inquiry"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0c2f6e] flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 shadow-sm">
                  <Mail className="w-5 h-5 text-[#ffc20e]" />
                </div>
                <div className="flex-1 min-w-0">
                  <small className="block text-[0.74rem] font-extrabold text-[#5b6b85] uppercase tracking-wider">
                    Email Inquiries
                  </small>
                  <strong className="text-sm sm:text-base font-black text-[#0c2f6e] group-hover:text-[#1d5fd6] transition-colors truncate block">
                    {COMPANY_DETAILS.email}
                  </strong>
                </div>
              </a>

              {/* Works Address Card */}
              <div className="flex items-start gap-4 p-4.5 rounded-2xl bg-white border border-[#dfe6f1] shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-[#0c2f6e] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#ffc20e]" />
                </div>
                <div>
                  <small className="block text-[0.74rem] font-extrabold text-[#5b6b85] uppercase tracking-wider">
                    Works &amp; Registered Address
                  </small>
                  <p className="text-sm font-bold text-[#0c2f6e] mt-0.5 leading-snug">
                    {COMPANY_DETAILS.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate IDs (GSTIN & CIN) with Copy Button */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-[#0c2f6e] text-white flex items-center justify-between shadow-xs">
                <div>
                  <small className="block text-[0.7rem] font-black text-[#ffc20e] uppercase tracking-wider">
                    GSTIN
                  </small>
                  <strong className="text-sm font-mono tracking-wide text-white">
                    {COMPANY_DETAILS.gstin}
                  </strong>
                </div>
                <button
                  onClick={() => handleCopy(COMPANY_DETAILS.gstin, 'gstin')}
                  className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-[#ffd84d] transition-colors cursor-pointer"
                  title="Copy GSTIN"
                  aria-label="Copy GSTIN"
                >
                  {copiedId === 'gstin' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-[#0c2f6e] text-white flex items-center justify-between shadow-xs">
                <div>
                  <small className="block text-[0.7rem] font-black text-[#ffc20e] uppercase tracking-wider">
                    CIN
                  </small>
                  <strong className="text-xs font-mono tracking-wide text-white">
                    {COMPANY_DETAILS.cin}
                  </strong>
                </div>
                <button
                  onClick={() => handleCopy(COMPANY_DETAILS.cin, 'cin')}
                  className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-[#ffd84d] transition-colors cursor-pointer"
                  title="Copy CIN"
                  aria-label="Copy CIN"
                >
                  {copiedId === 'cin' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Direct Call & WhatsApp Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <a
                href={`tel:${COMPANY_DETAILS.phoneClean}`}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#0c2f6e] hover:bg-[#071f4d] text-white font-black text-sm tracking-wide shadow-md transition-all cursor-pointer"
                title="Open Phone Dialer"
              >
                <Phone className="w-4 h-4 text-[#ffc20e]" />
                <span>Call +91 9004450610</span>
              </a>

              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-sm tracking-wide shadow-md transition-all cursor-pointer"
                title="Open WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Right Column: Quote Request Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-[#dfe6f1] shadow-[0_18px_50px_rgba(12,47,110,0.1)]">
            <h3 className="text-2xl sm:text-3xl font-black text-[#0c2f6e] tracking-tight mb-2">
              Request a quote
            </h3>
            <p className="text-sm text-[#5b6b85] mb-6">
              Fill out your conveyor specifications below. Our technical engineering division will prepare a comprehensive proposal.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h4 className="text-xl font-black text-emerald-900 mb-2">
                  Enquiry Submitted Successfully!
                </h4>
                <p className="text-emerald-700 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name || 'valued partner'}</strong>. Our engineering and estimation team in Bhiwandi will review your throughput requirements and contact you within one business day.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <a
                    href={createWhatsAppUrl(formData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-sm shadow-md transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp Chat (+91 9004450610)</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0c2f6e] font-bold text-xs transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="form">
                {/* Row 1: Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#5b6b85] uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#dfe6f1] bg-[#f7f9fd] text-[#0f1b33] focus:outline-none focus:border-[#1d5fd6] focus:ring-4 focus:ring-[#1d5fd6]/15 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#5b6b85] uppercase tracking-wider mb-1.5">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="company"
                      placeholder="e.g. Apex Logistics Pvt. Ltd."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#dfe6f1] bg-[#f7f9fd] text-[#0f1b33] focus:outline-none focus:border-[#1d5fd6] focus:ring-4 focus:ring-[#1d5fd6]/15 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#5b6b85] uppercase tracking-wider mb-1.5">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#dfe6f1] bg-[#f7f9fd] text-[#0f1b33] focus:outline-none focus:border-[#1d5fd6] focus:ring-4 focus:ring-[#1d5fd6]/15 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#5b6b85] uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#dfe6f1] bg-[#f7f9fd] text-[#0f1b33] focus:outline-none focus:border-[#1d5fd6] focus:ring-4 focus:ring-[#1d5fd6]/15 transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Conveyor type selector */}
                <div>
                  <label className="block text-xs font-bold text-[#5b6b85] uppercase tracking-wider mb-1.5">
                    Conveyor Type Needed <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    name="type"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-[#dfe6f1] bg-[#f7f9fd] text-[#0f1b33] focus:outline-none focus:border-[#1d5fd6] focus:ring-4 focus:ring-[#1d5fd6]/15 transition-all"
                  >
                    <option value="">Select a conveyor model</option>
                    <option value="Belt conveyor">Belt conveyor</option>
                    <option value="Loading / unloading conveyor">Loading / unloading conveyor</option>
                    <option value="Modular belt conveyor">Modular belt conveyor</option>
                    <option value="Roller conveyor">Roller conveyor</option>
                    <option value="Modular conveyor">Modular conveyor</option>
                    <option value="Curve conveyor">Curve conveyor</option>
                    <option value="Flat belt conveyor">Flat belt conveyor</option>
                    <option value="Complete turnkey automated system">Complete turnkey automated system</option>
                    <option value="Not sure yet">Not sure yet (Need recommendation)</option>
                  </select>
                </div>

                {/* Row 4: Message / Specifications */}
                <div>
                  <label className="block text-xs font-bold text-[#5b6b85] uppercase tracking-wider mb-1.5">
                    Project Specifications &amp; Floor Space
                  </label>
                  <textarea
                    rows={4}
                    name="msg"
                    placeholder="Describe material (boxes, sacks, loose items), load per meter, length required, speed requirements, and plant location..."
                    value={formData.msg}
                    onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-[#dfe6f1] bg-[#f7f9fd] text-[#0f1b33] focus:outline-none focus:border-[#1d5fd6] focus:ring-4 focus:ring-[#1d5fd6]/15 transition-all resize-y"
                  />
                </div>

                {/* Submit button - sends enquiry directly to WhatsApp */}
                <button
                  type="submit"
                  className="w-full btn-sheen py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-base shadow-[0_12px_28px_rgba(37,211,102,0.35)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>Send Quote Enquiry to WhatsApp (+91 9004450610)</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
