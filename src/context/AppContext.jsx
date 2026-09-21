import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Navigation / Page Routing State
  const [currentPage, setCurrentPage] = useState('home');

  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('upg_theme') || 'dark';
  });

  // Language state
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('upg_lang') || 'uz';
  });

  // Currency State: 'UZS' | 'USD'
  const [currency, setCurrency] = useState(() => {
    return localStorage.getItem('upg_currency') || 'UZS';
  });

  // Cart state
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('upg_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state
  const [wishlist, setWishlist] = useState(() => {
    try {
      const savedWishlist = localStorage.getItem('upg_wishlist');
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch {
      return [];
    }
  });

  // Comparison State
  const [compareList, setCompareList] = useState([]);

  // User Auth state
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('upg_user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  // Filters & Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 50000000]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [onSaleOnly, setOnSaleOnly] = useState(false);
  const [sortBy, setSortBy] = useState('popular');

  // Modals & Panels State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState('signin');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Toast Notification State
  const [toast, setToast] = useState(null);

  // Scroll to top on page change
  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Apply Theme class to document
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('upg_theme', theme);
  }, [theme]);

  // Persist language
  useEffect(() => {
    localStorage.setItem('upg_lang', lang);
  }, [lang]);

  // Persist currency
  useEffect(() => {
    localStorage.setItem('upg_currency', currency);
  }, [currency]);

  // Persist cart
  useEffect(() => {
    localStorage.setItem('upg_cart', JSON.stringify(cart));
  }, [cart]);

  // Persist wishlist
  useEffect(() => {
    localStorage.setItem('upg_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Persist user
  useEffect(() => {
    if (user) {
      localStorage.setItem('upg_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('upg_user');
    }
  }, [user]);

  // Helper for Translation
  const t = (key) => {
    return translations[lang]?.[key] || translations['uz']?.[key] || key;
  };

  // Dynamic Price Formatting (UZS vs USD)
  // Exchange rate: 1 USD = 12,700 UZS
  const USD_RATE = 12700;

  const formatPrice = (amountInUzs) => {
    if (typeof amountInUzs !== 'number') return '0 UZS';

    if (currency === 'USD') {
      const inUsd = Math.round(amountInUzs / USD_RATE);
      const formatted = new Intl.NumberFormat('en-US').format(inUsd);
      return `$ ${formatted}`;
    } else {
      const formatted = new Intl.NumberFormat('fr-FR').format(amountInUzs);
      return `${formatted} UZS`;
    }
  };

  // Toast helper
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  // Cart Handlers
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
    showToast(t('addedToCartToast'), 'success');
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
    showToast(t('removedFromCartToast'), 'info');
  };

  const updateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist Handlers
  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        showToast(t('removedFromWishlistToast'), 'info');
        return prev.filter((id) => id !== productId);
      } else {
        showToast(t('addedToWishlistToast'), 'success');
        return [...prev, productId];
      }
    });
  };

  // Comparison Handlers
  const toggleCompare = (product) => {
    setCompareList((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast("Solishtirishdan olib tashlandi", 'info');
        return prev.filter((p) => p.id !== product.id);
      } else {
        if (prev.length >= 4) {
          showToast("Maksimal 4 ta mahsulot solishtirish mumkin!", 'error');
          return prev;
        }
        showToast("Solishtirishga qo'shildi!", 'success');
        return [...prev, product];
      }
    });
  };

  // Auth Handlers
  const login = (userData) => {
    setUser(userData);
    setIsAuthOpen(false);
    showToast(t('loginSuccess'), 'success');
  };

  const logout = () => {
    setUser(null);
    showToast('Tizimdan chiqdingiz', 'info');
  };

  // Toggle Theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        navigateTo,
        theme,
        toggleTheme,
        lang,
        setLang,
        currency,
        setCurrency,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        wishlist,
        toggleWishlist,
        compareList,
        toggleCompare,
        user,
        login,
        logout,
        searchQuery,
        setSearchQuery,
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
        sortBy,
        setSortBy,
        isCartOpen,
        setIsCartOpen,
        isAuthOpen,
        setIsAuthOpen,
        authTab,
        setAuthTab,
        isCheckoutOpen,
        setIsCheckoutOpen,
        quickViewProduct,
        setQuickViewProduct,
        toast,
        showToast,
        t,
        formatPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
