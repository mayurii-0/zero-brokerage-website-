import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "ZeroBroker",
  description: "ZeroBroker Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.className} ${plusJakarta.variable} antialiased bg-stone-50 bg-dot-pattern relative`}>
        {/* Subtle Background Glows */}
        <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] max-w-[1000px] h-[50vh] bg-[#1ebbbb] rounded-full blur-[120px] opacity-[0.08] pointer-events-none -z-10"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] max-w-[800px] h-[60vh] bg-[#0c40a6] rounded-full blur-[150px] opacity-[0.06] pointer-events-none -z-10"></div>
        
        <Navbar />
        {children}
        <div id="contact">
          <Footer />
        </div>
      </body>
    </html>
  );
}
