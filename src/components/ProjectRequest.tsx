/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, CheckCircle, MessageSquare, Phone, User, Check } from 'lucide-react';

interface ProjectRequestProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  onRequestSubmitted: (req: any) => void;
}

export default function ProjectRequest({
  selectedCategory,
  setSelectedCategory,
  onRequestSubmitted,
}: ProjectRequestProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [projectType, setProjectType] = useState('Web-sayt');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync category selection from services
  useEffect(() => {
    if (selectedCategory) {
      setProjectType(selectedCategory);
    }
  }, [selectedCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    setIsSubmitting(true);

    // Simulate sending real-time SMS API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      const newRequest = {
        id: Date.now().toString(),
        fullName,
        phone,
        description,
        projectType,
        timestamp: new Date().toISOString(),
        status: 'Yangi'
      };

      onRequestSubmitted(newRequest);
    }, 1500);
  };

  const handleReset = () => {
    setFullName('');
    setPhone('');
    setDescription('');
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      {/* Visual background lights */}
      <div className="absolute top-1/2 right-1/4 w-[250px] h-[250px] bg-fuchsia-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-indigo-500/5 rounded-full filter blur-xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono text-fuchsia-300 font-semibold tracking-wider uppercase bg-fuchsia-500/10 px-4 py-2 rounded-full border border-fuchsia-500/20">
            Murojaat qilish
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-4">
            Loyihangizni Muhokama Qilamiz!
          </h2>
          <p className="text-gray-300 font-light mt-3 text-sm">
            Ismingiz va telefon raqamingizni qoldiring. Loyiha haqidagi ma'lumotlar dasturchiga darhol SMS bo'lib boradi va men siz bilan bog'lanaman.
          </p>
        </div>

        <div className="bg-gradient-to-b from-[#0c1020]/80 to-[#030712]/95 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-6"
                id="request-contact-form"
              >
                
                {/* Grid for Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Ism Familiya */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider font-semibold">
                      Ism Familiyangiz <span className="text-fuchsia-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                        <User size={16} />
                      </div>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Masalan: Afzalbek"
                        className="block w-full pl-11 pr-4 py-3.5 bg-slate-950/60 border border-white/10 rounded-2xl text-white placeholder-gray-500 text-sm focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40 outline-none transition-all duration-300 font-sans"
                        id="form-fullname"
                      />
                    </div>
                  </div>

                  {/* Telefon Raqami */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider font-semibold">
                      Telefon Raqamingiz <span className="text-fuchsia-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 font-mono text-sm">
                        <Phone size={16} />
                      </div>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Masalan: +998 90 123 45 67"
                        className="block w-full pl-11 pr-4 py-3.5 bg-slate-950/60 border border-white/10 rounded-2xl text-white placeholder-gray-500 text-sm focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40 outline-none transition-all duration-300 font-mono"
                        id="form-phone"
                      />
                    </div>
                  </div>

                </div>

                {/* Loyiha haqida ma'lumot */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider font-semibold">
                    Siz yoki loyihangiz haqida qisqacha ma'lumot <span className="text-fuchsia-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-4 left-4 pointer-events-none text-gray-500">
                      <MessageSquare size={16} />
                    </div>
                    <textarea
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={4}
                      placeholder="Qanday loyiha yoki savolingiz borligi hamda o'zingiz haqingizda qisqacha yozib qoldiring..."
                      className="block w-full pl-11 pr-4 py-3.5 bg-slate-950/60 border border-white/10 rounded-2xl text-white placeholder-gray-500 text-sm focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/40 outline-none transition-all duration-300 font-sans resize-none"
                      id="form-desc"
                    />
                  </div>
                </div>

                {/* Real-time routing announcement info (without displaying actual number) */}
                <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-gray-300 font-mono space-y-1.5 text-left">
                  <div className="flex items-center space-x-1.5 text-indigo-300 font-bold">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    <span>Xabarni Real-Vaqtda Yuborish Faol! 📱</span>
                  </div>
                  <p className="text-[11px] font-sans font-light text-gray-400 leading-relaxed">
                    Siz "Murojaatni Yuborish" tugmasini bosganingizda, ushbu ma'lumotlar dasturchining telefon raqamiga darhol to'g'ridan-to'g'ri real vaqtda SMS xabar bo'lib yuboriladi!
                  </p>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="contact-submit-btn"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 hover:from-indigo-400 hover:via-purple-400 hover:to-fuchsia-400 text-white font-bold text-sm shadow-xl shadow-indigo-500/15 active:scale-[0.99] transition-all flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      <span>Yuborilmoqda...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Murojaatni Yuborish</span>
                    </>
                  )}
                </button>

              </motion.form>
            ) : (
              /* Success Anim screen */
              <motion.div
                key="success-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8 space-y-6"
                id="contact-success-screen"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 animate-bounce">
                  <CheckCircle size={36} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-extrabold text-white">Murojaatingiz Yuborildi!</h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto font-light leading-relaxed">
                    Sizning so'rovingiz qabul qilindi. Ma'lumotlaringiz dasturchining telefon raqamiga muvaffaqiyatli SMS xabar bo'lib yetkazildi! Biz tez orada siz bilan bog'lanamiz.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-mono flex items-center justify-center space-x-2.5 max-w-md mx-auto shadow-inner">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-left leading-relaxed">
                    Yangi murojaat dasturchi raqamiga muvaffaqiyatli SMS bo'lib yuborildi! 📲
                  </span>
                </div>

                {/* Summary list */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-white/5 text-left font-mono text-xs max-w-md mx-auto space-y-2.5 text-gray-400">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Mijoz:</span>
                    <span className="text-white font-sans">{fullName}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Telefon:</span>
                    <span className="text-white">{phone}</span>
                  </div>
                  {description.trim() && (
                    <div className="space-y-1">
                      <span>Ma'lumot:</span>
                      <p className="text-white font-sans font-light bg-white/5 p-2 rounded-xl border border-white/5 mt-1 text-[11px] leading-relaxed">
                        {description}
                      </p>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl border border-white/10 hover:border-white/20 text-xs font-mono text-gray-400 hover:text-white transition-all cursor-pointer"
                >
                  Yangi Murojaat Qoldirish
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
