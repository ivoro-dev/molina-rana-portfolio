"use client";

interface MarqueeTickerProps {
  text?: string;
  className?: string;
}

export function MarqueeTicker({
  text = "EXPERTISE • MARTECH • BRAND STRATEGY • DEMAND GEN • EXPERTISE • MARTECH •",
  className = "",
}: MarqueeTickerProps) {
  const content = `${text} ${text} `;

  return (
    <div
      className={`overflow-hidden whitespace-nowrap pointer-events-none select-none ${className}`}
    >
      <div className="inline-flex animate-marquee">
        <span className="shrink-0">{content}</span>
        <span className="shrink-0">{content}</span>
      </div>
    </div>
  );
}
