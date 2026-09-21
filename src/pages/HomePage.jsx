import React from 'react';
import { useApp } from '../context/AppContext';
import { HeroSection } from '../components/HeroSection';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { ArrowRight, Sparkles, Flame, ShieldCheck, Truck, Headphones, Award } from 'lucide-react';

export const HomePage = () => {
  const { t, navigateTo, setSelectedCategory } = useApp();

  const featuredProducts = products.filter((p) => p.isHit || p.isNew).slice(0, 6);

  const categoriesList = [
    { id: 'laptops', titleKey: 'laptops', icon: '💻', count: '14+ model' },
    { id: 'desktops', titleKey: 'desktops', icon: '🖥️', count: '8+ model' },
    { id: 'gpus', titleKey: 'gpus', icon: '⚡', count: '12+ model' },
    { id: 'cpus', titleKey: 'cpus', icon: '🔲', count: '10+ model' },
    { id: 'monitors', titleKey: 'monitors', icon: '🖥️', count: '9+ model' },
    { id: 'peripherals', titleKey: 'peripherals', icon: '⌨️', count: '25+ model' },
    { id: 'audio', titleKey: 'audio', icon: '🎧', count: '15+ model' },
    { id: 'storage', titleKey: 'storage', icon: '💾', count: '18+ model' },
  ];

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Banner Section */}
      <HeroSection />

      {/* Category Cards Showcase */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-amber-500" />
              {t('categories')}
            </h2>
            <p className="text-xs text-gray-400">Kerakli bo'limni tanlang va o'zingizga mos texnikani toping</p>
          </div>
          <button
            onClick={() => {
              setSelectedCategory('all');
              navigateTo('catalog');
            }}
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            Barchasi <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {categoriesList.map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                navigateTo('catalog');
              }}
              className="p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer text-center group"
            >
              <div className="text-3xl mb-2 group-hover:scale-125 transition-transform">
                {cat.icon}
              </div>
              <h4 className="text-xs font-bold text-gray-900 dark:text-white truncate">
                {t(cat.titleKey)}
              </h4>
              <span className="text-[10px] text-gray-400 font-medium block mt-0.5">
                {cat.count}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
              <Flame className="w-6 h-6 text-rose-500" />
              TOP Sotuvdagi Texnikalar
            </h2>
            <p className="text-xs text-gray-400">Eng ko'p xarid qilinayotgan va yuqori baholangan mahsulotlar</p>
          </div>
          <button
            onClick={() => navigateTo('catalog')}
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            Katalogga o'tish <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>
    </div>
  );
};
