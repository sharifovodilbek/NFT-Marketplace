import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";


const workSans = Work_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight:["400", "600", "700"]
});

export const metadata: Metadata = {
  title: "NFT Marketplace",
  description: "Discover digital art & Collect NFTs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./Storefront.svg" />
      </head>
      <body
        className={`${workSans} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
