import React from 'react';
import { useApp } from '../context/AppContext';
import { Filter, RotateCcw, CheckSquare, Square, Tag, DollarSign, Layers } from 'lucide-react';

export const FilterSidebar = () => {
  const {
    t,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
    priceRange,
    setPriceRange,
    inStockOnly,
    setInStockOnly,
    onSaleOnly,
    setOnSaleOnly,
    formatPrice
  } = useApp();

  const categories = [
    { id: 'all', key: 'allCategories' },
    { id: 'laptops', key: 'laptops' },
    { id: 'desktops', key: 'desktops' },
    { id: 'gpus', key: 'gpus' },
    { id: 'cpus', key: 'cpus' },
    { id: 'monitors', key: 'monitors' },
    { id: 'peripherals', key: 'peripherals' },
    { id: 'audio', key: 'audio' },
    { id: 'storage', key: 'storage' },
  ];

  const brands = [
    'all',
    'ASUS',
    'MSI',
    'Lenovo',
    'Apple',
    'Samsung',
    'Razer',
    'HyperX',
    'Intel',
    'AMD'
  ];

  const handleReset = () => {
    setSelectedCategory('all');
    setSelectedBrand('all');
    setPriceRange([0, 50000000]);
    setInStockOnly(false);
    setOnSaleOnly(false);
  };

  return (
    <aside className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 shadow-sm space-y-6 h-fit sticky top-24">
      {/* Header & Reset */}
      <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3">
        <h3 className="text-base font-extrabold flex items-center gap-2 text-gray-900 dark:text-white">
          <Filter className="w-4 h-4 text-blue-500" />
          {t('filterTitle')}
        </h3>
        <button
          onClick={handleReset}
          className="text-xs font-semibold text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          {t('resetFilters')}
        </button>
      </div>

      {/* Category Filter */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1">
          <Layers className="w-3.5 h-3.5" /> {t('categories')}
        </h4>
        <div className="space-y-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-between ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <span>{t(cat.key)}</span>
              {selectedCategory === cat.id && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Filter (UZS) */}
      <div className="space-y-3 border-t border-gray-100 dark:border-gray-800 pt-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1">
          <DollarSign className="w-3.5 h-3.5" /> {t('priceRange')}
        </h4>
        <div className="text-xs font-bold text-blue-600 dark:text-blue-400">
          {formatPrice(priceRange[0])} — {formatPrice(priceRange[1])}
        </div>
        <input
          type="range"
          min="0"
          max="50000000"
          step="1000000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          className="w-full accent-blue-600 bg-gray-200 dark:bg-gray-800 h-2 rounded-lg cursor-pointer"
        />
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <label className="text-[10px] text-gray-400">{t('minPrice')}</label>
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
              className="w-full p-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-xs dark:text-white"
            />
          </div>
          <div>
            <label className="text-[10px] text-gray-400">{t('maxPrice')}</label>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-full p-2 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-xs dark:text-white"
            />
          </div>
        </div>
      </div>

      {/* Brand Filter */}
      <div className="space-y-2 border-t border-gray-100 dark:border-gray-800 pt-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1">
          <Tag className="w-3.5 h-3.5" /> {t('brands')}
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {brands.map((b) => (
            <button
              key={b}
              onClick={() => setSelectedBrand(b)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                selectedBrand === b
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-transparent shadow-sm'
                  : 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-gray-400'
              }`}
            >
              {b === 'all' ? t('allBrands') : b}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Checkbox Toggles */}
      <div className="space-y-2 border-t border-gray-100 dark:border-gray-800 pt-4 text-xs font-medium">
        <label
          onClick={() => setInStockOnly(!inStockOnly)}
          className="flex items-center gap-2 cursor-pointer select-none text-gray-700 dark:text-gray-300"
        >
          {inStockOnly ? (
            <CheckSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          ) : (
            <Square className="w-4 h-4 text-gray-400" />
          )}
          <span>{t('inStockOnly')}</span>
        </label>

        <label
          onClick={() => setOnSaleOnly(!onSaleOnly)}
          className="flex items-center gap-2 cursor-pointer select-none text-gray-700 dark:text-gray-300"
        >
          {onSaleOnly ? (
            <CheckSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          ) : (
            <Square className="w-4 h-4 text-gray-400" />
          )}
          <span>{t('onSaleOnly')}</span>
        </label>
      </div>
    </aside>
  );
};
