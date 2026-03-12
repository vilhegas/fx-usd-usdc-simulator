'use client';

import { ProductType } from '@/types';

interface ProductSelectorProps {
  products: ProductType[];
  selected: ProductType;
  onSelect: (product: ProductType) => void;
}

export const ProductSelector = ({ products, selected, onSelect }: ProductSelectorProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-300">
        Tipo de produto
      </label>
      <div className="grid grid-cols-3 gap-2">
        {products.map((product) => (
          <button
            key={product}
            onClick={() => onSelect(product)}
            className={`
              px-3 py-2.5 rounded-lg text-sm font-medium transition-all
              ${selected === product
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-600'
              }
            `}
          >
            {product}
          </button>
        ))}
      </div>
    </div>
  );
};