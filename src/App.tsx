/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ProjectRequest from './components/ProjectRequest';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCategory, setSelectedCategory] = useState<string>('Web-sayt');

  // Navigating to contact form with specific category
  const handleSelectService = (category: string) => {
    setSelectedCategory(category);
    setActiveSection('contact');
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Quick action from Hero to go down to contact
  const handleStartProjectFromHero = () => {
    setActiveSection('contact');
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 flex flex-col relative" id="app-container">
      
      {/* Background Radial Glow highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent filter blur-3xl pointer-events-none" />

      {/* Global Navbar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Layout with Transition Animation */}
      <main className="flex-grow pt-16" id="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key="portfolio-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            id="portfolio-sections-container"
          >
            {/* Hero introduction */}
            <Hero onStartProject={handleStartProjectFromHero} />

            {/* About Afzalbek and Principles */}
            <About />

            {/* Pricing & Service plans */}
            <Services onSelectService={handleSelectService} />

            {/* Simple Contact Form */}
            <ProjectRequest
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              onRequestSubmitted={() => {}}
            />

            {/* Client reviews and quotes */}
            <Testimonials />

          </motion.div>
        </AnimatePresence>
      </main>

      {/* Aesthetic Footer */}
      <Footer />

    </div>
  );
}
