import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Search,
  ShoppingCart,
  Heart,
  Sun,
  Moon,
  LogOut,
  Cpu,
  Menu,
  X,
  PhoneCall,
  Globe,
  ChevronDown,
  Package,
  Flame,
  ShieldCheck,
  Info,
  Mail,
  Home,
  Grid,
  Zap,
  Scale,
  HelpCircle,
  Newspaper,
  Star,
  DollarSign
} from 'lucide-react';

export const Navbar = () => {
  const {
    currentPage,
    navigateTo,
    theme,
    toggleTheme,
    lang,
    setLang,
    currency,
    setCurrency,
    cart,
    wishlist,
    compareList,
    user,
    logout,
    searchQuery,
    setSearchQuery,
    setIsCartOpen,
    setIsAuthOpen,
    setAuthTab,
    t
  } = useApp();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const mainNavLinks = [
    { page: 'home', key: 'home', icon: <Home className="w-4 h-4" /> },
    { page: 'catalog', key: 'catalog', icon: <Grid className="w-4 h-4" /> },
    { page: 'pc-builder', key: 'pcBuilderNav', icon: <Zap className="w-4 h-4 text-amber-500" /> },
    { page: 'deals', key: 'deals', icon: <Flame className="w-4 h-4 text-rose-500" /> },
    { page: 'compare', key: 'compareNav', icon: <Scale className="w-4 h-4 text-cyan-400" /> },
    { page: 'about', key: 'about', icon: <Info className="w-4 h-4" /> },
    { page: 'faq', key: 'faqNav', icon: <HelpCircle className="w-4 h-4" /> },
    { page: 'blog', key: 'blogNav', icon: <Newspaper className="w-4 h-4" /> },
    { page: 'reviews', key: 'reviewsNav', icon: <Star className="w-4 h-4 text-yellow-400" /> },
    { page: 'contact', key: 'contact', icon: <Mail className="w-4 h-4" /> },
    { page: 'warranty', key: 'warrantyNav', icon: <ShieldCheck className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <PhoneCall className="w-3.5 h-3.5" /> +998 (71) 200-00-00
            </span>
            <span className="hidden md:inline text-blue-200">|</span>
            <span className="hidden md:inline text-blue-100 font-medium">
              ⚡ O'zbekiston bo'ylab 24 soat ichida tekor va xavfsiz yetkazib berish!
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-white/10 rounded-full px-2 py-0.5">
              <Globe className="w-3 h-3 text-blue-200" />
              <button
                onClick={() => setLang('uz')}
                className={`font-semibold px-1 rounded ${
                  lang === 'uz' ? 'bg-white text-blue-900' : 'text-white hover:text-blue-200'
                }`}
              >
                UZ
              </button>
              <span className="text-white/40">/</span>
              <button
                onClick={() => setLang('ru')}
                className={`font-semibold px-1 rounded ${
                  lang === 'ru' ? 'bg-white text-blue-900' : 'text-white hover:text-blue-200'
                }`}
              >
                RU
              </button>
            </div>

            {/* Dynamic Currency Switcher Toggle */}
            <div className="flex items-center gap-1 bg-white/10 rounded-full px-2 py-0.5">
              <DollarSign className="w-3 h-3 text-amber-300" />
              <button
                onClick={() => setCurrency('UZS')}
                className={`font-bold px-1 rounded text-[11px] ${
                  currency === 'UZS' ? 'bg-amber-400 text-gray-950 shadow' : 'text-white hover:text-amber-200'
                }`}
              >
                UZS (SO'M)
              </button>
              <span className="text-white/40">/</span>
              <button
                onClick={() => setCurrency('USD')}
                className={`font-bold px-1 rounded text-[11px] ${
                  currency === 'USD' ? 'bg-amber-400 text-gray-950 shadow' : 'text-white hover:text-amber-200'
                }`}
              >
                USD ($)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div
            onClick={() => navigateTo('home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                UPG TECH
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 dark:text-gray-400 -mt-1">
                Store
              </span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-lg relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (currentPage !== 'catalog') navigateTo('catalog');
            }}
            placeholder={t('searchPlaceholder')}
            className="w-full pl-10 pr-10 py-2.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-900 text-sm focus:outline-none transition-all dark:text-white"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Compare Button */}
          <button
            onClick={() => navigateTo('compare')}
            className={`p-2.5 rounded-full relative transition-colors ${
              currentPage === 'compare'
                ? 'bg-cyan-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            title={t('compareNav')}
          >
            <Scale className="w-5 h-5" />
            {compareList.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900">
                {compareList.length}
              </span>
            )}
          </button>

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Wishlist Button */}
          <button
            onClick={() => navigateTo('wishlist')}
            className={`p-2.5 rounded-full relative transition-colors ${
              currentPage === 'wishlist'
                ? 'bg-rose-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-md shadow-blue-500/20"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline font-semibold">{t('cart')}</span>
            {totalCartCount > 0 && (
              <span className="bg-amber-400 text-gray-950 text-xs font-black px-2 py-0.5 rounded-full">
                {totalCartCount}
              </span>
            )}
          </button>

          {/* User Profile / Auth */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="flex items-center gap-2 p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold flex items-center justify-center text-xs">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="hidden lg:inline text-xs font-semibold text-gray-800 dark:text-gray-200 max-w-[90px] truncate">
                  {user.name}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
              </button>

              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 z-50 animate-fade-in">
                  <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
                    <p className="text-xs font-bold text-gray-900 dark:text-white truncate">{user.name}</p>
                  </div>
                  <button
                    onClick={() => {
                      navigateTo('orders');
                      setIsUserDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 font-semibold"
                  >
                    <Package className="w-4 h-4 text-blue-500" /> {t('myOrders')}
                  </button>
                  <button
                    onClick={() => {
                      logout();
                      setIsUserDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-rose-600 dark:text-rose-400 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 font-semibold"
                  >
                    <LogOut className="w-4 h-4" /> {t('logout')}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => {
                setAuthTab('signin');
                setIsAuthOpen(true);
              }}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-xs font-bold shadow-md hover:from-indigo-700 hover:to-blue-700 transition-all"
            >
              {t('signIn')}
            </button>
          )}
        </div>
      </div>

      {/* Pages Navigation Bar */}
      <nav className="hidden lg:block bg-gray-100/80 dark:bg-gray-800/50 border-t border-gray-200/50 dark:border-gray-800/50 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-1 py-1.5 text-xs font-bold whitespace-nowrap">
          {mainNavLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => navigateTo(link.page)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                currentPage === link.page
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {link.icon}
              <span>{t(link.key)}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-4 space-y-2 max-h-[70vh] overflow-y-auto">
          {mainNavLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => {
                navigateTo(link.page);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 ${
                currentPage === link.page
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              {link.icon}
              <span>{t(link.key)}</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
