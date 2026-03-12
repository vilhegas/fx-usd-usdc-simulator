'use client';

import { NumberInput } from '@/components/ui/NumberInput';
import { ProductSelector } from './ProductSelector';
import { CalculationInput, ProductType } from '@/types';

interface CalculatorFormProps {
  input: CalculationInput;
  selectedProduct: ProductType;
  productTypes: ProductType[];
  onProductChange: (product: ProductType) => void;
  onFieldChange: <K extends keyof CalculationInput>(field: K, value: CalculationInput[K]) => void;
}

export const CalculatorForm = ({
  input,
  selectedProduct,
  productTypes,
  onProductChange,
  onFieldChange,
}: CalculatorFormProps) => {
  return (
    <div className="space-y-5">
      <ProductSelector
        products={productTypes}
        selected={selectedProduct}
        onSelect={onProductChange}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <NumberInput
          label="Taxa de câmbio base"
          value={input.exchangeRate}
          onChange={(value) => onFieldChange('exchangeRate', value)}
          prefix="R$"
          step={0.01}
        />

        <NumberInput
          label="Quantidade"
          value={input.quantity}
          onChange={(value) => onFieldChange('quantity', value)}
          step={1}
        />

        <NumberInput
          label="Spread"
          value={input.spread}
          onChange={(value) => onFieldChange('spread', value)}
          suffix="%"
          step={0.01}
        />

        <NumberInput
          label="IOF"
          value={input.iof}
          onChange={(value) => onFieldChange('iof', value)}
          suffix="%"
          step={0.01}
        />

        <NumberInput
          label="Taxa do produto"
          value={input.productFee}
          onChange={(value) => onFieldChange('productFee', value)}
          suffix="%"
          step={0.01}
        />

        <NumberInput
          label="Taxa fixa (opcional)"
          value={input.fixedFee}
          onChange={(value) => onFieldChange('fixedFee', value)}
          prefix="R$"
          step={0.01}
        />
      </div>
    </div>
  );
};