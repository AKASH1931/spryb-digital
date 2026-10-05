"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { expertises } from "@/data/site";

const IMAGES = [
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
  "https://images.pexels.com/photos/19921713/pexels-photo-19921713.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  "https://images.pexels.com/photos/3851254/pexels-photo-3851254.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
  "https://images.pexels.com/photos/8939052/pexels-photo-8939052.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80",
];

/** Mobile-only tap accordion for services */
export default function ServicesAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <div className="mt-8 space-y-3">
      {expertises.map((e, i) => {
        const isOpen = open === i;
        return (
          <div key={e.title} className={`rounded-[20px] overflow-hidden border transition-colors ${isOpen ? "bg-[#1A1940] border-transparent" : "bg-white border-[#121130]/12"}`}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center gap-4 p-5 text-left"
            >
              <span className={`font-display text-2xl ${isOpen ? "text-[#D8F23F]" : "text-[#0e9f5b]"}`}>0{i + 1}</span>
              <span className={`font-display text-xl flex-1 ${isOpen ? "text-white" : "text-[#121130]"}`}>{e.title}</span>
              <span className={`w-9 h-9 shrink-0 rounded-full grid place-items-center font-bold transition-transform duration-300 ${isOpen ? "bg-gradient-spryb text-[#121130] rotate-45" : "border border-[#121130]/20 text-[#121130]"}`}>
                +
              </span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <div className="px-5 pb-5">
                  <div className="relative h-44 rounded-[14px] overflow-hidden">
                    <Image src={IMAGES[i % IMAGES.length]} alt={e.title} fill className="object-cover" sizes="100vw" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {e.points.map((p) => (
                      <span key={p} className="text-[12px] text-white/80 bg-white/[0.07] border border-white/15 rounded-full px-3 py-1.5">→ {p}</span>
                    ))}
                  </div>
                  <Link href="/contact" className="btn-gradient mt-4 inline-block !py-2.5 !px-5 text-[13px]">
                    Get quote →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
