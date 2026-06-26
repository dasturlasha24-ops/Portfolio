/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Inbox, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export default function Navbar({
  activeSection,
  setActiveSection,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Bosh sahifa' },
    { id: 'about', label: 'Men haqimda' },
    { id: 'services', label: 'Xizmatlar & Tariflar' },
    { id: 'contact', label: 'Murojaat qilish' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleNavClick('hero')}
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-all duration-300">
              <span className="font-display font-bold text-lg text-white">A</span>
            </div>
            <div>
              <span className="font-display font-bold tracking-tight text-lg text-white group-hover:text-indigo-400 transition-colors">
                Afzalbek
              </span>
              <span className="text-fuchsia-400 text-xs block font-mono -mt-1 font-semibold">
                Dasturchi
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                id={`nav-item-${item.id}`}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-indigo-300 bg-white/10 border border-white/10 shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA button */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => handleNavClick('contact')}
              id="nav-order-cta"
              className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 hover:from-indigo-400 hover:to-fuchsia-400 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 active:scale-95 transition-all duration-200 flex items-center space-x-1.5"
            >
              <Sparkles size={13} className="text-white animate-pulse" />
              <span>Murojaat qilish</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="nav-menu-toggle"
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            id="mobile-nav-drawer"
            className="md:hidden border-t border-white/10 bg-[#020617]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`mobile-nav-${item.id}`}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
                <button
                  onClick={() => handleNavClick('contact')}
                  id="mobile-nav-cta"
                  className="w-full py-3 rounded-xl text-center text-sm font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 text-white flex items-center justify-center space-x-2"
                >
                  <Sparkles size={14} />
                  <span>Murojaat qilish</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
