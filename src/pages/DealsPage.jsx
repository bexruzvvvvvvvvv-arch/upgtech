import React from 'react';
import { useApp } from '../context/AppContext';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Flame, Tag, Clock, Gift } from 'lucide-react';

export const DealsPage = () => {
  const { t, formatPrice } = useApp();

  const discountedProducts = products.filter((p) => p.oldPrice);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Header Promo Banner */}
      <div className="relative rounded-3xl bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-700 text-white p-8 md:p-12 overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-black uppercase tracking-wider backdrop-blur-md">
            <Flame className="w-4 h-4 text-amber-300" />
            Chegirmali Aksiyalar
          </div>
          <h1 className="text-3xl sm:text-4xl font-black">{t('dealsPageTitle')}</h1>
          <p className="text-sm text-purple-100">{t('dealsPageSub')}</p>
          <div className="pt-2 flex items-center gap-3">
            <div className="bg-white text-gray-900 px-4 py-2 rounded-2xl font-black text-sm flex items-center gap-2">
              <Tag className="w-4 h-4 text-rose-600" /> Promokod: UPG2026
            </div>
            <span className="text-xs text-purple-200">(-10% qo'shimcha chegirma)</span>
          </div>
        </div>
      </div>

      {/* Discounted Products Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
            <Gift className="w-5 h-5 text-rose-500" />
            Aksiyadagi Barcha Mahsulotlar ({discountedProducts.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {discountedProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </div>
  );
};
