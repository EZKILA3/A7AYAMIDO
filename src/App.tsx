import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Dumbbell, Palette, Music, Film, Terminal, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-orange-500 selection:text-white font-sans">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center border-b border-neutral-900/50 backdrop-blur-md sticky top-0 z-50">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-xl tracking-tighter"
        >
          EZKILA3<span className="text-orange-500">.</span>COM
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex space-x-8 text-xs uppercase tracking-[0.2em] text-neutral-500"
        >
          <a href="#work" className="hover:text-orange-500 transition-colors">Projects</a>
          <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors">Connect</a>
        </motion.div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="px-6 pt-20 pb-32 max-w-7xl mx-auto relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-500 text-[10px] uppercase tracking-widest mb-6">
                  Digital Identity v1.0
                </span>
                <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.85] text-white">
                  منور<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">يا ميدو</span>
                </h1>
                <p className="text-xl md:text-2xl text-neutral-400 max-w-xl leading-relaxed mb-10 font-light">
                  A multifaceted creator exploring the intersection of technology, physical mastery, and visual arts.
                </p>

                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: <Terminal size={16} />, label: "Python" },
                    { icon: <Dumbbell size={16} />, label: "Calisthenics" },
                    { icon: <Palette size={16} />, label: "Calligraphy" },
                    { icon: <Film size={16} />, label: "Media" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm">
                      {item.icon}
                      {item.label}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-neutral-800 flex items-center justify-center bg-neutral-900/50 shadow-2xl group">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="font-amiri text-[12rem] md:text-[18rem] font-bold text-orange-500 leading-none select-none group-hover:scale-110 transition-transform duration-700"
                >
                  الأكبر
                </motion.span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bio Section */}
        <section id="about" className="py-32 bg-neutral-900/30 border-y border-neutral-900 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12 leading-tight">
                الدكتور المهندس <br/>
                <span className="text-orange-500">عبدالرحمن بن سمير الأكبر</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-16 text-left">
                <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-orange-500/30 transition-colors">
                  <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-6 flex items-center gap-2">
                    <Terminal size={14} className="text-orange-500" /> Technical Mastery
                  </h3>
                  <ul className="space-y-4 text-neutral-300">
                    <li className="flex justify-between items-center">
                      <span>Python Development</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-800 text-neutral-500">Expert</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>System Architecture</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-800 text-neutral-500">Advanced</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Digital Media Production</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-800 text-neutral-500">Creative</span>
                    </li>
                  </ul>
                </div>

                <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-orange-500/30 transition-colors">
                  <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-6 flex items-center gap-2">
                    <Dumbbell size={14} className="text-orange-500" /> Physical & Artistic
                  </h3>
                  <ul className="space-y-4 text-neutral-300">
                    <li className="flex justify-between items-center">
                      <span>Calisthenics</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-800 text-neutral-500">Mastery</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Arabic Calligraphy</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-800 text-neutral-500">Artisan</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Visual Storytelling</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-800 text-neutral-500">Passionate</span>
                    </li>
                  </ul>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative inline-block"
              >
                <div className="absolute -inset-4 bg-orange-500/10 blur-2xl rounded-full" />
                <p className="text-3xl md:text-5xl font-serif italic text-white relative">
                  "ايه رأيك يا عبدالحميد"
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="p-12 text-center border-t border-neutral-900">
        <p className="text-neutral-600 text-xs tracking-widest uppercase">
          EZKILA3 &copy; 2026 — All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
