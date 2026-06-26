/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Code2, Bot, Cpu, Zap, Star } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
}

export default function Hero({ onStartProject }: HeroProps) {
  const [terminalLineIndex, setTerminalLineIndex] = useState(0);
  const terminalLines = [
    'const dasturchi = new Developer("Afzalbek");',
    'await dasturchi.optimize({ quality: "excellent", speed: "fast" });',
    '// Tayyor stack: React, Node, Express, Telegram, PostgreSQL',
    'dasturchi.buildDreamApp({ clientHappy: true });',
    '>> Loyiha muvaffaqiyatli ishga tushirildi! 🎉'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTerminalLineIndex((prev) => (prev < terminalLines.length ? prev + 1 : prev));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Aesthetic Glow Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-indigo-500/10 rounded-full filter blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full filter blur-[140px] pointer-events-none" />
      
      {/* Clean Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 self-center lg:self-start"
            >
              <Sparkles size={14} className="text-indigo-400 animate-spin" />
              <span className="text-xs font-mono text-indigo-300 font-semibold uppercase tracking-wider">
                Premium Dasturiy Yechimlar
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1.1]"
            >
              <span className="text-white block">Biznesingiz uchun</span>
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent block mt-1 pb-1">
                Premium Sayt & Tizimlar
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed"
            >
              Mening ismim <span className="text-white font-medium">Afzalbek</span>. Men biznes va shaxsiy brendlar uchun estetik dizaynga ega, o'ta tezkor veb-saytlar, Telegram botlar hamda avtomatlashtirilgan CRM tizimlar ishlab chiqaman.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onStartProject}
                id="hero-primary-btn"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 hover:from-indigo-400 hover:to-fuchsia-400 text-white font-semibold text-sm shadow-xl shadow-indigo-500/25 transform active:scale-95 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Loyihani boshlash</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="#services"
                id="hero-secondary-btn"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white font-semibold text-sm border border-white/10 transition-all duration-200 text-center"
              >
                Xizmatlar & Tariflar
              </a>
            </motion.div>

            {/* Micro Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
            >
              <div>
                <span className="block text-2xl sm:text-3xl font-display font-bold text-white">100%</span>
                <span className="text-xs text-gray-400 uppercase font-mono">Sifat kafolati</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-display font-bold text-fuchsia-400">20+</span>
                <span className="text-xs text-gray-400 uppercase font-mono">Bitgan loyihalar</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-display font-bold text-white">24/7</span>
                <span className="text-xs text-gray-400 uppercase font-mono">Texnik Aloqa</span>
              </div>
            </motion.div>

          </div>

          {/* Right Floating Dashboard Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Outer absolute decoration cards */}
            <div className="absolute -top-6 -left-6 bg-[#090d23]/80 border border-white/10 rounded-2xl p-4 shadow-xl flex items-center space-x-3 hidden sm:flex z-20 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Code2 size={20} />
              </div>
              <div>
                <span className="text-xs text-gray-400 block">Dastur kodi</span>
                <span className="text-xs font-semibold text-white font-mono">Clean & Secure Architecture</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-4 bg-[#090d23]/80 border border-white/10 rounded-2xl p-4 shadow-xl flex items-center space-x-3 hidden sm:flex z-20 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400">
                <Zap size={20} className="animate-bounce" />
              </div>
              <div>
                <span className="text-xs text-gray-400 block">Tezlik ko'rsatkichi</span>
                <span className="text-xs font-semibold text-white font-mono">Lighthouse: 99/100</span>
              </div>
            </div>

            {/* Main Animated Code IDE Mockup */}
            <div className="relative glass-panel rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              
              {/* Terminal Titlebar */}
              <div className="bg-[#030712]/80 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-indigo-500" />
                </div>
                <span className="text-xs font-mono text-gray-400">afzalbek_portfolio.ts</span>
                <div className="w-4 h-4" />
              </div>

              {/* IDE Editor Lines */}
              <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed space-y-3 bg-[#030712]/40 min-h-[260px] flex flex-col justify-between">
                <div className="space-y-2">
                  {terminalLines.map((line, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={terminalLineIndex >= idx ? { opacity: 1, x: 0 } : { opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className={`whitespace-pre-wrap ${
                        idx === 4 
                          ? 'text-fuchsia-400 font-semibold border-t border-white/10 pt-2 mt-2' 
                          : idx === 2 
                            ? 'text-gray-500 font-light italic' 
                            : 'text-gray-300'
                      }`}
                    >
                      {line}
                    </motion.div>
                  ))}
                </div>

                {/* Simulated Stack Badge Row */}
                <div className="border-t border-white/10 pt-4 mt-4 flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 text-[10px] uppercase font-semibold border border-indigo-500/20">React</span>
                  <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 text-[10px] uppercase font-semibold border border-purple-500/20">TypeScript</span>
                  <span className="px-2 py-0.5 rounded bg-fuchsia-500/10 text-fuchsia-300 text-[10px] uppercase font-semibold border border-fuchsia-500/20">Node.js</span>
                  <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 text-[10px] uppercase font-semibold border border-indigo-500/20">REST API</span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 text-[10px] uppercase font-semibold border border-blue-500/20">SQL</span>
                </div>

              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
