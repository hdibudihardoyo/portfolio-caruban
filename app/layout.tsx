import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import { NextIntlClientProvider } from "next-intl";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Caruban Technology",
  description:
    "Caruban Technology adalah perusahaan teknologi yang berfokus pada pengembangan solusi inovatif untuk berbagai industri. Kami menyediakan layanan konsultasi, pengembangan perangkat lunak, dan solusi teknologi yang disesuaikan dengan kebutuhan bisnis Anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <NextIntlClientProvider>
        <body className="min-h-full flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
