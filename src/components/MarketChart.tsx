"use client";

import { useEffect, useRef } from "react";
import { MarketSymbol } from "@/types";

type Props = {
  symbol: MarketSymbol;
};

export function MarketChart({ symbol }: Props) {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!container.current) return;

    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol,
      interval: "30",
      timezone: "America/Sao_Paulo",
      theme: "dark",
      style: "1",
      locale: "br",
      allow_symbol_change: true,
      support_host: "https://www.tradingview.com",
    });

    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget";

    container.current.appendChild(widget);
    container.current.appendChild(script);
  }, [symbol]);

  return (
    <div className="h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
      <div ref={container} className="tradingview-widget-container h-full w-full" />
    </div>
  );
}