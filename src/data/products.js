export const products = [
  {
    id: 1,
    name: "ASUS ROG Strix SCAR 18 (2024)",
    category: "laptops",
    brand: "ASUS",
    price: 39500000,
    oldPrice: 43000000,
    rating: 4.9,
    reviewCount: 28,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    isNew: true,
    isHit: true,
    inStock: true,
    specs: {
      processor: "Intel Core i9-14900HX (24 yadro)",
      ram: "32 GB DDR5 5600MHz",
      storage: "2 TB NVMe PCIe 4.0 SSD",
      gpu: "NVIDIA GeForce RTX 4090 16GB",
      display: "18.0\" QHD+ 240Hz Nebula HDR IPS",
      warranty: "2 yil rasmiy kafolat"
    },
    description: {
      uz: "O'yin ixlosmandlari va peffessional dizaynerlar uchun eng kuchli noutbuk. Ekstremal unumdorlik va Mini-LED displey.",
      ru: "Флагманский игровой ноутбук с мощнейшим процессором Intel i9 и видеокартой RTX 4090 для самых требовательных задач."
    }
  },
  {
    id: 2,
    name: "MSI GeForce RTX 4090 SUPRIM X 24G",
    category: "gpus",
    brand: "MSI",
    price: 27800000,
    oldPrice: 29500000,
    rating: 5.0,
    reviewCount: 42,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
    isNew: false,
    isHit: true,
    inStock: true,
    specs: {
      processor: "NVIDIA Ada Lovelace",
      ram: "24 GB GDDR6X",
      storage: "384-bit Bus Width",
      gpu: "Boost Clock: 2640 MHz",
      display: "3x DisplayPort 1.4a, 1x HDMI 2.1a",
      warranty: "3 yil kafolat"
    },
    description: {
      uz: "Dunyoning eng kuchli grafik kartasi. 4K o'yinlar va 3D renderlash uchun mutlaq yetakchi.",
      ru: "Высочайшая производительность в 4K играх и тяжелых графических вычислениях с премиальным охлаждением SUPRIM."
    }
  },
  {
    id: 3,
    name: "Apple MacBook Pro 16 M3 Max (2023)",
    category: "laptops",
    brand: "Apple",
    price: 44000000,
    oldPrice: 46500000,
    rating: 4.9,
    reviewCount: 19,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    isNew: true,
    isHit: false,
    inStock: true,
    specs: {
      processor: "Apple M3 Max (16-core CPU, 40-core GPU)",
      ram: "48 GB Unified Memory",
      storage: "1 TB SSD",
      gpu: "40-Core Apple GPU",
      display: "16.2\" Liquid Retina XDR 120Hz ProMotion",
      warranty: "1 yil Apple rasmiy kafolat"
    },
    description: {
      uz: "Dasturchilar, video montajchilar va musiqa prodyuserlari uchun eng mukammal ish stansiyasi.",
      ru: "Бескомпромиссная мощь процессора M3 Max для видеомонтажа 8K, 3D анимации и разработки."
    }
  },
  {
    id: 4,
    name: "Intel Core i9-14900K Processor",
    category: "cpus",
    brand: "Intel",
    price: 7800000,
    oldPrice: 8400000,
    rating: 4.7,
    reviewCount: 35,
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80",
    isNew: true,
    isHit: true,
    inStock: true,
    specs: {
      processor: "24 Cores (8P + 16E) / 32 Threads",
      ram: "DDR5-5600 & DDR4-3200 qo'llab-quvvatlaydi",
      storage: "L3 Cache: 36 MB",
      gpu: "Intel UHD Graphics 770",
      display: "Max Frequency: 6.0 GHz Thermal Velocity Boost",
      warranty: "3 yil kafolat"
    },
    description: {
      uz: "6.0 GHz tezlikka erishuvchi kompyuter protsessorlarining haqiqiy qiroli.",
      ru: "Флагманский процессор Intel 14-го поколения с тактовой частотой до 6.0 ГГц."
    }
  },
  {
    id: 5,
    name: "Samsung Odyssey OLED G9 49\" Gaming Monitor",
    category: "monitors",
    brand: "Samsung",
    price: 21500000,
    oldPrice: 23800000,
    rating: 4.8,
    reviewCount: 15,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    isNew: true,
    isHit: false,
    inStock: true,
    specs: {
      processor: "Neo Quantum Processor Pro",
      ram: "Response Time: 0.03ms (GtG)",
      storage: "DisplayHDR True Black 400",
      gpu: "Resolution: Dual QHD 5120x1440 OLED",
      display: "49-inch Curved 1800R, 240Hz Refresh",
      warranty: "2 yil rasmiy kafolat"
    },
    description: {
      uz: "49 dyuymli ulkan ultra-keng OLED displey va 240Hz yangilanish chastotasi bilan cheksiz o'yin zavqi.",
      ru: "Изогнутый 49-дюймовый OLED монитор с потрясающим контрастом и частотой 240 Гц."
    }
  },
  {
    id: 6,
    name: "Lenovo Legion Pro 7i Gen 8",
    category: "laptops",
    brand: "Lenovo",
    price: 29800000,
    oldPrice: 32000000,
    rating: 4.8,
    reviewCount: 22,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    isNew: false,
    isHit: true,
    inStock: true,
    specs: {
      processor: "Intel Core i9-13900HX",
      ram: "32 GB DDR5 5600MHz",
      storage: "1 TB M.2 Gen4 NVMe SSD",
      gpu: "NVIDIA GeForce RTX 4080 12GB",
      display: "16\" WQXGA (2560x1600) 240Hz IPS",
      warranty: "2 yil kafolat"
    },
    description: {
      uz: "Legion Coldfront 5.0 sovutish tizimi va AI LA2 chipi bilan jihozlangan o'yin noutbuki.",
      ru: "Мощный игровой ноутбук с продвинутым искусственным интеллектом для оптимизации FPS."
    }
  },
  {
    id: 7,
    name: "Razer BlackWidow V4 Pro Mechanical Keyboard",
    category: "peripherals",
    brand: "Razer",
    price: 2800000,
    oldPrice: 3100000,
    rating: 4.6,
    reviewCount: 54,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    isNew: false,
    isHit: false,
    inStock: true,
    specs: {
      processor: "Razer Green / Yellow Switches",
      ram: "8 Dedicated Macro Keys & Command Dial",
      storage: "Underglow Chroma RGB Lighting",
      gpu: "Magnetic Plush Leatherette Wrist Rest",
      display: "8000Hz Polling Rate",
      warranty: "1 yil kafolat"
    },
    description: {
      uz: "Kiber-sportchilar va klaviatura ishqibozlari uchun maksimal tugmalar boshqaruvi hamda RGB yoritgich.",
      ru: "Премиальная механическая клавиатура с регулятором Razer Command Dial и богатой подсветкой."
    }
  },
  {
    id: 8,
    name: "Logitech G Pro X Superlight 2 Wireless Mouse",
    category: "peripherals",
    brand: "Razer", // Or Logitech
    price: 1950000,
    oldPrice: 2200000,
    rating: 4.9,
    reviewCount: 68,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
    isNew: true,
    isHit: true,
    inStock: true,
    specs: {
      processor: "HERO 2 Sensor (32,000 DPI)",
      ram: "LIGHTFORCE Hybrid Switches",
      storage: "Vazni: Bor-yo'g'i 60 gramm",
      gpu: "Batareya: 95 soatgacha uzluksiz",
      display: "USB-C fast charging, POWERPLAY compatible",
      warranty: "1 yil kafolat"
    },
    description: {
      uz: "Bor-yo'g'i 60 gramm vaznga ega professional simsiz o'yin sichqonchasi.",
      ru: "Ультралегкая беспроводная мышь весом 60 грамм для профессионального киберспорта."
    }
  },
  {
    id: 9,
    name: "HyperX Cloud III Wireless Headset",
    category: "audio",
    brand: "HyperX",
    price: 1850000,
    oldPrice: 2100000,
    rating: 4.8,
    reviewCount: 41,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
    isNew: false,
    isHit: true,
    inStock: true,
    specs: {
      processor: "53mm Angled Drivers",
      ram: "DTS Headphone:X Spatial Audio",
      storage: "120 soatgacha batareya ishlash muddati",
      gpu: "Ultra-clear 10mm Noise-Canceling Mic",
      display: "Memory Foam va Yumshoq Teri qoplamasi",
      warranty: "1 yil kafolat"
    },
    description: {
      uz: "120 soatgacha quvvat ushlovchi va hayratlanarli fazoviy ovoz beruvchi simsiz quloqchin.",
      ru: "Легендарный комфорт HyperX и до 120 часов автономной работы без подзарядки."
    }
  },
  {
    id: 10,
    name: "Samsung 990 PRO 2TB NVMe M.2 SSD",
    category: "storage",
    brand: "Samsung",
    price: 2450000,
    oldPrice: 2700000,
    rating: 4.9,
    reviewCount: 88,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
    isNew: false,
    isHit: true,
    inStock: true,
    specs: {
      processor: "Samsung Pascal Controller",
      ram: "Form Factor: M.2 2280 PCIe 4.0 x4",
      storage: "O'qish: 7450 MB/s, Yoza olish: 6900 MB/s",
      gpu: "Heatsink qoplamasi bilan",
      display: "Smart Thermal Control",
      warranty: "5 yil rasmiy kafolat"
    },
    description: {
      uz: "Kompyuter va PS5 uchun eng tezkor PCIe 4.0 SSD diski.",
      ru: "Максимальная скорость чтения до 7450 МБ/с для быстрого запуска игр и операционной системы."
    }
  },
  {
    id: 11,
    name: "AMD Ryzen 9 7950X3D Processor",
    category: "cpus",
    brand: "AMD",
    price: 8100000,
    oldPrice: 8700000,
    rating: 4.9,
    reviewCount: 29,
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80",
    isNew: true,
    isHit: true,
    inStock: true,
    specs: {
      processor: "16 Cores / 32 Threads Zen 4",
      ram: "AM5 Socket, DDR5 support",
      storage: "128MB 3D V-Cache Technology",
      gpu: "AMD Radeon Graphics built-in",
      display: "Max Boost: 5.7 GHz",
      warranty: "3 yil kafolat"
    },
    description: {
      uz: "3D V-Cache texnologiyasi tufayli o'yinlarda eng yuqori FPS ko'rsatkichini beruvchi protsessor.",
      ru: "Лучший игровой процессор с технологией 3D V-Cache для сверхвысокой частоты кадров."
    }
  },
  {
    id: 12,
    name: "UPG Gaming Titan PC (i9 / RTX 4080 Super / 64GB)",
    category: "desktops",
    brand: "MSI",
    price: 36000000,
    oldPrice: 39000000,
    rating: 5.0,
    reviewCount: 14,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80",
    isNew: true,
    isHit: true,
    inStock: true,
    specs: {
      processor: "Intel Core i9-14900KF Liquid Cooled",
      ram: "64 GB Corsair Vengeance RGB DDR5 6000MHz",
      storage: "2 TB Samsung 990 Pro Gen4 SSD",
      gpu: "NVIDIA GeForce RTX 4080 Super 16GB",
      display: "Case: Lian Li O11 Dynamic EVO RGB",
      warranty: "3 yil to'liq kafolat"
    },
    description: {
      uz: "Tayyor yig'ilgan shaxsiy kompyuter. Suvli sovutish va shaffof shisha korpus bilan ajoyib ko'rinish.",
      ru: "Готовая премиальная игровая станция с кастомным жидкостным охлаждением и топовой начинкой."
    }
  }
];
