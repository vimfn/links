import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";

import { config } from "@/data/config";
import { ThemeProvider } from "@/components/providers/theme-provider";

import "./globals.css";
import banner from "@/public/images/banner.webp";
import { Menu } from "@/components/menu";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: config.name,
  description: config.bio,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute top-0 right-0 z-50 p-4">
            <Menu />
          </div>
          <Image
            src={banner}
            alt=""
            placeholder="blur"
            className="w-full h-60 object-cover brightness-200 dark:brightness-95 blur-3xl"
          />
          <main className="max-w-2xl mx-auto">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
