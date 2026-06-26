/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  Eye, 
  ShieldCheck, 
  Maximize2, 
  Cpu, 
  Database, 
  Terminal, 
  Workflow,
  Sparkles
} from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'frontend' | 'backend' | 'database' | 'tools'>('frontend');

  const principles = [
    {
      icon: <Eye className="text-fuchsia-400" size={24} />,
      title: 'Estetika va Dizayn',
      description: 'Loyiha nafaqat ishlashi, balki chiroyli bo\'lishi kerak. Premium va ko\'zga yoqimli ranglar bilan estetik dizayn yarataman.'
    },
    {
      icon: <Zap className="text-indigo-400" size={24} />,
      title: 'Yuqori Tezlik',
      description: 'Sayt va tizimlarning yuklanish tezligini maksimal optimallashtiraman. Har bir soniya mijozingiz uchun muhim.'
    },
    {
      icon: <Maximize2 className="text-amber-400" size={24} />,
      title: 'To\'liq Moslashuvchanlik',
      description: 'Mobil qurilmalardan boshlab ulkan monitorlargacha barcha ekran o\'lchamlarida interfeysni mukammal moslashtiraman.'
    },
    {
      icon: <ShieldCheck className="text-blue-400" size={24} />,
      title: 'Xavfsiz va Ishonchli',
      description: 'Dastur kodi va ma\'lumotlar xavfsizligini kafolatlayman. Loyihalaringiz xakerlik hujumlaridan himoyalangan bo\'ladi.'
    }
  ];

  const skillTabs = {
    frontend: [
      { name: 'React / Next.js', level: '95%' },
      { name: 'TypeScript', level: '90%' },
      { name: 'Tailwind CSS v4', level: '100%' },
      { name: 'Motion (Framer)', level: '85%' },
      { name: 'Vite', level: '95%' },
      { name: 'HTML5 & CSS3', level: '100%' }
    ],
    backend: [
      { name: 'Node.js', level: '90%' },
      { name: 'Express.js', level: '95%' },
      { name: 'RESTful API / GraphQL', level: '92%' },
      { name: 'Telegram Bot API', level: '95%' },
      { name: 'JWT & OAuth Auth', level: '88%' }
    ],
    database: [
      { name: 'PostgreSQL', level: '88%' },
      { name: 'MongoDB', level: '90%' },
      { name: 'Prisma ORM / Drizzle', level: '85%' },
      { name: 'Redis Caching', level: '75%' },
      { name: 'Firebase Firestore', level: '85%' }
    ],
    tools: [
      { name: 'Git & GitHub', level: '95%' },
      { name: 'Docker', level: '75%' },
      { name: 'Linux / VPS Server', level: '80%' },
      { name: 'Figma (Design-to-Code)', level: '90%' },
      { name: 'Postman API test', level: '95%' }
    ]
  };

  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-mono text-indigo-300 font-semibold tracking-wider uppercase bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20">
            Kreativlik & Muhandislik
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-4">
            Mening Ishlash Prinsiplarim
          </h2>
          <p className="text-gray-400 font-light mt-4">
            Har bir mijoz uchun shaxsiy yondashuv. Biznes muammolarini optimal, tezkor va estetik jihatdan mukammal kod yozib hal qilaman.
          </p>
        </div>

        {/* Personal Biography Introduction */}
        <div className="mb-20 bg-gradient-to-br from-[#030712]/60 to-[#030712]/30 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden">
          {/* Subtle neon glowing ball behind profile */}
          <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full filter blur-[60px] pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-24 h-24 bg-fuchsia-500/10 rounded-full filter blur-[50px] pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left side: Avatar and Quick Badges */}
            <div className="md:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="relative group">
                {/* Glowing border ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-slate-900 border border-white/25 flex items-center justify-center font-display font-extrabold text-white text-3xl sm:text-4xl shadow-inner select-none">
                  A
                </div>
              </div>
              <div>
                <h4 className="text-lg font-display font-bold text-white">Afzalbek</h4>
                <p className="text-xs font-mono text-indigo-400 mt-1">Full-Stack Dasturchi</p>
                <p className="text-[10px] font-mono text-gray-500 mt-0.5">Namangan, O'zbekiston</p>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping shrink-0" />
                <span>Buyurtmalar uchun ochiq</span>
              </div>
            </div>

            {/* Right side: Personal bio */}
            <div className="md:col-span-8 space-y-5 text-left">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white leading-tight">
                Biznesingizni Avtomatlashtirish va Raqamlashtirish bo'yicha Shaxsiy Hamkoringiz
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                Salom! Mening ismim <span className="text-white font-medium">Afzalbek</span>. Men biznes va shaxsiy brendlar uchun estetik dizaynga ega Premium Web-saytlar, Mobil Ilovalar (Web-to-App) hamda zamonaviy tizimlar yaratuvchi dasturchiman.
              </p>
              <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                Mening maqsadim — shunchaki kod yozish emas, balki sizning biznesingizdagi muammolarni bartaraf etib, daromadingiz oshishiga xizmat qiladigan mahsulot topshirishdir. <span className="text-fuchsia-300 font-semibold">Oddiy loyihalardan</span> boshlab, eng yuqori darajadagi <span className="text-indigo-300 font-semibold">Premium loyihalargacha</span> mukammal sifatda ishlab chiqaman.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-white/10 font-mono text-xs">
                <div className="space-y-1">
                  <span className="text-gray-500 block">Tajriba va uslub:</span>
                  <span className="text-white">3+ yil • Premium sifat & toza kod</span>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-500 block">Tezkor aloqa:</span>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="text-fuchsia-400 font-bold hover:underline flex items-center space-x-1 cursor-pointer text-left"
                  >
                    <span>Murojaat formasi orqali</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2x2 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-20 sm:mb-28">
          {principles.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              id={`about-principle-${index}`}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-indigo-500/40 transition-all duration-300 group hover:translate-y-[-2px] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl pointer-events-none" />
              
              <div className="w-12 h-12 rounded-2xl bg-slate-900/80 border border-white/5 flex items-center justify-center mb-6 shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-display font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Skill Stack Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
              <Sparkles size={12} className="text-indigo-400" />
              <span className="text-[10px] font-mono text-indigo-300 font-semibold uppercase tracking-wider">Texnologiyalar</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Sifatli Dastur Uchun To'liq Qurollanganman
            </h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Doimiy ravishda jahondagi eng zamonaviy va o'ta tez ishlaydigan dasturlash texnologiyalaridan foydalanaman. Bu loyihani kelajakda oson kengaytirish va barqaror ishlashini ta'minlaydi.
            </p>

            {/* Micro details */}
            <div className="space-y-3 font-mono text-xs text-gray-400 pt-4 border-t border-white/10">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                <span>Nafis va tushunarli kod arxitekturasi</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                <span>Har qanday tizimga API ulay olish qobiliyati</span>
              </div>
            </div>
          </div>

          {/* Right tabbed column */}
          <div className="lg:col-span-7">
            <div className="bg-[#030712]/40 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              
              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
                {[
                  { id: 'frontend', label: 'Frontend', icon: <Cpu size={14} /> },
                  { id: 'backend', label: 'Backend', icon: <Terminal size={14} /> },
                  { id: 'database', label: 'Baza', icon: <Database size={14} /> },
                  { id: 'tools', label: 'Asboblar', icon: <Workflow size={14} /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    id={`about-tab-${tab.id}`}
                    className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30'
                        : 'text-gray-400 hover:text-white border border-transparent hover:bg-white/5'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Skills Progress Indicator Bars */}
              <div className="space-y-6">
                {skillTabs[activeTab].map((skill, index) => (
                  <div key={index} id={`about-skill-${activeTab}-${index}`} className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-fuchsia-400">{skill.level}</span>
                    </div>
                    
                    {/* Background Progress track */}
                    <div className="h-2 w-full bg-[#030712]/80 rounded-full overflow-hidden border border-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: skill.level }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
