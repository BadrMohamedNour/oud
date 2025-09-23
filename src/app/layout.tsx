// Fonts
import { Tajawal } from "next/font/google";

// Wrrapers

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

// Styles
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/globals.scss";
import "@/styles/sections.scss";

// Types
interface RootLayoutProps {
  children: React.ReactNode;
}

// Constants
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800", "900"],
});

export default async function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={tajawal.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
