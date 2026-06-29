import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import MainHeader from "./components/HeaderComponents/MainHeader";
import AuthProvider from "./auth/Provider";
import Footer from "./components/Footer";
import AuthModal from "./components/Auth/AuthModal";
import localFont from "next/font/local"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const yekan = localFont({
  src: "../public/fonts/Yekan.woff2",
  variable: "--font-yekan",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "فروشگاه اوتانا",
    template: "%s | فروشگاه اوتانا",
  },
  description: "فروشگاه آنلاین پوشاک",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
className={`${geistSans.variable} ${geistMono.variable} ${yekan.variable} h-full antialiased`}    >
      <body>
        <AuthProvider>
          <MainHeader />
          {/* <Suspense fallback={<p>loading...</p>}> */}
          {children}
          {/* </Suspense> */}
        </AuthProvider>
        <AuthModal />
        <Footer />
      </body>
    </html>
  );
}
