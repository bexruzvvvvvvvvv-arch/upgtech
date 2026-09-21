import React from 'react';
import { useApp } from '../context/AppContext';
import { Cpu, PhoneCall, MapPin, Mail, Send, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  const { t, navigateTo } = useApp();

  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800 pt-12 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <div
            onClick={() => navigateTo('home')}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="text-lg font-black text-white tracking-wider">UPG TECH</span>
          </div>
          <p className="text-xs leading-relaxed text-gray-400">
            {t('footerDesc')}
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://t.me"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-gray-800 hover:bg-blue-600 text-white flex items-center justify-center transition-colors"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-gray-800 hover:bg-rose-600 text-white flex items-center justify-center transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-gray-800 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation Pages */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Bo'limlar</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => navigateTo('home')} className="hover:text-blue-400 transition-colors">
                {t('home')}
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('catalog')} className="hover:text-blue-400 transition-colors">
                {t('catalog')}
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('pc-builder')} className="hover:text-blue-400 transition-colors">
                {t('pcBuilderNav')}
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('deals')} className="hover:text-blue-400 transition-colors">
                {t('deals')}
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('compare')} className="hover:text-blue-400 transition-colors">
                {t('compareNav')}
              </button>
            </li>
          </ul>
        </div>

        {/* User & Help Pages */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Yordam va Mijozlar</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => navigateTo('faq')} className="hover:text-blue-400 transition-colors">
                {t('faqNav')}
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('blog')} className="hover:text-blue-400 transition-colors">
                {t('blogNav')}
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('reviews')} className="hover:text-blue-400 transition-colors">
                {t('reviewsNav')}
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('orders')} className="hover:text-blue-400 transition-colors">
                {t('myOrders')}
              </button>
            </li>
            <li>
              <button onClick={() => navigateTo('warranty')} className="hover:text-blue-400 transition-colors">
                {t('warrantyNav')}
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">{t('contactUs')}</h4>
          <ul className="space-y-2.5 text-xs">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <span>{t('addressText')}</span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-blue-500 shrink-0" />
              <span>+998 (71) 200-00-00</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-500 shrink-0" />
              <span>support@upgtech.uz</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        <p>© 2026 UPG TECH. {t('allRightsReserved')}</p>
      </div>
    </footer>
  );
};
