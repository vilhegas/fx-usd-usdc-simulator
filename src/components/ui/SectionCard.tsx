'use client';

import { ReactNode } from 'react';

interface SectionCardProps {
  children: ReactNode;
  title: string;
  className?: string;
}

export const SectionCard = ({ children, title, className = '' }: SectionCardProps) => {
  return (
    <div className={`bg-slate-900 rounded-xl shadow-lg border border-white/10 overflow-hidden ${className}`}>
      <div className="px-6 py-4 border-b border-white/10 bg-slate-800/50">
        <h2 className="text-lg font-semibold text-slate-100">{title}</h2>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};