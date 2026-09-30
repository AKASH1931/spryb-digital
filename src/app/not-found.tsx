import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-40 pb-24 px-6 text-center">
      <p className="section-label">Oops — lost signal</p>
      <h1 className="font-display text-[30vw] sm:text-[180px] leading-[0.85]">
        4<span className="text-gradient">0</span>4
      </h1>
      <p className="text-[#121130]/65 text-[17px] max-w-[46ch] mx-auto mt-4">
        This page went off the grid. Let&apos;s get you back where the signal is strong.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-gradient">Back home →</Link>
        <Link href="/contact" className="btn-ghost">Talk to us</Link>
      </div>
    </div>
  );
}
