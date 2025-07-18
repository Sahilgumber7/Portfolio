// app/layout.tsx
import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { portfolioConfig } from "@/config/portfolio.config";
import { ThemeProvider } from "@/components/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: {
    default: portfolioConfig.name,
    template: `%s - ${portfolioConfig.title}`,
  },
  description: portfolioConfig.description,
  
  authors: portfolioConfig.seo.authors,
  creator: portfolioConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    
    title: portfolioConfig.name,
    description: portfolioConfig.description,
    
    siteName: portfolioConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioConfig.name,
    description: portfolioConfig.description,
    
    creator: portfolioConfig.seo.twitterHandle,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(`${poppins.variable} ${rubik.variable}`)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main
  className={cn(
    "flex relative break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 max-sm:pt-20",
    "bg-white dark:bg-black",
    "text-black dark:text-white",
    "bg-[radial-gradient(#2f7df4_1px,transparent_1px)] dark:bg-[radial-gradient(#2f7df4cc_1px,transparent_1px)] [background-size:16px_16px]"
  )}
>

            <Navbar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
