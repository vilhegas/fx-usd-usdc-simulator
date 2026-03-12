'use client';

import { DashboardHeader } from '@/components/header/DashboardHeader';
import { MarketSection } from '@/components/market/MarketSection';
import { CalculatorSection } from '@/components/calculator/CalculatorSection';
import { ScenarioSection } from '@/components/scenarios/ScenarioSection';
import { useCalculator } from '@/hooks/useCalculator';

export default function Home() {
  // Hook compartilhado - mesma instância para Calculator e Scenario
  const calculator = useCalculator();

  return (
    <div className="min-h-screen bg-slate-950">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Market Chart - Full Width */}
          <div className="lg:col-span-3">
            <MarketSection />
          </div>
          
          {/* Calculator - 2 columns */}
          <div className="lg:col-span-2">
            <CalculatorSection calculator={calculator} />
          </div>
          
          {/* Scenarios - 1 column */}
          <div className="lg:col-span-1">
            <ScenarioSection scenarios={calculator.scenarios} />
          </div>
        </div>
      </main>
      
      <footer className="border-t border-white/10 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-slate-500">
            Diretos reservados Caique Vilhegas
          </p>
        </div>
      </footer>
    </div>
  );
}