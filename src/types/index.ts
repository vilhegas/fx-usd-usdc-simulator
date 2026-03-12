export interface MarketAsset {
  id: string;
  symbol: string;
  name: string;
  category: 'crypto' | 'forex';
}

export type ProductType = 'USDC' | 'USD Investimentos' | 'USD Banking';

export interface ProductFees {
  spread: number;
  iof: number;
  productFee: number;
}

export interface CalculationInput {
  exchangeRate: number;
  quantity: number;
  spread: number;
  iof: number;
  productFee: number;
  fixedFee: number;
}

export interface BreakdownValues {
  baseRate: number;
  spreadValue: number;
  afterSpread: number;
  iofValue: number;
  afterIof: number;
  productFeeValue: number;
  finalRate: number;
  totalCost: number;
}

export interface ScenarioResult {
  scenario: string;
  exchangeRate: number;
  effectiveRate: number;
  finalRate: number;
  totalCost: number;
}