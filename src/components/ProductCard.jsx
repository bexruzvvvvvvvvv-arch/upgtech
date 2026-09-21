import React from 'react';
import { useApp } from '../context/AppContext';
import { Heart, ShoppingCart, Eye, Star, Check, Sparkles, Flame } from 'lucide-react';

export const ProductCard = ({ product }) => {
  const {
    t,
    formatPrice,
    addToCart,
    cart,
    wishlist,
    toggleWishlist,
    setQuickViewProduct
  } = useApp();

  const isWishlisted = wishlist.includes(product.id);
  const isInCart = cart.some((item) => item.product.id === product.id);

  return (
    <div className="group relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      {/* Top Badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1 pointer-events-none">
        {product.isNew && (
          <span className="bg-blue-600 text-white text-[8px] sm:text-[10px] font-black uppercase px-1.5 py-0.5 rounded shadow flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-amber-300" /> {t('newTag')}
          </span>
        )}
        {product.isHit && (
          <span className="bg-amber-500 text-white text-[8px] sm:text-[10px] font-black uppercase px-1.5 py-0.5 rounded shadow flex items-center gap-1">
            <Flame className="w-2.5 h-2.5" /> {t('hitTag')}
          </span>
        )}
        {product.oldPrice && (
          <span className="bg-rose-500 text-white text-[8px] sm:text-[10px] font-black uppercase px-1.5 py-0.5 rounded shadow">
            -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleWishlist(product.id);
        }}
        className={`absolute top-2 right-2 z-10 p-1.5 sm:p-2 rounded-full backdrop-blur-md transition-all ${
          isWishlisted
            ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30'
            : 'bg-white/80 dark:bg-gray-800/80 text-gray-400 hover:text-rose-500'
        }`}
        title={t('wishlist')}
      >
        <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWishlisted ? 'fill-current' : ''}`} />
      </button>

      {/* Image Container */}
      <div
        onClick={() => setQuickViewProduct(product)}
        className="relative h-36 sm:h-48 w-full overflow-hidden bg-gray-50 dark:bg-gray-800/40 cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Quick View Hover Overlay */}
        <div className="absolute inset-0 bg-gray-950/40 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex items-center justify-center">
          <span className="px-3.5 py-1.5 rounded-full bg-white/90 text-gray-950 text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-sm">
            <Eye className="w-3.5 h-3.5" /> {t('quickView')}
          </span>
        </div>
      </div>

      {/* Details Container */}
      <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
        <div>
          {/* Brand & Rating */}
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 mb-1">
            <span className="font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {product.brand}
            </span>
            <div className="flex items-center gap-0.5 font-semibold text-amber-500">
              <Star className="w-3 h-3 fill-current" />
              <span>{product.rating}</span>
            </div>
          </div>

          {/* Title */}
          <h3
            onClick={() => setQuickViewProduct(product)}
            className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors leading-snug min-h-[2rem]"
          >
            {product.name}
          </h3>

          {/* Quick Spec Bullet */}
          <div className="mt-1.5 text-[10px] text-gray-500 dark:text-gray-400 space-y-0.5 bg-gray-50 dark:bg-gray-800/60 p-1.5 rounded-lg hidden sm:block">
            <p className="truncate font-medium">⚡ {product.specs.processor || product.specs.gpu}</p>
            <p className="truncate font-medium">💾 {product.specs.ram || product.specs.storage}</p>
          </div>
        </div>

        {/* Price & Action */}
        <div className="pt-2 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-1">
          <div className="min-w-0">
            {product.oldPrice && (
              <span className="text-[9px] sm:text-[10px] line-through text-gray-400 font-medium block truncate">
                {formatPrice(product.oldPrice)}
              </span>
            )}
            <span className="text-xs sm:text-sm font-extrabold text-blue-600 dark:text-blue-400 truncate block">
              {formatPrice(product.price)}
            </span>
          </div>

          <button
            onClick={() => addToCart(product)}
            className={`p-2 sm:p-2.5 rounded-xl font-bold text-xs flex items-center justify-center transition-all shrink-0 ${
              isInCart
                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/30'
            }`}
            title={isInCart ? t('addedToCart') : t('addToCart')}
          >
            {isInCart ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};
