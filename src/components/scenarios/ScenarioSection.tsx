'use client';

import { SectionCard } from '@/components/ui/SectionCard';
import { ScenarioTable } from './ScenarioTable';
import { ScenarioResult } from '@/types';

interface ScenarioSectionProps {
  scenarios: ScenarioResult[];
}

export const ScenarioSection = ({ scenarios }: ScenarioSectionProps) => {
  return (
    <SectionCard title="Scenario Simulation">
      <div className="space-y-4">
        <ScenarioTable scenarios={scenarios} />
      </div>
    </SectionCard>
  );
};