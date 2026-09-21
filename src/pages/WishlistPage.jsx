import React from 'react';
import { useApp } from '../context/AppContext';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Heart, PackageX } from 'lucide-react';

export const WishlistPage = () => {
  const { wishlist, t, navigateTo } = useApp();

  const savedProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
            <Heart className="w-6 h-6 text-rose-500 fill-current" />
            {t('wishlist')} ({savedProducts.length})
          </h1>
          <p className="text-xs text-gray-400">Siz tanlagan va saqlab qo'yilgan sevimli mahsulotlar ro'yxati</p>
        </div>
      </div>

      {savedProducts.length === 0 ? (
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-12 border border-gray-100 dark:border-gray-800 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-rose-50 dark:bg-rose-900/30 text-rose-500 flex items-center justify-center mx-auto">
            <Heart className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Saralanganlar ro'yxati bo'sh
          </h3>
          <p className="text-xs text-gray-400 max-w-xs mx-auto">
            Mahsulot kartasidagi yurakcha belgisini bosish orqali sevimli tovarlaringizni saqlab qo'yishingiz mumkin.
          </p>
          <button
            onClick={() => navigateTo('catalog')}
            className="px-6 py-2.5 rounded-full bg-blue-600 text-white font-bold text-xs"
          >
            Katalogga o'tish
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      )}
    </div>
  );
};
