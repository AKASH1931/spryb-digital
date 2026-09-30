import { build } from "@/lib/llms";

export function GET() {
  return new Response(build(true), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
