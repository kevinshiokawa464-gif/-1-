import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      q: "Как начать игру в Lucky Bear Casino?",
      a: "Всё просто! Нажмите кнопку 'Регистрация', заполните короткую форму и подтвердите свой аккаунт. После этого вам станут доступны все игровые автоматы и бонусы нашего клуба."
    },
    {
      q: "Какие бонусы доступны новым игрокам?",
      a: "Мы предлагаем щедрый приветственный пакет: до +600% на первые депозиты. Также регулярно проводятся турниры и акции с ценными призами для всех участников."
    },
    {
      q: "Как быстро выводятся выигрыши?",
      a: "Финансовый отдел обрабатывает заявки круглосуточно. На электронные и криптокошельки средства поступают в течение 15-30 минут, на банковские карты — до нескольких часов в зависимости от банка."
    },
    {
      q: "Есть ли у вас мобильное приложение?",
      a: "Наш сайт полностью адаптирован под мобильные устройства. Вам не нужно скачивать сторонние программы — просто откройте сайт в браузере смартфона и наслаждайтесь игрой."
    },
    {
      q: "Безопасно ли играть на реальные деньги?",
      a: "Безусловно. Мы используем сертифицированные ГСЧ (генераторы случайных чисел) и современные протоколы безопасности SSL для защиты ваших транзакций и персональных данных."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter"
          >
            ЧАСТЫЕ <span className="text-blue-500 italic">ВОПРОСЫ</span>
          </motion.h2>
          <p className="text-slate-400 font-medium">Всё, что вам нужно знать о работе нашего сервиса в одном месте.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all"
            >
              <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center">
                    <HelpCircle size={20} className="text-blue-500" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">{faq.q}</h3>
                </div>
                <ChevronDown size={24} className="text-slate-500 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-8 pb-8 pt-0">
                <p className="text-slate-400 leading-relaxed font-medium pl-14">
                  {faq.a}
                </p>
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
