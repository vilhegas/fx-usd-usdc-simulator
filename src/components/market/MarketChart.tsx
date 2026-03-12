'use client';

import { useEffect, useRef } from 'react';
import { MarketAsset } from '@/types';

interface MarketChartProps {
  asset: MarketAsset;
}

declare global {
  interface Window {
    TradingView: any;
  }
}

export const MarketChart = ({ asset }: MarketChartProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const loadTradingView = () => {
      if (window.TradingView) {
        renderChart();
      } else if (!scriptLoaded.current) {
        scriptLoaded.current = true;
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;
        script.onload = renderChart;
        document.head.appendChild(script);
      }
    };

    const renderChart = () => {
      if (containerRef.current && window.TradingView) {
        containerRef.current.innerHTML = '';
        
        new window.TradingView.widget({
          autosize: true,
          symbol: asset.symbol,
          interval: '30',
          timezone: 'America/Sao_Paulo',
          theme: 'dark',
          style: '1',
          locale: 'br',
          toolbar_bg: '#0f172a',
          enable_publishing: false,
          allow_symbol_change: false,
          container_id: containerRef.current.id,
          hide_side_toolbar: false,
          hide_legend: false,
          save_image: false,
          backgroundColor: '#0f172a',
          gridColor: '#1e293b',
          studies: ['MACD@tv-basicstudies'],
        });
      }
    };

    loadTradingView();
  }, [asset.symbol]);

  return (
    <div className="w-full h-[500px] bg-slate-950 rounded-lg overflow-hidden">
      <div 
        id={`tradingview-chart-${asset.id}`}
        ref={containerRef} 
        className="w-full h-full"
      />
    </div>
  );
};