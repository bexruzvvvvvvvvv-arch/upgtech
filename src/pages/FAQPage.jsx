import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { HelpCircle, ChevronDown, ShieldCheck, Truck, CreditCard } from 'lucide-react';

export const FAQPage = () => {
  const { t } = useApp();
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Yetkazib berish qancha vaqt oladi va narxi qancha?",
      a: "Toshkent shahri bo'ylab yetkazib berish 24 soat ichida mutlaqo BEPUL amalga oshiriladi. O'zbekistonning boshqa viloyatlariga esa 1-2 kun ichida kuryerlik xizmati orqali topshiriladi."
    },
    {
      q: "Muddatli to'lov (Rassrochka) xizmati mavjudmi?",
      a: "Ha! Siz Uzum Nasiya, Anorbank va Click orqali boshlang'ich to'lovsiz 3, 6 va 12 oyga bo'lib to'lash xizmatidan foydalanishingiz mumkin."
    },
    {
      q: "Mahsulotlarga qancha muddat kafolat beriladi?",
      a: "Do'konimizdagi barcha noutbuklar va o'yin kompyuterlariga 1 yildan 3 yilgacha to'liq rasmiy kafolat beriladi. Kafolat muddati davomida servis xizmati bepul."
    },
    {
      q: "Qanday to'lov usullari mavjud?",
      a: "Biz CLICK, PAYME, UZUM BANK kartalari hamda mahsulotni kuryerdan qabul qilib olganda NAQD PUL yoki Uzcard/Humokarta orqali to'lovlarni qabul qilamiz."
    },
    {
      q: "Mahsulot ma'qul kelmasa almashtirib beriladimi?",
      a: "O'zbekiston Respublikasi iste'molchilar huquqlarini himoya qilish qonuniga muvofiq, 14 kun ichida zavod nosozligi aniqlansa almashtirib beriladi."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <div className="text-center space-y-2">
        <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 flex items-center justify-center mx-auto mb-2">
          <HelpCircle className="w-7 h-7" />
        </div>
        <h1 className="text-3xl font-black text-gray-900 dark:text-white">{t('faqTitle')}</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400">{t('faqSub')}</p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm transition-all"
          >
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full p-5 text-left flex justify-between items-center gap-4 text-sm font-bold text-gray-900 dark:text-white"
            >
              <span>{faq.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
                  openIdx === idx ? 'rotate-180 text-blue-500' : ''
                }`}
              />
            </button>
            {openIdx === idx && (
              <div className="px-5 pb-5 text-xs text-gray-500 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-3">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
