'use client';

import { useState, useMemo, useCallback } from 'react';
import { CalculationInput, ProductType, BreakdownValues, ScenarioResult } from '@/types';
import { getProductFees, productTypes } from '@/lib/productFees';
import { calculateBreakdown, calculateScenarios } from '@/lib/calculations';

const defaultInput: CalculationInput = {
  exchangeRate: 5.70,
  quantity: 1000,
  spread: 2.0,
  iof: 0.38,
  productFee: 0.8,
  fixedFee: 0,
};

export const useCalculator = () => {
  const [input, setInput] = useState<CalculationInput>(defaultInput);
  const [selectedProduct, setSelectedProduct] = useState<ProductType>('USDC');

  const handleProductChange = useCallback((product: ProductType) => {
    setSelectedProduct(product);
    const fees = getProductFees(product);
    setInput(prev => ({
      ...prev,
      spread: fees.spread,
      iof: fees.iof,
      productFee: fees.productFee,
    }));
  }, []);

  const updateField = useCallback(<K extends keyof CalculationInput>(
    field: K,
    value: CalculationInput[K]
  ) => {
    setInput(prev => ({ ...prev, [field]: value }));
  }, []);

  const breakdown: BreakdownValues = useMemo(() => {
    return calculateBreakdown(input);
  }, [input]);

  const scenarios: ScenarioResult[] = useMemo(() => {
    return calculateScenarios(input);
  }, [input]);

  return {
    input,
    selectedProduct,
    productTypes,
    breakdown,
    scenarios,
    handleProductChange,
    updateField,
  };
};