"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const inputCls =
  "bg-[#121130] border border-white/15 rounded-[10px] px-4 py-3.5 text-sm outline-none focus:border-[#D8F23F] placeholder:text-white/35 w-full";
const errCls = "text-[12px] text-[#ff8a8a] mt-1.5";

export default function ContactForm() {
  const router = useRouter();
  const [values, setValues] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: "" }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const er: Record<string, string> = {};
    if (values.name.trim().length < 2) er.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) er.email = "That email doesn't look right.";
    if (values.message.trim().length < 5) er.message = "2 lines about your goal is enough — give us something.";
    setErrors(er);
    if (Object.keys(er).length > 0) return;
    setSending(true);
    setTimeout(() => router.push("/thank-you"), 700);
  };

  return (
    <form onSubmit={submit} noValidate className="card-dark p-6 sm:p-8 grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <input placeholder="Name *" value={values.name} onChange={set("name")} className={`${inputCls} ${errors.name ? "!border-[#ff8a8a]" : ""}`} />
          {errors.name && <p className={errCls}>{errors.name}</p>}
        </div>
        <div>
          <input type="email" placeholder="Email *" value={values.email} onChange={set("email")} className={`${inputCls} ${errors.email ? "!border-[#ff8a8a]" : ""}`} />
          {errors.email && <p className={errCls}>{errors.email}</p>}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input placeholder="Phone / WhatsApp" value={values.phone} onChange={set("phone")} className={inputCls} />
        <input placeholder="Company / Brand" value={values.company} onChange={set("company")} className={inputCls} />
      </div>
      <div className="flex flex-wrap gap-2 text-[12px]">
        {["Social Media", "Content Shoot", "SEO", "Ads", "Web", "ORM", "Hyperlocal"].map((s) => (
          <label key={s} className="cursor-pointer">
            <input type="checkbox" className="peer hidden" />
            <span className="inline-block px-3.5 py-1.5 rounded-full border border-white/15 text-white/60 peer-checked:bg-gradient-spryb peer-checked:text-[#121130] peer-checked:border-transparent peer-checked:font-bold transition">{s}</span>
          </label>
        ))}
      </div>
      <div>
        <textarea rows={4} placeholder="Tell us about your goal — 2 lines is enough *" value={values.message} onChange={set("message")} className={`${inputCls} ${errors.message ? "!border-[#ff8a8a]" : ""}`} />
        {errors.message && <p className={errCls}>{errors.message}</p>}
      </div>
      <button disabled={sending} className="btn-gradient py-4 text-[15px] disabled:opacity-60">
        {sending ? "Sending…" : "Send message →"}
      </button>
      <p className="text-[12px] text-white/40 text-center">30 seconds. No spam. NDA on request.</p>
    </form>
  );
}
