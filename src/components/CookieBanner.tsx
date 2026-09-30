"use client";
import { useEffect, useState } from "react";

const KEY = "spryb-cookie-consent";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);
  const choose = (v: string) => {
    try {
      localStorage.setItem(KEY, v);
    } catch {
      /* ignore */
    }
    setShow(false);
  };
  if (!show) return null;
  return (
    <div className="fixed bottom-20 sm:bottom-4 inset-x-3 sm:left-auto sm:right-6 sm:max-w-[380px] z-[60]">
      <div className="bg-[#121130] text-white rounded-2xl border border-white/15 shadow-[0_20px_60px_rgba(18,17,48,0.4)] p-5">
        <p className="font-display text-lg">COOKIES, BUT TINY.</p>
        <p className="text-white/60 text-[13px] mt-2">
          We remember your choice and run basic analytics. No ads, no creepy tracking. Details in{" "}
          <a href="/privacy" className="underline underline-offset-4 text-[#D8F23F]">Privacy</a>.
        </p>
        <div className="flex gap-2 mt-4">
          <button onClick={() => choose("all")} className="btn-gradient flex-1 !py-2.5 text-[13px]">Accept</button>
          <button onClick={() => choose("essential")} className="flex-1 border border-white/25 rounded-[10px] text-[13px] py-2.5 hover:border-[#D8F23F] hover:text-[#D8F23F] transition">
            Essential only
          </button>
        </div>
      </div>
    </div>
  );
}
