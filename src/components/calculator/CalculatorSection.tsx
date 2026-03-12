'use client';

import { SectionCard } from '@/components/ui/SectionCard';
import { CalculatorForm } from './CalculatorForm';
import { CalculationBreakdown } from './CalculationBreakdown';

interface CalculatorSectionProps {
  calculator: {
    input: {
      exchangeRate: number;
      quantity: number;
      spread: number;
      iof: number;
      productFee: number;
      fixedFee: number;
    };
    selectedProduct: 'USDC' | 'USD Investimentos' | 'USD Banking';
    productTypes: ('USDC' | 'USD Investimentos' | 'USD Banking')[];
    breakdown: {
      baseRate: number;
      spreadValue: number;
      afterSpread: number;
      iofValue: number;
      afterIof: number;
      productFeeValue: number;
      finalRate: number;
      totalCost: number;
    };
    handleProductChange: (product: 'USDC' | 'USD Investimentos' | 'USD Banking') => void;
    updateField: <K extends 'exchangeRate' | 'quantity' | 'spread' | 'iof' | 'productFee' | 'fixedFee'>(
      field: K,
      value: number
    ) => void;
  };
}

export const CalculatorSection = ({ calculator }: CalculatorSectionProps) => {
  const { input, selectedProduct, productTypes, breakdown, handleProductChange, updateField } = calculator;

  return (
    <SectionCard title="Cost Calculator" className="h-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CalculatorForm
          input={input}
          selectedProduct={selectedProduct}
          productTypes={productTypes}
          onProductChange={handleProductChange}
          onFieldChange={updateField}
        />
        
        <div className="lg:border-l lg:border-slate-700 lg:pl-6">
          <CalculationBreakdown breakdown={breakdown} />
        </div>
      </div>
    </SectionCard>
  );
};