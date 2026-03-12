import { CalculationInput, BreakdownValues, ScenarioResult } from '@/types';

export const calculateBreakdown = (input: CalculationInput): BreakdownValues => {
  const { exchangeRate, quantity, spread, iof, productFee, fixedFee } = input;

  const effectiveRate = exchangeRate * (1 + spread / 100) * (1 + iof / 100);
  const finalRate = effectiveRate * (1 + productFee / 100);
  const totalCost = finalRate * quantity + fixedFee;

  const spreadValue = exchangeRate * (spread / 100);
  const afterSpread = exchangeRate + spreadValue;
  const iofValue = afterSpread * (iof / 100);
  const afterIof = afterSpread + iofValue;
  const productFeeValue = afterIof * (productFee / 100);

  return {
    baseRate: exchangeRate,
    spreadValue,
    afterSpread,
    iofValue,
    afterIof,
    productFeeValue,
    finalRate,
    totalCost,
  };
};

export const calculateScenarios = (
  input: CalculationInput,
  scenarioIncrements: number[] = [0, 1, 2, 3]
): ScenarioResult[] => {
  return scenarioIncrements.map((increment) => {
    const scenarioRate = input.exchangeRate + increment;
    const scenarioInput = { ...input, exchangeRate: scenarioRate };
    const breakdown = calculateBreakdown(scenarioInput);
    const effectiveRate = scenarioRate * (1 + input.spread / 100) * (1 + input.iof / 100);

    return {
      scenario: increment === 0 ? 'Base' : `+${increment}`,
      exchangeRate: scenarioRate,
      effectiveRate,
      finalRate: breakdown.finalRate,
      totalCost: breakdown.totalCost,
    };
  });
};