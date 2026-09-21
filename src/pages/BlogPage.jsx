import React from 'react';
import { useApp } from '../context/AppContext';
import { Newspaper, Calendar, User, ArrowRight } from 'lucide-react';

export const BlogPage = () => {
  const { t } = useApp();

  const articles = [
    {
      id: 1,
      title: "NVIDIA GeForce RTX 4090 va RTX 4080: O'yinlarda Qaysi Biri Ustun?",
      excerpt: "4K o'yinlar va DLSS 3.5 texnologiyasining real sinovlari. Qaysi videokarta sizning ehtiyojingizga mos keladi?",
      date: "2026-09-15",
      author: "UPG Tech Ekspert",
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "2026-Yilda Dasturchilar va 3D Modelchilar Uchun Eng Yaxshi Noutbuklar",
      excerpt: "MacBook Pro M3 Max, ASUS ROG SCAR va Lenovo Legion noutbuklarining taqqoslama benchmark natijalari.",
      date: "2026-09-10",
      author: "Tech Reviewer",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "O'yin Monitorini Tanlashda E'tibor Berish Kerak Bo'lgan 5 Ta Asosiy Omillar",
      excerpt: "IPS vs OLED displeylar, 240Hz yangilanish tezligi va 0.03ms javob vaqti haqida batafsil ma'lumot.",
      date: "2026-09-01",
      author: "Hardware Pro",
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 flex items-center justify-center mx-auto mb-2">
          <Newspaper className="w-7 h-7" />
        </div>
        <h1 className="text-3xl font-black text-gray-900 dark:text-white">{t('blogTitle')}</h1>
        <p className="text-xs text-gray-500 dark:text-gray-400">{t('blogSub')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((art) => (
          <div
            key={art.id}
            className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between"
          >
            <div>
              <img src={art.image} alt={art.title} className="w-full h-48 object-cover" />
              <div className="p-5 space-y-2">
                <div className="flex items-center gap-3 text-[10px] text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {art.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" /> {art.author}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-2">
                  {art.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3">
                  {art.excerpt}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline">
                Batafsil O'qish <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
