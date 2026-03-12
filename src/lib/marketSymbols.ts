import { MarketAsset } from '@/types';

export const defaultAssets: MarketAsset[] = [
  { id: '1', symbol: 'FX_IDC:USDBRL', name: 'USD/BRL', category: 'forex' },
  { id: '2', symbol: 'BINANCE:BTCUSDT', name: 'BTC/USDT', category: 'crypto' },
  { id: '3', symbol: 'BINANCE:ETHUSDT', name: 'ETH/USDT', category: 'crypto' },
  { id: '4', symbol: 'FX:EURUSD', name: 'EUR/USD', category: 'forex' },
  { id: '5', symbol: 'BINANCE:USDTBRL', name: 'USDT/BRL', category: 'crypto' },
];

export const validateSymbol = (symbol: string): boolean => {
  const parts = symbol.split(':');
  if (parts.length === 2) {
    return parts[0].length > 0 && parts[1].length > 0;
  }
  return symbol.length > 0;
};

export const formatSymbolForDisplay = (symbol: string): string => {
  const parts = symbol.split(':');
  if (parts.length === 2) {
    return parts[1];
  }
  return symbol;
};