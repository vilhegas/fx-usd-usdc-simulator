'use client';

import { BreakdownValues } from '@/types';
import { formatCurrency } from '@/lib/formatters';

interface CalculationBreakdownProps {
  breakdown: BreakdownValues;
}

interface BreakdownItemProps {
  label: string;
  value: string;
  isHighlight?: boolean;
  isTotal?: boolean;
}

const BreakdownItem = ({ label, value, isHighlight, isTotal }: BreakdownItemProps) => (
  <div className={`
    flex justify-between items-center py-2.5 px-3 rounded-lg
    ${isTotal ? 'bg-blue-600/20 border border-blue-600/30' : ''}
    ${isHighlight && !isTotal ? 'bg-slate-800/50' : ''}
  `}>
    <span className={`text-sm ${isTotal ? 'font-semibold text-blue-400' : 'text-slate-400'}`}>
      {label}
    </span>
    <span className={`text-sm font-medium ${isTotal ? 'text-blue-400 text-lg' : 'text-slate-200'}`}>
      {value}
    </span>
  </div>
);

export const CalculationBreakdown = ({ breakdown }: CalculationBreakdownProps) => {
  const {
    baseRate,
    spreadValue,
    afterSpread,
    iofValue,
    afterIof,
    productFeeValue,
    finalRate,
    totalCost,
  } = breakdown;

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-slate-300 mb-3">
        Detalhes do Cálculo
      </h3>
      
      <div className="space-y-1">
        <BreakdownItem
          label="Taxa de câmbio base"
          value={formatCurrency(baseRate)}
        />
        
        <BreakdownItem
          label={`Spread (${((spreadValue / baseRate) * 100).toFixed(2)}%)`}
          value={`+${formatCurrency(spreadValue)}`}
          isHighlight
        />
        
        <BreakdownItem
          label="Valor após spread"
          value={formatCurrency(afterSpread)}
        />
        
        <BreakdownItem
          label={`IOF (${((iofValue / afterSpread) * 100).toFixed(2)}%)`}
          value={`+${formatCurrency(iofValue)}`}
          isHighlight
        />
        
        <BreakdownItem
          label="Valor após IOF"
          value={formatCurrency(afterIof)}
        />
        
        <BreakdownItem
          label={`Taxa de produto (${((productFeeValue / afterIof) * 100).toFixed(2)}%)`}
          value={`+${formatCurrency(productFeeValue)}`}
          isHighlight
        />
        
        <BreakdownItem
          label="Preço final por unidade"
          value={formatCurrency(finalRate)}
          isTotal
        />
      </div>

      <div className="mt-4 pt-4 border-t border-slate-700">
        <div className="flex justify-between items-center">
          <span className="text-slate-400 text-sm">Custo total</span>
          <span className="text-2xl font-bold text-green-400">
            {formatCurrency(totalCost)}
          </span>
        </div>
      </div>
    </div>
  );
};