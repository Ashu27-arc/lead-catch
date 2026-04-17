import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Lead Catch",
  description: "Real Estate Marketing and Lead Generation Agency in Noida",
  url: "https://www.leadcatch.in",
  telephone: "+91 9917677017",
  email: "info@leadcatch.in",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.5355",
    longitude: "77.3910",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.leadcatch.in",
  ],
  priceRange: "On request",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "200",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lead Catch | Real Estate Marketing & Lead Generation in Noida",
  description:
    "Get more qualified leads for your real estate business in Noida. We specialize in digital marketing, SEO, Google Ads, and high-converting websites for builders, interior designers, and architects. 10+ years experience, 200+ happy clients.",
  keywords: "real estate marketing Noida, lead generation Noida, digital marketing for builders, interior design marketing, SEO for real estate, Google Ads for real estate, property marketing, architecture marketing, Noida real estate agency",
  metadataBase: new URL("https://www.leadcatch.in/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lead Catch | Real Estate Marketing & Lead Generation in Noida",
    description: "Get more qualified leads for your real estate business in Noida. We specialize in digital marketing, SEO, Google Ads, and high-converting websites for builders, interior designers, and architects.",
    url: "https://www.leadcatch.in",
    siteName: "Lead Catch",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Lead Catch - Real Estate Marketing Agency in Noida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Catch | Real Estate Marketing & Lead Generation in Noida",
    description: "Get more qualified leads for your real estate business in Noida. We specialize in digital marketing, SEO, Google Ads, and high-converting websites.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
