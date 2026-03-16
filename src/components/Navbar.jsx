import React from 'react';
import { Menu, X, Play, Shield, MessageCircle, Zap, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const mainLink = "https://lbgame777.xyz/2xn84Y";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#hero" className="flex-shrink-0 flex items-center gap-3 group">
              <div className="w-12 h-12 relative">
                <div className="absolute inset-0 bg-blue-500/30 blur-xl rounded-full group-hover:bg-blue-500/50 transition-all"></div>
                <img src="/logo.svg" alt="Lucky Bear Logo" className="w-full h-full object-contain relative z-10 drop-shadow-2xl" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-white leading-none">
                  LUCKY<span className="text-blue-500 italic">BEAR</span>
                </span>
                <span className="text-[10px] text-blue-400 font-bold tracking-[0.2em] uppercase mt-1">Premium Casino</span>
              </div>
            </a>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {['Главная', 'Преимущества', 'Слоты', 'Выплаты', 'FAQ'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-slate-400 hover:text-white px-4 py-2 text-sm font-bold transition-all hover:bg-white/5 rounded-full"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a 
              href={mainLink}
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 rounded-xl text-sm font-bold transition-all border border-slate-800 text-slate-300"
            >
              <MessageCircle size={18} className="text-blue-400" />
              <span>ТГ Бот</span>
            </a>
            <motion.a 
              href={mainLink}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 rounded-xl text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-blue-500/25 border border-white/10"
            >
              Регистрация
            </motion.a>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-slate-950 border-b border-white/5 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {['Главная', 'Преимущества', 'Слоты', 'Выплаты', 'FAQ'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="block text-slate-400 hover:text-white px-4 py-3 text-lg font-bold rounded-xl hover:bg-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-6 flex flex-col gap-4">
                <a href={mainLink} className="flex items-center justify-center gap-3 px-4 py-4 bg-slate-900 rounded-2xl font-bold text-white border border-white/5">
                  <MessageCircle size={22} className="text-blue-400" />
                  Lucky Bear Бот
                </a>
                <a href={mainLink} className="px-4 py-5 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl font-black text-center text-white uppercase tracking-widest shadow-xl shadow-blue-500/20 border border-white/10">
                  Регистрация в Лаки Бир
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
