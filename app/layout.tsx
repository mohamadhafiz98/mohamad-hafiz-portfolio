import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navigation from "@/components/Navigation";
import "./globals.css";

config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamad Hafiz - Portfolio",
  description: "Personal portfolio and resume website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="overflow-x-hidden bg-[#f5f5f3] text-[#111111] antialiased">
        <Navigation />

        <main className="relative min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
