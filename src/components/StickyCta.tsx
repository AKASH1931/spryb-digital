"use client";
import { useState } from "react";
import Link from "next/link";

/** Sticky mobile CTA — phones only, dismissible */
export default function StickyCta() {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="bg-[#121130] border border-white/15 rounded-2xl shadow-[0_-8px_40px_rgba(18,17,48,0.35)] px-4 py-3 flex items-center gap-3">
        <div className="text-[13px] text-white font-medium leading-tight">
          Ready to grow?
          <br />
          <span className="text-white/55 text-[12px]">Free teardown in 24 hrs</span>
        </div>
        <Link href="/contact" className="btn-gradient ml-auto !py-2.5 !px-4 text-[13px] whitespace-nowrap">
          Get proposal →
        </Link>
        <button onClick={() => setShow(false)} aria-label="Dismiss" className="text-white/50 text-lg leading-none px-1">
          ✕
        </button>
      </div>
    </div>
  );
}
