import type { Metadata, Viewport } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pecolo.vercel.app"),
  title: "Pecolo - Luxury Real Estate & Property Management",
  description:
    "Pecolo offers premium property management, serviced apartments, rent-to-rent, and real estate investment solutions in London, UK. Trusted since 2010.",
  keywords: [
    "luxury real estate",
    "property management",
    "serviced apartments",
    "rent-to-rent",
    "real estate investment",
    "London property services",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Pecolo - Luxury Real Estate & Property Management",
    description:
      "Discover expert property management, serviced apartments, and investment solutions with Pecolo, your trusted partner in London real estate.",
    url: "https://pecolo.vercel.app",
    siteName: "Pecolo",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pecolo Luxury Real Estate",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pecolo - Luxury Real Estate & Property Management",
    description:
      "Premium property management and real estate solutions in London. Explore serviced apartments, rent-to-rent, and more with Pecolo.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
