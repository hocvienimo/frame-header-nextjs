import type { Metadata } from "next";
import { Mulish, Playfair_Display } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';

// containers
import Header from "./container/Header";

const mulish = Mulish({ 
  subsets: ["latin"],
  weight: ["200","300","400","500","600","700","800","900","1000"],
  variable: "--font-mulish",
  display: "swap"
});

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400","500","600","700","800","900"],
  variable: "--font-playfairDisplay",
  display: "swap"
});

export const metadata: Metadata = {
  title: "iMovn - Digital Marketing Online Đa Kênh",
  description: "iMovn - Digital Marketing Online Đa Kênh, Thiết Kế Lập Trình Web App Chuyên Nghiệp Tại Tp.HCM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${mulish.variable} ${playfairDisplay.variable} font-sans`}>
        <NextTopLoader 
        color="linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))"
        height={1}
        />
        <Header/>
        {children}
        
        </body>
    </html>
  );
}
