import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { personalInfo } from "./data/portfolioData";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${personalInfo.name} - Full Stack Developer | Java & Spring Boot | React & Node.js`,
  description: personalInfo.summary,
  keywords: [
    "Kulani Baloyi",
    "Full Stack Developer",
    "Software Engineer",
    "System Analyst",
    "Java Developer",
    "Spring Boot Developer",
    "React Developer",
    "Node.js Developer",
    "Angular Developer",
    "MySQL",
    "University of Venda",
    "Tshwane University of Technology",
    "Portfolio",
    "South Africa Developer",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://github.com/Ledgekb/Portfolio",
    title: `${personalInfo.name} - Full Stack Developer & System Analyst`,
    description: personalInfo.summary,
    siteName: `${personalInfo.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - Full Stack Developer & System Analyst`,
    description: personalInfo.summary,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#110720",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased font-sans bg-[#110720] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
