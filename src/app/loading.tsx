export default function Loading() {
  return (
    <div className="py-40 px-6 text-center">
      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-spryb animate-float grid place-items-center text-2xl text-[#121130] font-black">
        ↑
      </div>
      <p className="font-display text-3xl mt-6">CHARGING UP<span className="text-gradient">…</span></p>
    </div>
  );
}
