/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  Bot, 
  LayoutDashboard, 
  Smartphone, 
  Check, 
  ArrowRight, 
  Clock, 
  DollarSign 
} from 'lucide-react';
import { Service } from '../types';
import { SERVICES } from '../data';

// Map icon strings to React Nodes
const serviceIconMap: { [key: string]: React.ReactNode } = {
  Globe: <Globe size={22} className="text-indigo-400" />,
  Bot: <Bot size={22} className="text-fuchsia-400" />,
  LayoutDashboard: <LayoutDashboard size={22} className="text-cyan-400" />,
  Smartphone: <Smartphone size={22} className="text-indigo-400" />
};

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {

  const handleServiceSelect = (title: string) => {
    onSelectService(title);
    
    // Smooth scroll to contact
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 relative">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 w-[250px] h-[250px] bg-indigo-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-mono text-indigo-300 font-semibold tracking-wider uppercase bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20">
            Nimalar qila olaman?
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-4">
            Kompaniyangiz uchun Raqamli Xizmatlar
          </h2>
          <p className="text-gray-300 font-light mt-4">
            Biznesingizni keyingi bosqichga olib chiqadigan professional xizmatlar to'plami. Har bir loyiha o'ziga xos dizayn va kuchli texnik tuzilishga ega bo'ladi.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((srv, index) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              id={`services-card-${srv.id}`}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              
              <div className="space-y-6">
                
                {/* Card Title & Icon */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900/95 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                      {serviceIconMap[srv.iconName]}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {srv.title}
                      </h3>
                      <span className="text-xs text-gray-400 font-mono">Xizmat ID: #{srv.id}</span>
                    </div>
                  </div>

                  {/* Price Tag badge */}
                  <div className="text-right">
                    <div className="text-xs text-gray-400 font-mono">Boshlang'ich narxi</div>
                    <div className="text-lg font-display font-extrabold text-fuchsia-400">{srv.basePrice} dan</div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  {srv.detailedDescription}
                </p>

                {/* Service Features checklist */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono uppercase text-gray-400 tracking-wider font-semibold">Ushbu narxga nimalar kiradi:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {srv.popularFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs">
                        <Check size={14} className="text-fuchsia-400 mt-0.5 shrink-0" />
                        <span className="text-gray-300 font-light">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action and Timing metadata */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-1.5 text-xs text-gray-400 font-mono self-start sm:self-auto">
                  <Clock size={12} />
                  <span>Bitish muddati: </span>
                  <span className="text-white font-medium">{srv.deliveryTime}</span>
                </div>

                <button
                  onClick={() => handleServiceSelect(srv.title)}
                  id={`services-action-${srv.id}`}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 text-xs text-gray-300 hover:text-indigo-300 hover:bg-white/10 font-semibold flex items-center justify-center space-x-1.5 transition-all duration-300"
                >
                  <span>Murojaat qilish</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Simple vs Premium Pricing comparison */}
        <div className="mt-20 border-t border-white/10 pt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono text-fuchsia-300 font-semibold tracking-wider uppercase bg-fuchsia-500/10 px-4 py-2 rounded-full border border-fuchsia-500/20 animate-pulse">
              Oddiy vs Premium Loyihalar Solishtiruvi
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-4">
              Qaysi tarif sizga mos keladi?
            </h3>
            <p className="text-gray-300 text-sm font-light mt-2">
              Sizning ehtiyojlaringiz va byudjetingizga qarab loyihani eng maqbul ko'rinishda ishlab chiqamiz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Simple Project Card */}
            <div className="bg-[#030712]/40 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-display font-extrabold text-white">Oddiy Loyihalar</h4>
                    <p className="text-xs text-gray-400 font-mono mt-1">Startap va kichik loyihalar uchun</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl font-mono text-xs text-gray-300">
                    Soddalashtirilgan
                  </div>
                </div>

                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl sm:text-4xl font-display font-extrabold text-white">$150 - $300</span>
                  <span className="text-xs text-gray-400 font-mono">dan boshlab</span>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                  Tez fursatda ishga tushadigan, tayyor andozalar (templates) asosida optimallashtirilgan va asosiy funksiyalarni o'z ichiga olgan toza loyihalar. Kichik biznes yoki endigina boshlanayotgan g'oyalar uchun ideal tanlov.
                </p>

                <div className="space-y-3 pt-2 font-mono text-xs text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-indigo-400 shrink-0" />
                    <span>Tezkor bitish muddati: ~ 3-7 kun</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-indigo-400 shrink-0" />
                    <span>Standart chiroyli va qulay interfeys</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-indigo-400 shrink-0" />
                    <span>Barcha telefonlarda to'liq moslashuv (Responsive)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-indigo-400 shrink-0" />
                    <span>Birlamchi aloqa formalari va ma'lumotlar</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={() => handleServiceSelect('Web-sayt')}
                  className="w-full py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 text-xs text-gray-300 hover:text-indigo-300 hover:bg-white/10 font-bold transition-all cursor-pointer"
                >
                  Oddiy Loyiha Tanlash
                </button>
              </div>
            </div>

            {/* Premium Project Card */}
            <div className="bg-[#030712]/60 border border-fuchsia-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group shadow-2xl shadow-fuchsia-500/5">
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-fuchsia-500/10 rounded-full filter blur-xl pointer-events-none" />
              
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-display font-extrabold text-white flex items-center space-x-2">
                      <span>Premium Loyihalar</span>
                      <span className="text-[10px] font-mono tracking-wider font-extrabold text-fuchsia-400 uppercase bg-fuchsia-500/10 px-2 py-0.5 rounded-md border border-fuchsia-500/20">
                        Ommabop
                      </span>
                    </h4>
                    <p className="text-xs text-fuchsia-400 font-mono mt-1">Eksklyuziv dizayn & ilg'or tizimlar</p>
                  </div>
                </div>

                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl sm:text-4xl font-display font-extrabold text-fuchsia-400">$400 - $1000+</span>
                  <span className="text-xs text-gray-400 font-mono">dan boshlab</span>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                  Dizayni 100% noldan (Figma) tayyorlanadigan, eng so'nggi animatsiyalar bilan bezatilgan, murakkab boshqaruv panellari (CRM) va Click/Payme to'lov tizimlariga ega bo'lgan o'ta mukammal va xavfsiz tizimlar.
                </p>

                <div className="space-y-3 pt-2 font-mono text-xs text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-fuchsia-400 shrink-0" />
                    <span>Muddati: ~ 10-25 kun (Katta loyihalar)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-fuchsia-400 shrink-0" />
                    <span>Eksklyuziv dizayn, harakatlar va animatsiyalar</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-fuchsia-400 shrink-0" />
                    <span>Murakkab mantiq, admin panel va to'liq boshqaruv</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={14} className="text-fuchsia-400 shrink-0" />
                    <span>To'lov tizimlari va avtomatlashtirilgan SMS/Telegram integratsiyalari</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <button
                  onClick={() => handleServiceSelect('CRM/SaaS')}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 hover:from-indigo-400 hover:via-purple-400 hover:to-fuchsia-400 text-white font-bold text-xs shadow-xl shadow-indigo-500/10 active:scale-[0.99] transition-all cursor-pointer"
                >
                  Premium Loyiha Tanlash
                </button>
              </div>
            </div>
          </div>

          {/* Contact notice */}
          <div className="mt-12 text-center max-w-2xl mx-auto px-4">
            <p className="text-xs sm:text-sm font-light text-gray-400 italic bg-[#030712]/60 border border-white/10 rounded-2xl p-4 leading-relaxed">
              * <span className="text-white font-medium">Muhim eslatma:</span> Ushbu tariflar va smotalar loyihaning umumiy yo'nalishini belgilash uchun taxminiy ko'rsatilgan. <span className="text-fuchsia-400 font-semibold font-mono">Qolgan barcha to'liq va batafsil ma'lumotlar men bilan bog'langanda sizga batafsil taqdim etiladi.</span> Biznesingizga mos keladigan maxsus imkoniyatlarni bevosita muzokarada kelishib olamiz!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
