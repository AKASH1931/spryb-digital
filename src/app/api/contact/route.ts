import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured yet." }, { status: 503 });
  }
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }
  const name = (body.name || "").toString().trim();
  const email = (body.email || "").toString().trim();
  const message = (body.message || "").toString().trim();
  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 5) {
    return NextResponse.json({ error: "Invalid fields." }, { status: 422 });
  }
  const resend = new Resend(apiKey);
  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const { error } = await resend.emails.send({
    from: "Spryb Website <onboarding@resend.dev>",
    to: "pg@sprybdigital.com",
    replyTo: email,
    subject: `New website query — ${esc(name)}`,
    html: `
      <h2>New query from sprybdigital.com</h2>
      <table border="1" cellpadding="8" cellspacing="0">
        <tr><td><b>Name</b></td><td>${esc(name)}</td></tr>
        <tr><td><b>Email</b></td><td>${esc(email)}</td></tr>
        <tr><td><b>Phone</b></td><td>${esc((body.phone || "").toString().trim()) || "—"}</td></tr>
        <tr><td><b>Company</b></td><td>${esc((body.company || "").toString().trim()) || "—"}</td></tr>
        <tr><td><b>Services</b></td><td>${esc((body.services || "").toString().trim()) || "—"}</td></tr>
        <tr><td><b>Message</b></td><td>${esc(message)}</td></tr>
      </table>`,
  });
  if (error) {
    return NextResponse.json({ error: "Send failed." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
