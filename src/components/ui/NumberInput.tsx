'use client';

import { ChangeEvent } from 'react';

interface NumberInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
  prefix?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const NumberInput = ({
  label,
  value,
  onChange,
  min = 0,
  max,
  step = 0.01,
  suffix,
  prefix,
  placeholder,
  disabled = false,
}: NumberInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      onChange(newValue);
    } else {
      onChange(0);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-300">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          placeholder={placeholder}
          className={`
            w-full bg-slate-800 border border-slate-700 rounded-lg
            px-4 py-2.5 text-slate-100 placeholder-slate-500
            focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-all duration-200
            ${prefix ? 'pl-8' : ''}
            ${suffix ? 'pr-8' : ''}
          `}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
};