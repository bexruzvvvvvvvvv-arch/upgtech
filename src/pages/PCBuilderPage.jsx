import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { products } from '../data/products';
import { Cpu, HardDrive, ShoppingCart, CheckCircle2, ShieldCheck, Zap, RotateCcw } from 'lucide-react';

export const PCBuilderPage = () => {
  const { t, formatPrice, addToCart, showToast } = useApp();

  const cpus = products.filter((p) => p.category === 'cpus');
  const gpus = products.filter((p) => p.category === 'gpus');
  const storage = products.filter((p) => p.category === 'storage');

  // Preset RAM & Case selections
  const ramOptions = [
    { id: 'r1', name: "16GB DDR5 5600MHz Kingston Fury", price: 950000 },
    { id: 'r2', name: "32GB (2x16GB) DDR5 6000MHz Corsair Vengeance RGB", price: 2100000 },
    { id: 'r3', name: "64GB (2x32GB) DDR5 6000MHz G.Skill Trident Z5", price: 4200000 }
  ];

  const caseOptions = [
    { id: 'c1', name: "Lian Li O11 Dynamic EVO RGB White", price: 2800000 },
    { id: 'c2', name: "NZXT H7 Flow Tempered Glass", price: 1950000 },
    { id: 'c3', name: "DeepCool CG560 Mesh ARGB", price: 1100000 }
  ];

  const coolerOptions = [
    { id: 'k1', name: "DeepCool LT720 360mm AIO Liquid Cooler", price: 1850000 },
    { id: 'k2', name: "Thermalright Peerless Assassin 120 SE Air Cooler", price: 650000 }
  ];

  const [selectedCpu, setSelectedCpu] = useState(cpus[0] || null);
  const [selectedGpu, setSelectedGpu] = useState(gpus[0] || null);
  const [selectedStorage, setSelectedStorage] = useState(storage[0] || null);
  const [selectedRam, setSelectedRam] = useState(ramOptions[1]);
  const [selectedCase, setSelectedCase] = useState(caseOptions[0]);
  const [selectedCooler, setSelectedCooler] = useState(coolerOptions[0]);

  const totalBuildPrice =
    (selectedCpu?.price || 0) +
    (selectedGpu?.price || 0) +
    (selectedStorage?.price || 0) +
    selectedRam.price +
    selectedCase.price +
    selectedCooler.price;

  const handleAddBuildToCart = () => {
    const customBuildProduct = {
      id: Date.now(),
      name: `Custom PC Build (${selectedCpu?.name.split(' ')[0]} + ${selectedGpu?.name.split(' ')[0]})`,
      category: 'desktops',
      brand: 'UPG Custom',
      price: totalBuildPrice,
      rating: 5.0,
      reviewCount: 1,
      image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80",
      specs: {
        processor: selectedCpu?.name || '',
        gpu: selectedGpu?.name || '',
        ram: selectedRam.name,
        storage: selectedStorage?.name || '',
        warranty: "3 yil to'liq rasmiy kafolat"
      },
      description: {
        uz: "Professional yig'ilgan shaxsiy kompyuter build.",
        ru: "Персональная индивидуальная сборка ПК."
      }
    };

    addToCart(customBuildProduct);
    showToast("Yig'ilgan kompyuter savatga qo'shildi!", 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Title Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-gray-950 text-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-800 flex flex-col md:flex-row justify-between md:items-center gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-black uppercase tracking-wider border border-blue-400/30">
            <Zap className="w-4 h-4 text-amber-400" />
            Interaktiv Konfigurator
          </div>
          <h1 className="text-3xl font-black">{t('pcBuilderTitle')}</h1>
          <p className="text-xs text-purple-200">{t('pcBuilderSub')}</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center space-y-2 shrink-0">
          <span className="text-xs font-bold text-gray-300 block">Jami Yig'ish Narxi:</span>
          <span className="text-2xl font-black text-amber-400 block">{formatPrice(totalBuildPrice)}</span>
          <button
            onClick={handleAddBuildToCart}
            className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" /> Savatga Qo'shish
          </button>
        </div>
      </div>

      {/* Configurator Steps Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Step 1: CPU Selection */}
        <div className="p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 space-y-3">
          <h3 className="text-sm font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-blue-500" /> 1. Protsessor (CPU)
          </h3>
          <div className="space-y-2">
            {cpus.map((cpu) => (
              <div
                key={cpu.id}
                onClick={() => setSelectedCpu(cpu)}
                className={`p-3 rounded-2xl border cursor-pointer flex justify-between items-center transition-all ${
                  selectedCpu?.id === cpu.id
                    ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold'
                    : 'border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="text-xs">
                  <p className="font-bold">{cpu.name}</p>
                  <p className="text-[10px] text-gray-400">{cpu.specs.processor}</p>
                </div>
                <span className="text-xs font-extrabold">{formatPrice(cpu.price)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: GPU Selection */}
        <div className="p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 space-y-3">
          <h3 className="text-sm font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-500" /> 2. Videokarta (GPU)
          </h3>
          <div className="space-y-2">
            {gpus.map((gpu) => (
              <div
                key={gpu.id}
                onClick={() => setSelectedGpu(gpu)}
                className={`p-3 rounded-2xl border cursor-pointer flex justify-between items-center transition-all ${
                  selectedGpu?.id === gpu.id
                    ? 'border-purple-600 bg-purple-50/50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 font-bold'
                    : 'border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="text-xs">
                  <p className="font-bold">{gpu.name}</p>
                  <p className="text-[10px] text-gray-400">{gpu.specs.ram}</p>
                </div>
                <span className="text-xs font-extrabold">{formatPrice(gpu.price)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 3: RAM Selection */}
        <div className="p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 space-y-3">
          <h3 className="text-sm font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
            <HardDrive className="w-5 h-5 text-emerald-500" /> 3. Tezkor Xotira (RAM)
          </h3>
          <div className="space-y-2">
            {ramOptions.map((ram) => (
              <div
                key={ram.id}
                onClick={() => setSelectedRam(ram)}
                className={`p-3 rounded-2xl border cursor-pointer flex justify-between items-center transition-all ${
                  selectedRam.id === ram.id
                    ? 'border-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-bold'
                    : 'border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50'
                }`}
              >
                <span className="text-xs font-bold">{ram.name}</span>
                <span className="text-xs font-extrabold">{formatPrice(ram.price)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 4: Storage Selection */}
        <div className="p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 space-y-3">
          <h3 className="text-sm font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
            <HardDrive className="w-5 h-5 text-amber-500" /> 4. SSD Xotira
          </h3>
          <div className="space-y-2">
            {storage.map((ssd) => (
              <div
                key={ssd.id}
                onClick={() => setSelectedStorage(ssd)}
                className={`p-3 rounded-2xl border cursor-pointer flex justify-between items-center transition-all ${
                  selectedStorage?.id === ssd.id
                    ? 'border-amber-600 bg-amber-50/50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 font-bold'
                    : 'border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50'
                }`}
              >
                <span className="text-xs font-bold">{ssd.name}</span>
                <span className="text-xs font-extrabold">{formatPrice(ssd.price)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
