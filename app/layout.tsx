import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Poppins } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import "./globals.css";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value ?? "en";
  const messages = (await import(`../messages/${locale}/${locale}.json`))
    .default;

  return (
    <html lang={locale} className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
