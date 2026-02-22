import type { Metadata } from "next";
import { Providers } from "./providers";
import { Header, Footer } from "@/app/components/layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajmani Shukla | Tech Lead & AI/ML Engineer",
  description:
    "Tech Lead specializing in Infrastructure, Operations, and AI/ML systems. Building scalable, production-ready systems for high-growth startups.",
  keywords: [
    "Tech Lead",
    "AI/ML Engineer",
    "Infrastructure",
    "DevOps",
    "Machine Learning",
    "Software Engineering",
  ],
  openGraph: {
    title: "Rajmani Shukla | Tech Lead & AI/ML Engineer",
    description:
      "Building scalable, reliable, and production-ready systems for high-growth startups.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajmani Shukla | Tech Lead & AI/ML Engineer",
    description:
      "Building scalable, reliable, and production-ready systems for high-growth startups.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
