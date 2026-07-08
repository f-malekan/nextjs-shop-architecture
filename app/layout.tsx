import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainHeader from "./components/HeaderComponents/MainHeader";
import AuthProvider from "./auth/Provider";
import Footer from "./components/Footer";
import AuthModal from "./components/Auth/AuthModal";
import localFont from "next/font/local";
import { Toaster } from "sonner";

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
});

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
      lang="fa"
      className={`${geistSans.variable} ${geistMono.variable} ${yekan.variable} h-full antialiased`}
      dir="rtl"
    >
      <body>
        <AuthProvider>
          <MainHeader />
          {children}
        </AuthProvider>
        <AuthModal />
        <Toaster position="bottom-center" richColors/>

        <Footer />
      </body>
    </html>
  );
}
