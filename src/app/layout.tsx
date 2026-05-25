import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
  title: "Lakshmi Rasoi | Fresh Homemade Tiffin & Meal Service",
  description:
    "Fresh homemade meals delivered daily. Nutritious, hygienic, and comforting tiffins prepared with care for students, professionals, and families.",
  keywords: [
    "tiffin service",
    "homemade meals",
    "daily tiffin",
    "meal delivery",
    "Lakshmi Rasoi",
    "lunch tiffin",
    "dinner tiffin",
  ],
  openGraph: {
    title: "Lakshmi Rasoi | Daily Tiffin & Meal Service",
    description: "Fresh homemade meals, delivered daily.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
