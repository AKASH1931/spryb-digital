import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import BookingWidget from "@/components/BookingWidget";

export const metadata: Metadata = {
  title: "Contact — Get a Free Teardown",
  description:
    "Tell Spryb Digital everything in 30 seconds. Get a free teardown and fixed quote within 24 hours: hello@sprybdigital.com. Call +91 73079 34372.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="pt-32 sm:pt-40 px-6 sm:px-10 pb-24">
      <div className="mx-auto max-w-[1100px] grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <p className="section-label">Contact</p>
          <h1 className="font-display text-[14vw] sm:text-[90px]">TELL US <br /><span className="text-gradient">EVERYTHING.</span></h1>
          <p className="text-[#121130]/70 mt-5 text-[16px]">A mini form, 30 seconds. We get your answers and come back fast.</p>
          <div className="mt-8 text-[15px]">
            <div className="border-t border-[#121130]/12 py-4 flex items-baseline justify-between gap-4">
              <span className="text-[12px] uppercase tracking-widest text-[#121130]/45">Email</span>
              <a href="mailto:hello@sprybdigital.com" className="font-bold tlink-dark text-right">hello@sprybdigital.com</a>
            </div>
            <div className="border-t border-[#121130]/12 py-4 flex items-baseline justify-between gap-4">
              <span className="text-[12px] uppercase tracking-widest text-[#121130]/45">Phone</span>
              <a href="tel:+917307934372" className="font-bold tlink-dark">+91 73079 34372</a>
            </div>
            <div className="border-t border-b border-[#121130]/12 py-4 flex items-baseline justify-between gap-4">
              <span className="text-[12px] uppercase tracking-widest text-[#121130]/45">Hours</span>
              <span className="text-right text-[#121130]/70">Mon–Sat · 10am–7pm IST</span>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>

      <div className="mx-auto max-w-[1100px] mt-16">
        <p className="section-label">Free discovery call</p>
        <h2 className="font-display text-[11vw] sm:text-[70px]">PICK A SLOT. <span className="text-gradient">WE CALL YOU.</span></h2>
        <p className="text-[#121130]/65 text-[15px] mt-3 max-w-[60ch]">Mon–Sat, 10 AM–7 PM IST. Next 7 days open — grab 30 minutes, no pitch-slapping, promise.</p>
        <div className="mt-8">
          <BookingWidget />
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] mt-16 grid sm:grid-cols-2 gap-6">
        <div>
          <p className="text-[12px] uppercase tracking-widest text-[#0e9f5b] font-medium">Gurgaon Office</p>
          <p className="text-[#121130]/70 text-[15px] mt-2">Plot no. 744, Phase-5, Udyog Vihar, Sec 19, Gurugram, Haryana — 122016</p>
        </div>
        <div>
          <p className="text-[12px] uppercase tracking-widest text-[#0e9f5b] font-medium">Lucknow Office · Current</p>
          <p className="text-[#121130]/70 text-[15px] mt-2">C 401, Sahara Plaza, Patrakarpuram Crossing Rd, Vikas Khand 1, Gomti Nagar, Lucknow, UP — 226010</p>
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] mt-8 rounded-[24px] p-[3px] bg-gradient-spryb shadow-[0_24px_70px_rgba(79,234,115,0.3)]">
        <div className="rounded-[21px] overflow-hidden bg-white">
          <iframe
            title="Spryb Digital on map"
            src="https://maps.google.com/maps?q=C%20401%2C%20Sahara%20Plaza%2C%20Patrakarpuram%2C%20Gomti%20Nagar%2C%20Lucknow%20226010&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[340px] sm:h-[400px]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
