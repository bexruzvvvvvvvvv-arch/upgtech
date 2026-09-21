import React from 'react';
import { useApp } from '../context/AppContext';
import { Cpu, ShieldCheck, Award, Users, Truck, Sparkles, Building2 } from 'lucide-react';

export const AboutPage = () => {
  const { t } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      {/* Header Banner */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-extrabold uppercase tracking-wider">
          {t('aboutUsTitle')}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white leading-tight">
          O'zbekistonda Zamonaviy Kompyuter Texnikasi Dunyosi
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          UPG TECH - 2021-yildan buyon eng so'nggi noutbuklar, kuchli o'yin kompyuterlari, videokartalar hamda aksessuarlarni O'zbekiston bo'ylab eng yaxshi narxlarda yetkazib beruvchi yetakchi do'kondir.
        </p>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center space-y-2 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center mx-auto">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-3xl font-black text-gray-900 dark:text-white">15,000+</h3>
          <p className="text-xs text-gray-400 font-medium">Mamnun Mijozlar</p>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center space-y-2 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-3xl font-black text-gray-900 dark:text-white">100%</h3>
          <p className="text-xs text-gray-400 font-medium">Original Kafolatlangan Texnika</p>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center space-y-2 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 flex items-center justify-center mx-auto">
            <Building2 className="w-6 h-6" />
          </div>
          <h3 className="text-3xl font-black text-gray-900 dark:text-white">5+ Yil</h3>
          <p className="text-xs text-gray-400 font-medium">Bozordagi Tajriba</p>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center space-y-2 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 flex items-center justify-center mx-auto">
            <Truck className="w-6 h-6" />
          </div>
          <h3 className="text-3xl font-black text-gray-900 dark:text-white">24 Soat</h3>
          <p className="text-xs text-gray-400 font-medium">O'zbekiston Bo'ylab Yetkazish</p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-r from-gray-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 md:p-12 space-y-8 border border-gray-800">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-black">Nega Aynan UPG TECH?</h2>
          <p className="text-xs text-gray-400">Biz mijozlarimizga faqat sifatli mahsulot va professional xizmat taklif etamiz</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base">Rasmiy Servis Markazi</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Barcha noutbuk va kompyuterlarimizga 3 yilgacha rasmiy kafolat va texnik ko'rik beriladi.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base">Eksklyuziv Model Va Yig'ishlar</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Eng so'nggi RTX 4090 videokartalari hamda individual suvli sovutishli kompyuterlar yig'ib beriladi.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-base">Professional Konsultatsiya</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Mutaxassislarimiz har bir mijozning ehtiyojiga (O'yin, Montaj, 3D Render, Dasturlash) mos texnologiya tanlashga yordam beradi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
