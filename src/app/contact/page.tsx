import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Get a Free Teardown",
  description:
    "Tell Spryb Digital everything in 30 seconds. Get a free teardown and fixed quote within 24 hours: hello@sprybdigital.com. Sprints from ₹35k/mo.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="pt-32 sm:pt-40 px-6 sm:px-10 pb-24">
      <div className="mx-auto max-w-[1100px] grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <p className="section-label">Contact</p>
          <h1 className="font-display text-[14vw] sm:text-[90px]">TELL US <br /><span className="text-gradient">EVERYTHING.</span></h1>
          <p className="text-[#121130]/70 mt-5 text-[16px]">A mini form, 30 seconds. We get your answers and come back fast.</p>
          <div className="mt-8 space-y-3 text-[15px]">
            <div className="card-dark p-5"><span className="text-white/45 text-[12px] uppercase tracking-widest">Email</span><p className="font-bold text-[#D8F23F]">hello@sprybdigital.com</p></div>
            <div className="card-dark p-5"><span className="text-white/45 text-[12px] uppercase tracking-widest">Hours</span><p>Mon–Sat, 10am–7pm IST · Remote-first, shoots on-site across India</p></div>
            <div className="card-dark p-5"><span className="text-white/45 text-[12px] uppercase tracking-widest">Pricing</span><p>Sprints from ₹35k/mo · Full-stack from ₹65k/mo · Ad spend separate</p></div>
          </div>
        </div>
        <ContactForm />
      </div>
      <div className="mx-auto max-w-[1100px] mt-10 grid lg:grid-cols-[1fr_1.2fr] gap-4 items-stretch">
        <div className="grid gap-3 content-start">
          <div className="card-dark p-5">
            <span className="text-white/45 text-[12px] uppercase tracking-widest">Gurgaon Office</span>
            <p className="mt-1">Plot no. 744, Phase-5, Udyog Vihar, Sec 19, Gurugram, Haryana — 122016</p>
          </div>
          <div className="card-dark p-5">
            <span className="text-white/45 text-[12px] uppercase tracking-widest">Lucknow Office · Current</span>
            <p className="mt-1">C 401, Sahara Plaza, Patrakarpuram Crossing Rd, Vikas Khand 1, Gomti Nagar, Lucknow, UP — 226010</p>
          </div>
        </div>
        <div className="card-dark overflow-hidden !p-0 min-h-[320px]">
          <iframe
            title="Spryb Digital on map"
            src="https://maps.google.com/maps?q=C%20401%2C%20Sahara%20Plaza%2C%20Patrakarpuram%2C%20Gomti%20Nagar%2C%20Lucknow%20226010&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full min-h-[320px] grayscale-[20%]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
