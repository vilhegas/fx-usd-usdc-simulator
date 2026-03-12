'use client';

import { MarketAsset } from '@/types';

interface AssetManagerProps {
  assets: MarketAsset[];
  selectedAsset: MarketAsset;
  newSymbolInput: string;
  onInputChange: (value: string) => void;
  onAddAsset: () => void;
  onRemoveAsset: (id: string) => void;
  onSelectAsset: (asset: MarketAsset) => void;
}

export const AssetManager = ({
  assets,
  selectedAsset,
  newSymbolInput,
  onInputChange,
  onAddAsset,
  onRemoveAsset,
  onSelectAsset,
}: AssetManagerProps) => {
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={newSymbolInput}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder="Por exemplo: BINANCE:SOLUSDT"
          className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
          onKeyDown={(e) => e.key === 'Enter' && onAddAsset()}
        />
        <button
          onClick={onAddAsset}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm"
        >
          Adicionar
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {assets.map((asset) => (
          <div
            key={asset.id}
            className={`
              group flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium transition-all
              ${selectedAsset.id === asset.id
                ? 'bg-blue-600/20 border-blue-600 text-blue-400'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600'
              }
            `}
          >
            <button
              onClick={() => onSelectAsset(asset)}
              className="flex items-center gap-2"
            >
              <span className={`
                w-2 h-2 rounded-full
                ${asset.category === 'crypto' ? 'bg-orange-500' : 'bg-green-500'}
              `} />
              {asset.name}
            </button>
            {assets.length > 1 && (
              <button
                onClick={() => onRemoveAsset(asset.id)}
                className="ml-1 text-slate-500 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};