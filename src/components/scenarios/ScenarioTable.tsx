'use client';

import { ScenarioResult } from '@/types';
import { formatCurrency } from '@/lib/formatters';

interface ScenarioTableProps {
  scenarios: ScenarioResult[];
}

export const ScenarioTable = ({ scenarios }: ScenarioTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="text-left py-3 px-4 text-sm font-semibold text-slate-400">
              Cenário
            </th>
            <th className="text-right py-3 px-4 text-sm font-semibold text-slate-400">
              Taxa de câmbio
            </th>
            <th className="text-right py-3 px-4 text-sm font-semibold text-slate-400">
              Taxa efetiva
            </th>
            <th className="text-right py-3 px-4 text-sm font-semibold text-slate-400">
              Taxa final
            </th>
            <th className="text-right py-3 px-4 text-sm font-semibold text-slate-400">
              Custo total
            </th>
          </tr>
        </thead>
        <tbody>
          {scenarios.map((scenario, index) => (
            <tr
              key={scenario.scenario}
              className={`
                border-b border-slate-800 last:border-0
                ${index === 0 ? 'bg-blue-600/5' : 'hover:bg-slate-800/30'}
                transition-colors
              `}
            >
              <td className="py-3 px-4">
                <span className={`
                  inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${index === 0
                    ? 'bg-blue-600/20 text-blue-400'
                    : 'bg-slate-700 text-slate-300'
                  }
                `}>
                  {scenario.scenario === 'Base' ? 'Base' : `Câmbio ${scenario.scenario}`}
                </span>
              </td>
              <td className="py-3 px-4 text-right text-slate-300">
                {formatCurrency(scenario.exchangeRate)}
              </td>
              <td className="py-3 px-4 text-right text-slate-300">
                {formatCurrency(scenario.effectiveRate)}
              </td>
              <td className="py-3 px-4 text-right text-slate-200 font-medium">
                {formatCurrency(scenario.finalRate)}
              </td>
              <td className="py-3 px-4 text-right">
                <span className="text-green-400 font-semibold">
                  {formatCurrency(scenario.totalCost)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};