import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Gift, Trophy, Smartphone, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Гарантия Безопасности",
      desc: "Ваши данные под защитой современных алгоритмов шифрования и строгой политики конфиденциальности.",
      icon: <Shield className="text-blue-500" />,
      color: "from-blue-600/20 to-transparent"
    },
    {
      title: "Моментальное Пополнение",
      desc: "Депозиты зачисляются в одно мгновение — играйте сразу после транзакции без лишних ожиданий.",
      icon: <Zap className="text-amber-500" />,
      color: "from-amber-600/20 to-transparent"
    },
    {
      title: "Бонусная Система",
      desc: "Уникальные приветственные пакеты и регулярные кэшбэки для активных участников нашего сообщества.",
      icon: <Gift className="text-purple-500" />,
      color: "from-purple-600/20 to-transparent"
    },
    {
      title: "Лицензионный Софт",
      desc: "Сотрудничаем только с проверенными провайдерами, обеспечивая честный RTP и прозрачность каждой ставки.",
      icon: <Trophy className="text-emerald-500" />,
      color: "from-emerald-600/20 to-transparent"
    },
    {
      title: "Мобильная Версия",
      desc: "Полная совместимость со всеми гаджетами — наслаждайтесь любимыми слотами прямо в вашем браузере.",
      icon: <Smartphone className="text-sky-500" />,
      color: "from-sky-600/20 to-transparent"
    },
    {
      title: "Выплаты 24/7",
      desc: "Наша финансовая служба работает без перерывов, чтобы вы могли получить выигрыш в любое время.",
      icon: <Clock className="text-rose-500" />,
      color: "from-rose-600/20 to-transparent"
    }
  ];

  return (
    <section id="преимущества" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase"
          >
            ПОЧЕМУ ВЫБИРАЮТ <span className="text-blue-500 italic">LUCKY BEAR?</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-[32px] bg-gradient-to-br ${feature.color} border border-white/5 backdrop-blur-sm group hover:border-blue-500/30 transition-all`}
            >
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
