import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";
import "./snap.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Lakshmi Rasoi | Daily Tiffin & Homemade Meal Service in Hisar",
    template: "%s | Lakshmi Rasoi",
  },
  description:
    "Fresh homemade tiffin delivered daily near Marvel City and OM College, Hisar (within 3 km). Hygienic home-cooked lunch & dinner (roti, dal, rice, seasonal sabzi) for students, professionals and families. Trial tiffin from ₹59. Order on WhatsApp.",
  keywords: [
    "tiffin service in Hisar",
    "tiffin service near me",
    "homemade food Hisar",
    "daily tiffin Hisar",
    "lunch tiffin Hisar",
    "dinner tiffin Hisar",
    "monthly meal plan Hisar",
    "home cooked meals Haryana",
    "PG tiffin service Hisar",
    "Lakshmi Rasoi",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_IN",
    title: "Lakshmi Rasoi | Fresh Homemade Tiffin, Delivered Daily in Hisar",
    description:
      "Hygienic home-cooked lunch & dinner tiffins delivered near Marvel City, Hisar. Trial tiffin from ₹59. Order on WhatsApp.",
    images: [
      {
        url: "/images/promo-banner.png",
        width: 1200,
        height: 630,
        alt: "Lakshmi Rasoi – Ghar Jaisa Swaad, Roz Garma-Garam. Daily tiffin service in Hisar.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lakshmi Rasoi | Fresh Homemade Tiffin, Delivered Daily in Hisar",
    description:
      "Hygienic home-cooked lunch & dinner tiffins delivered near Marvel City, Hisar. Trial tiffin from ₹59.",
    images: ["/images/promo-banner.png"],
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  description:
    "Daily tiffin and homemade meal service in Hisar, Haryana. Fresh, hygienic home-cooked lunch and dinner delivered to offices, hostels, PGs and homes.",
  url: SITE.url,
  telephone: "+917988267228",
  servesCuisine: "North Indian, Homemade Vegetarian",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "111SF, Marvel City, SEC-1",
    addressLocality: "Hisar",
    addressRegion: "Haryana",
    postalCode: "125001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.2351056,
    longitude: 75.7770461,
  },
  areaServed: { "@type": "City", name: "Hisar" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "21:00",
    },
  ],
  sameAs: [`https://wa.me/${SITE.whatsappNumber}`],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${jakarta.variable}`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
