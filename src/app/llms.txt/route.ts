import { build } from "@/lib/llms";

export function GET() {
  return new Response(build(false), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
