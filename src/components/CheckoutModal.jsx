import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, CheckCircle2, CreditCard, Banknote, ShieldCheck, MapPin, User, Phone, FileText } from 'lucide-react';

export const CheckoutModal = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    clearCart,
    formatPrice,
    t,
    user
  } = useApp();

  const [fullName, setFullName] = useState(user?.name || '');
  const [phone, setPhone] = useState(user?.phone || '+998 ');
  const [city, setCity] = useState('Toshkent shahar');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('click'); // 'cash' | 'click' | 'payme' | 'uzum'
  const [notes, setNotes] = useState('');
  const [orderCompletedId, setOrderCompletedId] = useState(null);

  if (!isCheckoutOpen) return null;

  const totalAmount = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    const randomOrderId = 'UPG-' + Math.floor(100000 + Math.random() * 900000);
    setOrderCompletedId(randomOrderId);
    clearCart();
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setOrderCompletedId(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/75 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <h3 className="font-extrabold text-lg text-gray-900 dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-500" />
            {t('checkoutTitle')}
          </h3>
          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {orderCompletedId ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-500 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-2xl font-black text-gray-900 dark:text-white">
                {t('orderSuccessTitle')}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                {t('orderSuccessDesc')} <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{orderCompletedId}</span>
              </p>

              <div className="p-4 bg-gray-50 dark:bg-gray-800/60 rounded-2xl max-w-sm mx-auto text-xs text-left space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Qabul qiluvchi:</span>
                  <span className="font-bold text-gray-900 dark:text-white">{fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Telefon:</span>
                  <span className="font-bold text-gray-900 dark:text-white">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">To'lov usuli:</span>
                  <span className="font-bold uppercase text-blue-500">{paymentMethod}</span>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-lg"
              >
                Tushunarli / Yopish
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitOrder} className="space-y-6">
              {/* Personal Details */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Yetkazib berish ma'lumotlari
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                      {t('fullName')} *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Alisher Navoiy"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs dark:text-white"
                      />
                      <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                      {t('phone')} *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+998 90 123 45 67"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs dark:text-white"
                      />
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                      {t('city')}
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs dark:text-white"
                    >
                      <option value="Toshkent shahar">Toshkent shahar</option>
                      <option value="Samarqand">Samarqand</option>
                      <option value="Buxoro">Buxoro</option>
                      <option value="Andijon">Andijon</option>
                      <option value="Farg'ona">Farg'ona</option>
                      <option value="Namangan">Namangan</option>
                      <option value="Boshqa viloyatlar">Boshqa viloyat</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                      {t('address')} *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Yunusobod t., 14-mavze, 12-uy"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs dark:text-white"
                      />
                      <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  {t('paymentMethod')}
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('click')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      paymentMethod === 'click'
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                        : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <span className="font-extrabold text-xs block">CLICK</span>
                    <span className="text-[10px] opacity-75">Online to'lov</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('payme')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      paymentMethod === 'payme'
                        ? 'bg-cyan-500 text-white border-cyan-500 shadow-md'
                        : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <span className="font-extrabold text-xs block">PAYME</span>
                    <span className="text-[10px] opacity-75">Online to'lov</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('uzum')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      paymentMethod === 'uzum'
                        ? 'bg-purple-600 text-white border-purple-600 shadow-md'
                        : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <span className="font-extrabold text-xs block">UZUM BANK</span>
                    <span className="text-[10px] opacity-75">Online to'lov</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cash')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      paymentMethod === 'cash'
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                        : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <span className="font-extrabold text-xs block">NAQD PUL</span>
                    <span className="text-[10px] opacity-75">Qabul qilganda</span>
                  </button>
                </div>
              </div>

              {/* Order Notes */}
              <div>
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block mb-1">
                  {t('notes')}
                </label>
                <div className="relative">
                  <textarea
                    rows="2"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Masalan: Uy qongirogi ishlamaydi, yetib kelgach telefon qiling..."
                    className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs dark:text-white"
                  />
                </div>
              </div>

              {/* Total & Submit */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-400 block">{t('total')}</span>
                  <span className="text-xl font-extrabold text-blue-600 dark:text-blue-400">
                    {formatPrice(totalAmount)}
                  </span>
                </div>

                <button
                  type="submit"
                  className="py-3.5 px-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-blue-500/30"
                >
                  {t('confirmOrder')}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
