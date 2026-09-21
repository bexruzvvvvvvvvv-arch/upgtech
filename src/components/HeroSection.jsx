import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, Truck, Award, Headphones, ArrowRight, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  const { t, setSelectedCategory } = useApp();
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "ASUS ROG Strix SCAR 18 (2024)",
      subtitle: "Intel Core i9-14900HX • RTX 4090 • 240Hz Nebula Display",
      badge: "Chegirmali Taklif",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=1200&q=80",
      category: "laptops"
    },
    {
      title: "NVIDIA GeForce RTX 4090 SUPRIM X",
      subtitle: "24GB GDDR6X • 4K Extreme Gaming & 3D Render",
      badge: "Top Sotuv",
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=80",
      category: "gpus"
    },
    {
      title: "Apple MacBook Pro 16 M3 Max",
      subtitle: "48GB RAM • 1TB SSD • Liquid Retina XDR",
      badge: "Yangilik 2024",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
      category: "laptops"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="py-6 px-4 max-w-7xl mx-auto space-y-6">
      {/* Hero Banner Carousel */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-gray-950 via-slate-900 to-indigo-950 text-white min-h-[360px] md:min-h-[420px] flex items-center border border-gray-800">
        {/* Background Image overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 transition-all duration-1000 transform scale-105"
          style={{ backgroundImage: `url(${slides[activeSlide].image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent" />

        <div className="relative z-10 p-6 md:p-12 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-wide uppercase backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            {slides[activeSlide].badge}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            {slides[activeSlide].title}
          </h1>

          <p className="text-gray-300 text-sm sm:text-base font-medium">
            {slides[activeSlide].subtitle}
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              onClick={() => {
                setSelectedCategory(slides[activeSlide].category);
                document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-blue-600/40 flex items-center gap-2 transition-all hover:scale-105"
            >
              {t('shopNow')} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 right-6 flex gap-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeSlide === idx ? 'bg-blue-500 w-8' : 'bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Feature Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-900 dark:text-white">{t('warrantyBadge')}</h4>
            <p className="text-[11px] text-gray-500 dark:text-gray-400">Rasmiy servis markazi</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <Truck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-900 dark:text-white">{t('deliveryBadge')}</h4>
            <p className="text-[11px] text-gray-500 dark:text-gray-400">Tezkor yetkazish</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-900 dark:text-white">{t('originalBadge')}</h4>
            <p className="text-[11px] text-gray-500 dark:text-gray-400">Sifat kafolati</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
            <Headphones className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-900 dark:text-white">{t('supportBadge')}</h4>
            <p className="text-[11px] text-gray-500 dark:text-gray-400">Har doim aloqada</p>
          </div>
        </div>
      </div>
    </section>
  );
};
