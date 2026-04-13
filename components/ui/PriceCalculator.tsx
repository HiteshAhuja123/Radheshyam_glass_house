"use client";
import { useState } from "react";
import { BASE_RATE_PER_SQFT, WHATSAPP_NUMBER } from "@/lib/constants";

interface Props {
  baseRate?: number;
  customizationNote?: string;
}

export default function PriceCalculator({ baseRate = BASE_RATE_PER_SQFT, customizationNote }: Props) {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");

  const sqft = parseFloat(height) * parseFloat(width);
  const isValid = sqft > 0 && !isNaN(sqft);
  const minPrice = isValid ? Math.round(sqft * baseRate) : null;
  const maxPrice = isValid ? Math.round(sqft * baseRate * 1.3) : null;

  // ✅ Moved inside isValid check — only built when needed
  const waMessage = isValid
    ? `Hi! I'd like a quote for a ${height}ft x ${width}ft mirror/glass installation (approx. ${sqft.toFixed(1)} sq.ft.).`
    : "";

  return (
    <div className="bg-white/5 border border-gold/25 rounded p-7 max-w-xl">
      <div className="grid grid-cols-2 gap-4 mb-5">
        {([["Height (feet)", height, setHeight], ["Width (feet)", width, setWidth]] as const).map(([label, value, setter]) => (
          <div key={label} className="flex flex-col gap-1.5">
            <label className="font-body text-[10px] tracking-widest uppercase text-white/50">{label}</label>
            <input
              type="number" min={0.5} step={0.5} value={value}
              onChange={(e) => setter(e.target.value)} placeholder="height"
              className="bg-white/[0.06] border border-gold/30 text-black px-3.5 py-2.5 rounded-sm text-base outline-none focus:border-gold transition-colors"
            />
          </div>
        ))}
      </div>
      <div className="bg-gold/10 border border-gold/30 rounded px-5 py-4 flex justify-between items-center">
        <div>
          <p className="font-body text-[10px] tracking-widest uppercase text-white/50 mb-1">Estimated cost</p>
          <p className="text-gold text-2xl font-medium">
            {isValid
              ? `Rs.${minPrice!.toLocaleString("en-IN")} - Rs.${maxPrice!.toLocaleString("en-IN")}`
              : "Enter dimensions above"}
          </p>
        </div>
        <div className="text-right">
          <p className="font-body text-[10px] tracking-widest uppercase text-white/30">Base rate</p>
          {/* ✅ Safe null check on baseRate */}
          <p className="text-white/50 text-sm mt-0.5">Rs.{baseRate?.toLocaleString("en-IN") ?? "N/A"} / sq. ft.</p>
        </div>
      </div>
      {customizationNote && (
        <p className="font-body text-xs text-white/35 mt-3">{customizationNote}</p>
      )}
      <p className="font-body text-xs text-white/30 mt-2">
        * Custom finishes, coloured glass and LED integration — contact for exact quote
      </p>
      {isValid && (
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`}
          target="_blank" rel="noopener noreferrer"
          className="mt-5 inline-block bg-gold text-charcoal font-body text-[11px] font-medium tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-gold-light transition-colors"
        >
          Get Custom Quote on WhatsApp
        </a>
      )}
    </div>
  );
}