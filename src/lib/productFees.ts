import { ProductType, ProductFees } from '@/types';

export const productFeeConfig: Record<ProductType, ProductFees> = {
  'USDC': {
    spread: 2.0,
    iof: 0.38,
    productFee: 0.8,
  },
  'USD Investimentos': {
    spread: 1.5,
    iof: 0.38,
    productFee: 1.0,
  },
  'USD Banking': {
    spread: 1.0,
    iof: 0.38,
    productFee: 1.5,
  },
};

export const getProductFees = (productType: ProductType): ProductFees => {
  return productFeeConfig[productType];
};

export const productTypes: ProductType[] = [
  'USDC',
  'USD Investimentos',
  'USD Banking',
];