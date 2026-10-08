"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Member = {
  name: string;
  role: string;
  img: string;
  pos?: string;
  bio: string;
};

/** 3D tilt on hover + scroll reveal + lime glow */
export default function TeamCard({ m, i }: { m: Member; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 10}deg) rotateY(${x * 12}deg) translateY(-6px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transitionDelay: `${(i % 3) * 90}ms` }}
      className={`card-dark p-6 group transition-all duration-500 hover:border-[#D8F23F]/60 hover:shadow-[0_20px_60px_rgba(216,242,63,0.18)] ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="h-44 rounded-[14px] overflow-hidden relative">
        <Image
          src={m.img}
          alt={m.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          style={{ objectPosition: m.pos }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121130]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <p className="text-[11px] tracking-[0.25em] uppercase text-[#4FEA73] mt-4 group-hover:text-[#D8F23F] transition-colors">{m.role}</p>
      <div className="font-display text-2xl mt-1">{m.name}</div>
      <p className="text-white/55 text-[13px] mt-2 leading-relaxed">{m.bio}</p>
    </div>
  );
}
