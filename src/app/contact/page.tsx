import { ContactForm } from "@/components/ui";

export default function ContactPage() {
  return (
    <div className="pt-32 sm:pt-40 px-6 sm:px-10 pb-24">
      <div className="mx-auto max-w-[1100px] grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <p className="text-[12px] tracking-[0.3em] uppercase text-[#4FEA73]">Contact</p>
          <h1 className="font-display text-[14vw] sm:text-[90px] leading-[0.88]">TELL US <br/><span className="text-gradient">EVERYTHING.</span></h1>
          <p className="text-white/65 mt-5 text-[16px]">Simple form, 30 seconds. We reply within 24 hours with a free teardown + fixed quote.</p>
          <div className="mt-8 space-y-3 text-[15px]">
            <div className="card-dark p-5"><span className="text-white/45 text-[12px] uppercase tracking-widest">Email</span><p className="font-bold text-[#D8F23F]">hello@spryb.digital</p></div>
            <div className="card-dark p-5"><span className="text-white/45 text-[12px] uppercase tracking-widest">Hours</span><p>Mon–Sat, 10am–7pm IST · Remote-first, shoots on-site across India</p></div>
            <div className="card-dark p-5"><span className="text-white/45 text-[12px] uppercase tracking-widest">Pricing</span><p>Sprints from ₹35k/mo · Full-stack from ₹65k/mo · Ad spend separate</p></div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
