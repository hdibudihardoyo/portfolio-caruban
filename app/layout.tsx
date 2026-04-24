import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Poppins } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AiChatbotFloating from "@/components/AIChatbot/AiChatbotFloating";
import "./globals.css";
import { ChatbotProvider } from "@/components/AIChatbot/AiChatbotContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Jasa Pembuatan Web & Aplikasi | Caruban Technology",
  description:
    "Caruban Technology menyediakan jasa pembuatan website dan aplikasi profesional. Solusi digital untuk bisnis dengan desain modern, performa tinggi, dan dukungan multi-bahasa.",
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
    <html
      lang={locale}
      className={`${poppins.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="theme"
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ChatbotProvider>
              <Navbar />
              {children}
              <AiChatbotFloating />
              <Footer />
            </ChatbotProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
