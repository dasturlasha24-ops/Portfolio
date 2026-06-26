/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Send, Instagram, MessageCircle, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    // Show current local time in Uzbekistan (UTC+5)
    const updateUzTime = () => {
      const now = new Date();
      // Adjust to UTC+5
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const uzTime = new Date(utc + 3600000 * 5);
      setTime(uzTime.toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };

    updateUzTime();
    const interval = setInterval(updateUzTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#020617] pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      
      {/* Visual background subtle grid mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 flex items-center justify-center font-display font-extrabold text-white">
                A
              </div>
              <div>
                <span className="font-display font-extrabold tracking-tight text-white text-base">Afzalbek</span>
                <span className="text-indigo-400 text-[10px] block font-mono -mt-1 font-semibold">Dasturchi</span>
              </div>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm font-light max-w-sm mx-auto md:mx-0 leading-relaxed">
              Biznesingizni avtomatlashtirish, sotuvlarni oshirish va brend obro'sini ko'tarish uchun premium dizayn va mukammal arxitekturada kod yozaman.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-3 font-mono text-xs">
            <span className="text-gray-400 uppercase tracking-widest font-bold text-[10px]">Toshkent, O'zbekiston</span>
            <div className="flex flex-col space-y-2 items-center md:items-start text-gray-400">
              <a href="#about" className="hover:text-indigo-300 transition-colors">Men haqimda</a>
              <a href="#services" className="hover:text-indigo-300 transition-colors">Xizmatlar & Narxlar</a>
              <a href="#contact" className="hover:text-indigo-300 transition-colors">Murojaat qilish</a>
            </div>
          </div>

          {/* Real-time Uzbekistan Clock and Social Icons */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end space-y-4 text-center md:text-right font-mono">
            <div>
              <span className="text-gray-500 text-[10px] uppercase block">Toshkent vaqti (GMT+5)</span>
              <span className="text-sm font-semibold text-indigo-300 bg-[#030712] border border-white/10 px-3 py-1.5 rounded-xl block mt-1.5 shadow-inner">
                {time || '00:00:00'}
              </span>
            </div>

            {/* Social channels bar */}
            <div className="flex space-x-2 pt-2">
              {[
                { icon: <Send size={14} className="rotate-[320deg]" />, href: 'https://t.me/wqao7777', label: 'Telegram' },
                { icon: <Instagram size={14} />, href: 'https://instagram.com/_afzalshoox_', label: 'Instagram' },
                { icon: <MessageCircle size={14} />, href: 'https://wa.me/998907921314', label: 'WhatsApp' },
                { icon: <Youtube size={14} />, href: '#', label: 'YouTube' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href === '#' ? undefined : "_blank"}
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-indigo-300 hover:border-indigo-500/30 hover:bg-white/10 transition-all duration-200"
                  title={social.label === 'YouTube' ? 'YouTube (Tez kunda)' : social.label}
                  id={`footer-social-${social.label.toLowerCase()}`}
                  onClick={(e) => {
                    if (social.href === '#') {
                      e.preventDefault();
                      alert('YouTube kanalimiz tez kunda ishga tushadi!');
                    }
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-gray-500">
          <p>© {new Date().getFullYear()} Afzalbek Portfolio. Barcha huquqlar himoyalangan.</p>
          <div className="flex items-center space-x-1.5">
            <span>Ushbu dastur</span>
            <Heart size={10} className="text-rose-500 fill-rose-500 animate-pulse" />
            <span>bilan Afzalbek uchun maxsus tayyorlandi</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
