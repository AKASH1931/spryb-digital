import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import StickyCta from "@/components/StickyCta";
import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://sprybdigital.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Spryb Digital — Digital Marketing Agency India | SEO, Ads, Social Media, ORM",
    template: "%s | Spryb Digital",
  },
  description:
    "Spryb Digital is a full-stack digital marketing agency in India: Social Media Strategy, Content Production, Community Management, SEO, Performance Ads, Web & Branding, ORM and Hyperlocal Marketing. We make brands impossible to ignore.",
  keywords: [
    "digital marketing agency india",
    "social media agency india",
    "seo services india",
    "performance marketing agency",
    "meta ads agency india",
    "content production agency",
    "community management services",
    "online reputation management india",
    "hyperlocal marketing",
    "web design agency india",
    "spryb digital",
  ],
  authors: [{ name: "Spryb Digital" }],
  creator: "Spryb Digital",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Spryb Digital",
    title: "Spryb Digital — Digital Marketing Agency India",
    description:
      "Full-stack growth: social media, content, SEO, performance ads, web, ORM & hyperlocal. One team turning attention into revenue.",
    images: [
      {
        url: "https://spryb-digital.vercel.app/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Spryb Digital — We make brands impossible to ignore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spryb Digital — Digital Marketing Agency India",
    description:
      "Social media, content, SEO, performance ads, web, ORM & hyperlocal. We make brands impossible to ignore.",
    images: ["https://spryb-digital.vercel.app/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Spryb Digital",
  url: SITE_URL,
  email: "hello@sprybdigital.com",
  telephone: "+91-7307934372",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C 401, Sahara Plaza, Patrakarpuram Crossing Rd, Vikas Khand 1",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: "226010",
    addressCountry: "IN",
  },
  description:
    "Full-stack digital marketing agency in India: social media strategy, content production, community management, SEO, performance ads, web & branding, ORM and hyperlocal marketing.",
  areaServed: "IN",
  priceRange: "₹₹",
  makesOffer: [
    "Social Media Strategy",
    "Content Production",
    "Community Management",
    "SEO",
    "Performance Ads",
    "Web & Branding",
    "ORM",
    "Hyperlocal Marketing",
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-[#121130] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <SmoothScroll />
        <Analytics />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCta />
        <CookieBanner />
      </body>
    </html>
  );
}
