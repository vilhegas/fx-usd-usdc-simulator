'use client';

import { useState, useCallback } from 'react';
import { MarketAsset } from '@/types';
import { defaultAssets, validateSymbol } from '@/lib/marketSymbols';

export const useMarketAssets = () => {
  const [assets, setAssets] = useState<MarketAsset[]>(defaultAssets);
  const [selectedAsset, setSelectedAsset] = useState<MarketAsset>(defaultAssets[0]);
  const [newSymbolInput, setNewSymbolInput] = useState('');

  const addAsset = useCallback(() => {
    if (!newSymbolInput.trim()) return;
    const symbol = newSymbolInput.trim().toUpperCase();
    
    if (!validateSymbol(symbol)) {
      alert('Invalid symbol format. Use format: EXCHANGE:SYMBOL or SYMBOL');
      return;
    }

    if (assets.some(asset => asset.symbol === symbol)) {
      alert('This asset is already in your list');
      return;
    }

    const parts = symbol.split(':');
    const name = parts.length === 2 ? parts[1] : symbol;
    const category = symbol.includes('BTC') || symbol.includes('ETH') || symbol.includes('USDT') 
      ? 'crypto' 
      : 'forex';

    const newAsset: MarketAsset = {
      id: Date.now().toString(),
      symbol,
      name,
      category,
    };

    setAssets(prev => [...prev, newAsset]);
    setNewSymbolInput('');
  }, [newSymbolInput, assets]);

  const removeAsset = useCallback((id: string) => {
    setAssets(prev => {
      const filtered = prev.filter(asset => asset.id !== id);
      if (selectedAsset.id === id && filtered.length > 0) {
        setSelectedAsset(filtered[0]);
      }
      return filtered;
    });
  }, [selectedAsset]);

  const selectAsset = useCallback((asset: MarketAsset) => {
    setSelectedAsset(asset);
  }, []);

  return {
    assets,
    selectedAsset,
    newSymbolInput,
    setNewSymbolInput,
    addAsset,
    removeAsset,
    selectAsset,
  };
};