"use client";
import { useState } from "react";
import Link from "next/link";
import { expertises } from "@/data/site";

export default function ServiceRows() {
  const [open, setOpen] = useState(0);
  return (
    <div>
      {expertises.map((e, i) => {
        const isOpen = open === i;
        return (
          <div key={e.title} className="border-t border-[#121130]/15 last:border-b">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="group w-full grid grid-cols-[auto_1fr_auto] gap-4 sm:gap-8 items-center py-6 sm:py-8 text-left px-2 sm:px-4 -mx-2 sm:-mx-4"
            >
              <span className="font-display text-4xl sm:text-6xl text-stroke">0{i + 1}</span>
              <span className="font-display text-3xl sm:text-5xl">{e.title}</span>
              <span className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full grid place-items-center text-xl border transition-all duration-300 ${isOpen ? "bg-gradient-spryb border-transparent text-[#121130] rotate-90" : "border-[#121130]/20"}`}>
                →
              </span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <div className="pb-7 sm:pb-9 pl-[52px] sm:pl-[96px] pr-2">
                  <p className="text-[14px] sm:text-[15px] text-[#121130]/65 max-w-[62ch]">
                    Everything under {e.title} — scoped to your brand, city and goal. No copy-paste packs.
                  </p>
                  <ul className="mt-4 grid sm:grid-cols-2 gap-2 max-w-[640px]">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-[14px] sm:text-[15px] font-medium">
                        <span className="text-[#0e9f5b] font-bold">→</span> {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href="/contact" className="btn-gradient !py-3 !px-6 text-sm">
                      Book a discovery call →
                    </Link>
                    <Link href="/work" className="btn-ghost !py-3 !px-6 text-sm">
                      See proof
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
