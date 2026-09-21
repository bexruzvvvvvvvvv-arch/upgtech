import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, CheckCircle2, RotateCcw, Wrench, HelpCircle } from 'lucide-react';

export const WarrantyPage = () => {
  const { t } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center mx-auto mb-2">
          <ShieldCheck className="w-7 h-7" />
        </div>
        <h1 className="text-3xl font-black text-gray-900 dark:text-white">
          {t('warrantyTitle')}
        </h1>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {t('warrantySub')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-gray-900 dark:text-white">14 Kunlik Qaytarish Huquqi</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            Mahsulotda zavod defekti yoki nosozlik aniqlansa, 14 kun ichida almashtirib beriladi yoki mablag' qaytariladi.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center">
            <Wrench className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-gray-900 dark:text-white">Bepul Texnik Ko'rik</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            Bizdan xarid qilingan o'yin kompyuterlari va noutbuklar uchun 3 yil davomida profilaktika va changdan tozalash bepul.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 flex items-center justify-center">
            <RotateCcw className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-gray-900 dark:text-white">Asl Ehtiyot Qismlari</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            Barcha ta'mirlash va profilaktika ishlarida faqat ishlab chiqaruvchining sertifikatlangan asl ehtiyot qismlari ishlatiladi.
          </p>
        </div>
      </div>
    </div>
  );
};
