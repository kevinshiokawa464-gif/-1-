import React from 'react';
import { motion } from 'framer-motion';
import { Play, Zap, Shield, Gift, ChevronRight } from 'lucide-react';

const Hero = () => {
  const mainLink = "https://lbgame777.xyz/2xn84Y";

  return (
    <section id="главная" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      {/* Анимированный фон */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-black mb-8 uppercase tracking-widest"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Бонус +600% новым игрокам 🚀
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
              LUCKY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500 italic">BEAR</span>
              <span className="text-blue-500 block text-3xl md:text-5xl mt-4 tracking-normal font-bold">КАЗИНО ОФИЦИАЛЬНЫЙ САЙТ</span>
            </h1>

            <p className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed font-medium border-blue-600 pl-0">
              Испытайте новый стандарт качества в <span className="text-white">Лаки Бир Казино</span>. 
              Только лицензионные слоты и мгновенные выплаты. 
              Ваш путь к большим выигрышам начинается здесь.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <motion.a 
                href={mainLink}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(37,99,235,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-xl font-black uppercase tracking-tighter flex items-center justify-center gap-3 transition-all group"
              >
                <Play fill="currentColor" size={24} />
                Начать игру
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href={mainLink}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl text-xl font-black uppercase tracking-tighter flex items-center justify-center gap-3 transition-all"
              >
                Регистрация
              </motion.a>
            </div>

            <div className="mt-16 flex items-center gap-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all overflow-x-auto pb-4">
              {['VISA', 'MIR', 'USDT', 'BTC', 'SBP'].map((p) => (
                <span key={p} className="text-2xl font-black text-white italic tracking-tighter shrink-0">{p}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
