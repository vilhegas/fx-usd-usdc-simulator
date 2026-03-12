export const formatCurrency = (
  value: number,
  currency: string = 'BRL',
  minimumFractionDigits: number = 2,
  maximumFractionDigits: number = 2
): string => {
  const currencyMap: Record<string, string> = {
    'BRL': 'pt-BR',
    'USD': 'en-US',
    'EUR': 'de-DE',
  };

  const locale = currencyMap[currency] || 'pt-BR';
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(value);
};

export const formatPercent = (value: number, decimals: number = 2): string => {
  return `${value.toFixed(decimals)}%`;
};

export const formatNumber = (
  value: number,
  minimumFractionDigits: number = 2,
  maximumFractionDigits: number = 2
): string => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(value);
};