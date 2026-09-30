"use client";
import { useState } from "react";
import Link from "next/link";

/** Mobile CTA band — static, sits below footer (not sticky) */
export default function StickyCta() {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className="sm:hidden bg-[#0C0B22] px-4 pt-2 pb-[max(1rem,env(safe-area-inset-bottom))]">
      <div className="bg-[#1A1940] border border-white/15 rounded-2xl px-4 py-3.5 flex items-center gap-3">
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
