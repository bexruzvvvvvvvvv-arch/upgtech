import React from 'react';
import { useApp } from '../context/AppContext';
import { products } from '../data/products';
import { Scale, X, ShoppingCart, Plus, Check } from 'lucide-react';

export const ComparePage = () => {
  const { compareList, toggleCompare, formatPrice, addToCart, t, navigateTo } = useApp();

  // Pick default top products if list is empty
  const displayProducts = compareList.length > 0 ? compareList : products.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
            <Scale className="w-6 h-6 text-blue-500" />
            {t('compareTitle')} ({displayProducts.length})
          </h1>
          <p className="text-xs text-gray-400">{t('compareSub')}</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 border-collapse">
          <thead>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <th className="p-4 text-left text-xs font-bold text-gray-400 w-48">Mahsulot</th>
              {displayProducts.map((prod) => (
                <th key={prod.id} className="p-4 text-center min-w-[220px] relative">
                  <button
                    onClick={() => toggleCompare(prod)}
                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-rose-500"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <img src={prod.image} alt={prod.name} className="w-24 h-24 object-cover mx-auto rounded-xl mb-2" />
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white line-clamp-2">{prod.name}</h4>
                  <span className="text-sm font-black text-blue-600 dark:text-blue-400 block mt-1">
                    {formatPrice(prod.price)}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-xs divide-y divide-gray-100 dark:divide-gray-800">
            <tr>
              <td className="p-4 font-bold text-gray-400">Brend</td>
              {displayProducts.map((prod) => (
                <td key={prod.id} className="p-4 text-center font-semibold text-gray-900 dark:text-white">
                  {prod.brand}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-bold text-gray-400">Protsessor / GPU</td>
              {displayProducts.map((prod) => (
                <td key={prod.id} className="p-4 text-center text-gray-700 dark:text-gray-300">
                  {prod.specs.processor || prod.specs.gpu}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-bold text-gray-400">RAM / Xotira</td>
              {displayProducts.map((prod) => (
                <td key={prod.id} className="p-4 text-center text-gray-700 dark:text-gray-300">
                  {prod.specs.ram || prod.specs.storage}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-bold text-gray-400">Ekran / Xususiyat</td>
              {displayProducts.map((prod) => (
                <td key={prod.id} className="p-4 text-center text-gray-700 dark:text-gray-300">
                  {prod.specs.display || prod.specs.storage}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-bold text-gray-400">Kafolat</td>
              {displayProducts.map((prod) => (
                <td key={prod.id} className="p-4 text-center text-emerald-600 font-semibold">
                  {prod.specs.warranty}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-bold text-gray-400">Harakat</td>
              {displayProducts.map((prod) => (
                <td key={prod.id} className="p-4 text-center">
                  <button
                    onClick={() => addToCart(prod)}
                    className="py-2 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md"
                  >
                    Savatga Qo'shish
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
