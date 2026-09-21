import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PhoneCall, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage = () => {
  const { t, showToast } = useApp();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast(t('messageSentSuccess'), 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white">
          {t('contactUsTitle')}
        </h1>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {t('contactUsSub')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Direct Info Cards */}
        <div className="space-y-4">
          <div className="p-5 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase text-gray-400">Manzil</h4>
              <p className="text-xs font-bold text-gray-900 dark:text-white mt-1">
                Toshkent sh., Yunusobod t., Amir Temur ko'chasi 107-uy (Mo'ljal: Metro Minor)
              </p>
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 shrink-0">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase text-gray-400">Telefon / Call Center</h4>
              <p className="text-sm font-bold text-gray-900 dark:text-white mt-1">
                +998 (71) 200-00-00
              </p>
              <p className="text-xs font-semibold text-emerald-600">
                +998 (90) 123-45-67 (Telegram)
              </p>
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase text-gray-400">Ish Vaqti</h4>
              <p className="text-xs font-bold text-gray-900 dark:text-white mt-1">
                Har kuni: 09:00 dan 20:00 gacha (Dam olish kunlarisiz)
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-3xl p-6 md:p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white">
                Xabaringiz Qabul Qilindi!
              </h3>
              <p className="text-xs text-gray-400 max-w-sm mx-auto">
                Tez orada mutaxassislarimiz ko'rsatilgan telefon raqami orqali siz bilan bog'lanishadi.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-blue-600 text-white font-bold text-xs"
              >
                Yangi xabar yuborish
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-base font-extrabold text-gray-900 dark:text-white">
                {t('sendMessage')}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                    {t('fullName')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ismingiz"
                    className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs dark:text-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                    {t('phone')} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+998 90 123 45 67"
                    className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                  Mavzu
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Masalan: Kompyuter yig'ish bo'yicha maslahat"
                  className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs dark:text-white"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                  {t('yourMessage')} *
                </label>
                <textarea
                  rows="4"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Xabaringiz matnini kiriting..."
                  className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="py-3.5 px-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xs shadow-lg shadow-blue-500/30 flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{t('sendMessage')}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
