// ===== Market Types =====

export type MarketSymbol =
  | "FX_IDC:USDBRL"
  | "BINANCE:BTCUSDT"
  | "BINANCE:ETHUSDT"
  | "FX:EURUSD"
  | "BINANCE:USDTBRL"
  | string;

export interface MarketAsset {
  id: string;
  symbol: MarketSymbol;
  name: string;
  category: "crypto" | "forex";
}


// ===== Product Types =====

export type ProductType =
  | "USDC"
  | "USD Investimentos"
  | "USD Banking";

export interface ProductFees {
  spread: number;
  iof: number;
  productFee: number;
}


// ===== Calculator Types =====

export interface CalculationInput {
  exchangeRate: number;
  quantity: number;
  spread: number;
  iof: number;
  productFee: number;
  fixedFee: number;
}


// ===== Breakdown Types =====

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


// ===== Scenario Types =====

export interface ScenarioResult {
  scenario: string;
  exchangeRate: number;
  effectiveRate: number;
  finalRate: number;
  totalCost: number;
}