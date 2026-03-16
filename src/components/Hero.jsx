import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a1a] px-4">
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold text-white mb-8"
        >
          Lucky Bear Casino
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed"
        >
          Испытайте новый стандарт качества в Лаки Бир Казино.<br />
          Только лицензионные игровые автоматы LuckyBear Casino и<br />
          честные выплаты на официальном сайте LuckyBear.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="https://lbgame777.xyz/2xn84Y"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-4 rounded-md font-bold text-lg transition-all inline-block"
          >
            ОТКРЫТЬ СЛОТЫ
          </a>
        </motion.div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Hero;
