import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "./components/ThemeToggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajmani Shukla | Tech Lead & AI/ML Engineer",
  description: "Tech Lead specializing in Infrastructure, Operations, and AI/ML systems. Building scalable, production-ready systems for high-growth startups.",
  keywords: ["Tech Lead", "AI/ML Engineer", "Infrastructure", "DevOps", "Machine Learning", "Software Engineering"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="fixed top-6 right-6 z-50">
            <ThemeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
