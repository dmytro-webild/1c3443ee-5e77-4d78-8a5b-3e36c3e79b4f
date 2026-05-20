import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'SaleHoo | Global Wholesale Sourcing & Product Research',
  description: 'Scale your e-commerce business with access to over 8,000 verified suppliers and professional product research tools.',
  keywords: ["wholesale, e-commerce, dropshipping, product research, wholesale suppliers"],
  openGraph: {
    "title": "SaleHoo - The Leader in Wholesale Sourcing",
    "description": "Access the world's most trusted wholesale supplier directory and product research lab.",
    "siteName": "SaleHoo"
  },
};

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${publicSans.variable} ${inter.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
