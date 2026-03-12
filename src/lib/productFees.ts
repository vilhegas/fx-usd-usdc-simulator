import { ProductType, ProductFees } from '@/types';

export const productFeeConfig: Record<ProductType, ProductFees> = {
  USDC: {
    spread: 2.0,
    iof: 0.38,
    productFee: 0.8,
  },
  USD_INVESTIMENTOS: {
    spread: 1.5,
    iof: 0.38,
    productFee: 1.0,
  },
  USD_BANKING: {
    spread: 1.0,
    iof: 0.38,
    productFee: 1.5,
  },
};

export const getProductFees = (productType: ProductType): ProductFees => {
  return productFeeConfig[productType];
};

export const productTypes: ProductType[] = [
  "USDC",
  "USD_INVESTIMENTOS",
  "USD_BANKING",
];