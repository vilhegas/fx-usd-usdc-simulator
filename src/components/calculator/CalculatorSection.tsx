'use client';

import { ProductType, CalculationInput, BreakdownValues } from '@/types';
import { SectionCard } from '@/components/ui/SectionCard';
import { CalculatorForm } from './CalculatorForm';
import { CalculationBreakdown } from './CalculationBreakdown';

interface CalculatorSectionProps {
  calculator: {
    input: CalculationInput;
    selectedProduct: ProductType;
    productTypes: ProductType[];
    breakdown: BreakdownValues;
    handleProductChange: (product: ProductType) => void;
    updateField: <K extends keyof CalculationInput>(
      field: K,
      value: CalculationInput[K]
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