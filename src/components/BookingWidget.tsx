"use client";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const errCls = "text-[12px] text-[#ff8a8a] mt-1.5";

function nextDays(): Date[] {
  const out: Date[] = [];
  const d = new Date();
  while (out.length < 7) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() !== 0) out.push(new Date(d));
  }
  return out;
}

function slots(): string[] {
  const list: string[] = [];
  for (let h = 10; h < 19; h++) {
    for (const m of [0, 30]) {
      if (h === 18 && m === 30) continue;
      const ap = h < 12 ? "AM" : "PM";
      const hr = h <= 12 ? h : h - 12;
      list.push(`${hr}:${m === 0 ? "00" : "30"} ${ap}`);
    }
  }
  return list;
}

const ALL_SLOTS = slots();

export default function BookingWidget() {
  const router = useRouter();
  const days = useMemo(nextDays, []);
  const [day, setDay] = useState(0);
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

  const isToday = useMemo(() => {
    const t = new Date();
    return days[day] && days[day].toDateString() === t.toDateString();
  }, [days, day]);

  const slotDisabled = (s: string) => {
    if (!isToday) return false;
    const m = s.match(/(\d+):(\d+) (AM|PM)/)!;
    let h = parseInt(m[1]) % 12;
    if (m[3] === "PM") h += 12;
    const dt = new Date();
    dt.setHours(h, parseInt(m[2]), 0, 0);
    return dt.getTime() < Date.now() + 60 * 60 * 1000;
  };

  const fmtDay = (d: Date) =>
    d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const er: Record<string, string> = {};
    if (name.trim().length < 2) er.name = "Please tell us your name.";
    if (!/^[+\d][\d\s-]{7,14}$/.test(phone.trim())) er.phone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) er.email = "That email doesn't look right.";
    if (!time) er.time = "Pick a time slot.";
    setErrors(er);
    if (Object.keys(er).length > 0) return;
    setSending(true);
    setFailed(false);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "8d41f39f-8f5c-457c-9a96-1951513c9eda",
          subject: `Discovery call booked — ${fmtDay(days[day])}, ${time}`,
          from_name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          service: service || "Not selected",
          message: `Discovery call request.\nName: ${name.trim()}\nPhone: ${phone.trim()}\nEmail: ${email.trim()}\nService: ${service || "Not selected"}\nSlot: ${fmtDay(days[day])} at ${time} IST\nWe call them — please call on time.`,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success !== true) throw new Error("send failed");
      router.push("/thank-you");
    } catch {
      setSending(false);
      setFailed(true);
    }
  };

  return (
    <form onSubmit={submit} noValidate className="card-dark p-6 sm:p-8 text-white">
      <div className="flex flex-wrap gap-2">
        {days.map((d, i) => (
          <button
            key={d.toISOString()}
            type="button"
            onClick={() => { setDay(i); setTime(""); }}
            className={`px-4 py-2.5 rounded-[10px] text-[13px] font-medium border transition ${
              day === i
                ? "bg-gradient-spryb text-[#121130] border-transparent font-bold"
                : "border-white/20 text-white/70 hover:border-[#D8F23F] hover:text-white"
            }`}
          >
            {fmtDay(d)}
          </button>
        ))}
      </div>
      <p className="text-[11px] uppercase tracking-widest text-white/40 mt-6 mb-3">Pick a time (IST) — Mon to Sat, 10 AM to 7 PM</p>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
        {ALL_SLOTS.map((s) => {
          const off = slotDisabled(s);
          const active = time === s;
          return (
            <button
              key={s}
              type="button"
              disabled={off}
              onClick={() => setTime(s)}
              className={`py-2.5 rounded-[10px] text-[13px] font-medium border transition ${
                active
                  ? "bg-gradient-spryb text-[#121130] border-transparent font-bold"
                  : off
                    ? "border-white/10 text-white/25 line-through cursor-not-allowed"
                    : "border-white/20 text-white/70 hover:border-[#D8F23F] hover:text-white"
              }`}
            >
              {s}
            </button>
          );
        })}
      </div>
      {errors.time && <p className="text-[12px] text-[#ff8a8a] mt-2">{errors.time}</p>}
      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        <div>
          <input
            placeholder="Name *"
            value={name}
            onChange={(e) => { setName(e.target.value); setErrors((x) => ({ ...x, name: "" })); }}
            className="bg-[#121130] border border-white/15 rounded-[10px] px-4 py-3.5 text-sm outline-none focus:border-[#D8F23F] placeholder:text-white/35 w-full"
          />
          {errors.name && <p className={errCls}>{errors.name}</p>}
        </div>
        <div>
          <input
            placeholder="Phone *"
            value={phone}
            onChange={(e) => { setPhone(e.target.value); setErrors((x) => ({ ...x, phone: "" })); }}
            className="bg-[#121130] border border-white/15 rounded-[10px] px-4 py-3.5 text-sm outline-none focus:border-[#D8F23F] placeholder:text-white/35 w-full"
          />
          {errors.phone && <p className={errCls}>{errors.phone}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email *"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setErrors((x) => ({ ...x, email: "" })); }}
            className="bg-[#121130] border border-white/15 rounded-[10px] px-4 py-3.5 text-sm outline-none focus:border-[#D8F23F] placeholder:text-white/35 w-full"
          />
          {errors.email && <p className={errCls}>{errors.email}</p>}
        </div>
        <div>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={`bg-[#121130] border border-white/15 rounded-[10px] px-4 py-3.5 text-sm outline-none focus:border-[#D8F23F] w-full ${service ? "text-white" : "text-white/35"}`}
          >
            <option value="" disabled>What do you need help with?</option>
            {["Social Media Strategy", "Content Production", "Community Management", "SEO & Search", "Performance Ads", "Web & Branding", "ORM & Reputation", "Hyperlocal Marketing", "Not sure yet"].map((s) => (
              <option key={s} value={s} className="text-black">{s}</option>
            ))}
          </select>
        </div>
      </div>
      {time && (
        <p className="text-[13px] text-[#D8F23F] mt-4">
          Your slot: <b>{fmtDay(days[day])} at {time} IST</b> — our team will call you.
        </p>
      )}
      <button disabled={sending} className="btn-gradient w-full py-4 text-[15px] mt-5 disabled:opacity-60">
        {sending ? "Booking…" : "Book discovery call →"}
      </button>
      {failed && (
        <p className="text-[13px] text-[#ff8a8a] text-center mt-3">
          Couldn&apos;t book right now. Please call us at{" "}
          <a href="tel:+917307934372" className="underline">+91 73079 34372</a>.
        </p>
      )}
    </form>
  );
}
