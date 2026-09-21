import React from 'react';
import { useApp } from '../context/AppContext';
import { Package, Clock, CheckCircle2, ShieldCheck, ShoppingBag } from 'lucide-react';

export const OrdersPage = () => {
  const { user, t, navigateTo, formatPrice } = useApp();

  const mockOrders = [
    {
      id: "UPG-984120",
      date: "2026-09-18",
      status: "Bajarildi",
      total: 39500000,
      payment: "CLICK",
      items: [
        { name: "ASUS ROG Strix SCAR 18 (2024)", qty: 1 }
      ]
    },
    {
      id: "UPG-771239",
      date: "2026-09-02",
      status: "Yetkazib berildi",
      total: 2450000,
      payment: "Naqd pul",
      items: [
        { name: "Samsung 990 PRO 2TB NVMe SSD", qty: 1 }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
        <div>
          <h1 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-2">
            <Package className="w-6 h-6 text-blue-500" />
            {t('myOrdersTitle')}
          </h1>
          <p className="text-xs text-gray-400">Siz tomondan rasmiylashtirilgan barcha xaridlar kalendari</p>
        </div>
      </div>

      {!user ? (
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-12 border border-gray-100 dark:border-gray-800 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-500 flex items-center justify-center mx-auto">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Buyurtmalaringizni ko'rish uchun tizimga kiring
          </h3>
          <p className="text-xs text-gray-400 max-w-xs mx-auto">
            Akkauntingiz orqali buyurtmalar statusi va kuryer harakatini kuzatishingiz mumkin.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {mockOrders.map((order) => (
            <div
              key={order.id}
              className="p-5 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm space-y-4"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-3 text-xs">
                <div>
                  <span className="text-gray-400">Buyurtma ID: </span>
                  <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{order.id}</span>
                  <span className="text-gray-400 ml-3">| Sana: {order.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 font-bold text-[11px] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {order.status}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs font-semibold text-gray-900 dark:text-white">
                    <span>{item.name} x {item.qty}</span>
                    <span className="text-gray-500">{order.payment}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex justify-between items-center text-sm font-black border-t border-gray-100 dark:border-gray-800">
                <span className="text-gray-400 text-xs">Jami summa:</span>
                <span className="text-blue-600 dark:text-blue-400">{formatPrice(order.total)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
