import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Star, ShoppingCart, Heart, ShieldCheck, Check, Truck, Cpu, HardDrive, Monitor, Zap } from 'lucide-react';

export const ProductDetailModal = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    t,
    lang,
    formatPrice,
    addToCart,
    cart,
    wishlist,
    toggleWishlist,
    setIsCartOpen,
    setIsCheckoutOpen
  } = useApp();

  const [selectedQty, setSelectedQty] = useState(1);

  if (!quickViewProduct) return null;

  const isWishlisted = wishlist.includes(quickViewProduct.id);
  const isInCart = cart.some((item) => item.product.id === quickViewProduct.id);

  const handleBuyNow = () => {
    if (!isInCart) {
      addToCart(quickViewProduct);
    }
    setQuickViewProduct(null);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/70 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden max-h-[90vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Section */}
        <div className="md:w-1/2 bg-gray-50 dark:bg-gray-800/50 p-6 flex flex-col items-center justify-center relative">
          <img
            src={quickViewProduct.image}
            alt={quickViewProduct.name}
            className="w-full max-h-80 object-contain rounded-xl shadow-md"
          />
          <div className="mt-4 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> {quickViewProduct.specs.warranty}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Truck className="w-4 h-4 text-blue-500" /> Toshkentda bepul delivery
            </span>
          </div>
        </div>

        {/* Product Information Section */}
        <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto space-y-5">
          {/* Category & Rating */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
              {quickViewProduct.brand}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
              <Star className="w-4 h-4 fill-current" />
              <span>{quickViewProduct.rating}</span>
              <span className="text-gray-400 text-xs font-normal">
                ({quickViewProduct.reviewCount} sharh)
              </span>
            </div>
          </div>

          {/* Product Title */}
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-white leading-snug">
            {quickViewProduct.name}
          </h2>

          {/* Pricing */}
          <div className="flex items-baseline gap-3 bg-gray-50 dark:bg-gray-800/60 p-3 rounded-2xl">
            <span className="text-2xl font-black text-blue-600 dark:text-blue-400">
              {formatPrice(quickViewProduct.price)}
            </span>
            {quickViewProduct.oldPrice && (
              <span className="text-sm line-through text-gray-400 font-medium">
                {formatPrice(quickViewProduct.oldPrice)}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
            {quickViewProduct.description[lang] || quickViewProduct.description['uz']}
          </p>

          {/* Specifications Table */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
              {t('specs')}
            </h4>
            <div className="grid grid-cols-1 gap-2 text-xs bg-gray-50 dark:bg-gray-800/40 p-3 rounded-2xl border border-gray-100 dark:border-gray-800">
              {Object.entries(quickViewProduct.specs).map(([key, val]) => (
                <div key={key} className="flex justify-between py-1 border-b border-gray-200/40 dark:border-gray-700/40 last:border-none">
                  <span className="text-gray-500 capitalize">{key}:</span>
                  <span className="font-semibold text-gray-900 dark:text-gray-100 text-right">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-3">
            <button
              onClick={() => toggleWishlist(quickViewProduct.id)}
              className={`p-3.5 rounded-2xl border transition-all ${
                isWishlisted
                  ? 'bg-rose-50 dark:bg-rose-900/30 text-rose-600 border-rose-200 dark:border-rose-800'
                  : 'border-gray-200 dark:border-gray-700 text-gray-400 hover:text-rose-500'
              }`}
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>

            <button
              onClick={() => addToCart(quickViewProduct)}
              className="flex-1 py-3.5 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition-all"
            >
              <ShoppingCart className="w-5 h-5" />
              {isInCart ? t('addedToCart') : t('addToCart')}
            </button>

            <button
              onClick={handleBuyNow}
              className="py-3.5 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/30 transition-all"
            >
              {t('buyNow')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
