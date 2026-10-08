import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thanks for reaching out to Spryb Digital. We'll reply within 24 hours.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="pt-40 pb-24 px-6 text-center">
      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-spryb grid place-items-center text-3xl text-[#121130] font-black">
        ✓
      </div>
      <h1 className="font-display text-[14vw] sm:text-[90px] mt-6">
        THANK <span className="text-gradient">YOU.</span>
      </h1>
      <p className="text-[#121130]/65 text-[17px] max-w-[48ch] mx-auto mt-4">
        We got your message. Expect a reply within 24 hours with a free teardown and next steps.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/work" className="btn-gradient">See our proof →</Link>
        <Link href="/" className="btn-ghost">Back home</Link>
      </div>
    </div>
  );
}
