import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { products } from '../data/products';
import { ProductCard } from './ProductCard';
import { FilterSidebar } from './FilterSidebar';
import { ArrowUpDown, PackageX, Filter, X } from 'lucide-react';

export const CatalogSection = () => {
  const {
    searchQuery,
    selectedCategory,
    selectedBrand,
    priceRange,
    inStockOnly,
    onSaleOnly,
    sortBy,
    setSortBy,
    t
  } = useApp();

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter products matching all criteria
  const filteredProducts = products.filter((prod) => {
    if (
      searchQuery &&
      !prod.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !prod.brand.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    if (selectedCategory !== 'all' && prod.category !== selectedCategory) {
      return false;
    }

    if (selectedBrand !== 'all' && prod.brand !== selectedBrand) {
      return false;
    }

    if (prod.price < priceRange[0] || prod.price > priceRange[1]) {
      return false;
    }

    if (inStockOnly && !prod.inStock) {
      return false;
    }

    if (onSaleOnly && !prod.oldPrice) {
      return false;
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'priceLow') return a.price - b.price;
    if (sortBy === 'priceHigh') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'newest') return b.isNew ? 1 : -1;
    return b.reviewCount - a.reviewCount;
  });

  return (
    <section id="catalog-section" className="py-4 sm:py-6 px-3 sm:px-4 max-w-7xl mx-auto space-y-4 sm:space-y-6">
      {/* Sorting & Filter Trigger Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white dark:bg-gray-900 p-3.5 sm:p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
        <div>
          <h2 className="text-base sm:text-xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
            <span>{t('catalog')}</span>
            <span className="text-[10px] sm:text-xs font-bold bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full">
              {sortedProducts.length} ta
            </span>
          </h2>
          <p className="text-[10px] sm:text-xs text-gray-400">
            {searchQuery ? `"${searchQuery}" bo'yicha` : "Sifatli texnologiyalar kafolatlangan narxlarda"}
          </p>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-2">
          {/* Mobile Filter Drawer Button */}
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="lg:hidden px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold text-xs flex items-center gap-1.5 border border-blue-200 dark:border-blue-900"
          >
            <Filter className="w-3.5 h-3.5" />
            <span>Filtrlar</span>
          </button>

          {/* Sort selector */}
          <div className="flex items-center gap-1 text-xs">
            <ArrowUpDown className="w-3.5 h-3.5 text-gray-400 hidden sm:inline" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-2 py-1.5 font-bold text-gray-800 dark:text-white focus:outline-none text-[11px] sm:text-xs"
            >
              <option value="popular">{t('sortPopular')}</option>
              <option value="priceLow">{t('sortPriceLow')}</option>
              <option value="priceHigh">{t('sortPriceHigh')}</option>
              <option value="newest">{t('sortNewest')}</option>
              <option value="rating">{t('sortRating')}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 relative">
        {/* Desktop Filter Sidebar */}
        <div className="hidden lg:block lg:col-span-1">
          <FilterSidebar />
        </div>

        {/* Mobile Filter Slide-Over Drawer */}
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex justify-start bg-gray-950/75 backdrop-blur-sm p-3">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-4 w-full max-w-xs overflow-y-auto max-h-[92vh] relative shadow-2xl">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <FilterSidebar />
            </div>
          </div>
        )}

        {/* Products Grid: 2 columns on mobile, 3 on tablet, 3-4 on desktop */}
        <div className="lg:col-span-3">
          {sortedProducts.length === 0 ? (
            <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 sm:p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-400 flex items-center justify-center mx-auto">
                <PackageX className="w-8 h-8" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                Hech narsa topilmadi
              </h3>
              <p className="text-xs text-gray-400 max-w-sm mx-auto">
                Tanlangan filtrlar yoki qidiruv so'zi bo'yicha mos keladigan mahsulotlar topilmadi.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-2.5 sm:gap-4">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
