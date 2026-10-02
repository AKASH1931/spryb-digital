import type { Metadata } from "next";
import WorkList from "@/components/WorkList";

export const metadata: Metadata = {
  title: "Work — Results, Not Promises",
  description:
    "See Spryb Digital's client results: +212% D2C revenue, 3.1x hotel bookings, 41k hyperlocal footfall, ₹38Cr real-estate pipeline. Proof across social, SEO, ads and ORM.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="pt-32 sm:pt-40 px-6 sm:px-10 pb-24">
      <WorkList />
    </div>
  );
}
