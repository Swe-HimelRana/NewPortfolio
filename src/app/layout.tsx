import type { Metadata } from "next";
import {  Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { siteConfig } from "./page";
import { ThemeProvider } from "@/components/theme-provider";
import NavbarBottom from "../components/custom/NavbarBottom";

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
  metadataBase: new URL("https://himelrana.com"),
  title: {
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,

  // added new keywords for seo
  keywords: [
    "Himel",
    "Himel Rana",
    "Software Engineer",
    "software engineer",
    "himelrana",
    "himel rana",
    "himel swe",
    "swehimel",
    "swe himel",
    "swe-himel",
    "swe-himelrana",
    "swe-HimelRana",
    "swe-Himel Rana",
    "swe-himel rana",
    "swe himel rana",
    "portfolio",
    "web developer",
    "web",
    "web dev",
    "web developer",
    "developer",
    "PROGRAMMER ",
    "programmer ",
    "Daffodil",
    "daffodil",
    "daffodil university",
    "Daffodil University",
    "Daffodil International University",
    "daffodil international university",
    "website",
    "@himel",
    "@himel-swe",
    "@himelswe",
    "himel himel",
    "himel developer",
    "himel engineer",
  ],
  authors: [
    {
      name: "Hime",
      url: "https://github.com/Swe-Himel",
    },
  ],
  creator: "Himel",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@Himel",
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
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <main
          className={cn(
            "flex  relative  break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent dark:bg-zinc-950 dark:text-white max-sm:pt-20 bg-[radial-gradient(#9bb0d1_1px,transparent_1px)] dark:bg-[radial-gradient(#131414_1px,transparent_1px)] [background-size:16px_16px]",
            { "bg-white": "#E6E7EB" }
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             
             <div className="hidden md:block"><Navbar /></div>
             {children}
             <div className="md:hidden"><NavbarBottom/></div>
          </ThemeProvider>
          {/* NAVBAR ->  */}
        
        </main>
      </body>
    </html>
  );
}
