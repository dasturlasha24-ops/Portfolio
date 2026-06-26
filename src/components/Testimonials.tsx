/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 relative">
      
      {/* Background decoration */}
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-mono text-indigo-300 font-semibold tracking-wider uppercase bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20">
            Mijozlarimiz fikrlari
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-4">
            Ishonch va Hamkorlik
          </h2>
          <p className="text-gray-300 font-light mt-4">
            Birgalikda yirik muvaffaqiyatlarga erishgan hamkorlarimiz va mijozlarimizning samimiy fikrlari. Biznesingizni keyingi darajaga olib chiqamiz!
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              id={`testimonials-card-${test.id}`}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between relative group"
            >
              
              {/* Quote icon watermark */}
              <div className="absolute top-6 right-6 text-white/5 group-hover:text-fuchsia-500/10 transition-colors pointer-events-none">
                <Quote size={40} />
              </div>

              {/* Star rating and review content */}
              <div className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-fuchsia-400 text-fuchsia-400" />
                  ))}
                </div>

                <p className="text-gray-300 text-sm font-light leading-relaxed italic">
                  "{test.text}"
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center space-x-3.5 pt-6 border-t border-white/10 mt-6">
                {/* Initials avatar with gradient */}
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${test.avatarColor} flex items-center justify-center font-display font-bold text-white text-sm shadow-md`}>
                  {test.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold text-white">
                    {test.author}
                  </h4>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">
                    {test.role}, <span className="text-gray-400">{test.company}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
