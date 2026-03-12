'use client';

import { SectionCard } from '@/components/ui/SectionCard';
import { MarketChart } from './MarketChart';
import { AssetManager } from './AssetManager';
import { useMarketAssets } from '@/hooks/useMarketAssets';

export const MarketSection = () => {
  const {
    assets,
    selectedAsset,
    newSymbolInput,
    setNewSymbolInput,
    addAsset,
    removeAsset,
    selectAsset,
  } = useMarketAssets();

  return (
    <SectionCard title="Market Chart" className="col-span-full">
      <div className="space-y-4">
        <AssetManager
          assets={assets}
          selectedAsset={selectedAsset}
          newSymbolInput={newSymbolInput}
          onInputChange={setNewSymbolInput}
          onAddAsset={addAsset}
          onRemoveAsset={removeAsset}
          onSelectAsset={selectAsset}
        />
        <MarketChart asset={selectedAsset} />
      </div>
    </SectionCard>
  );
};