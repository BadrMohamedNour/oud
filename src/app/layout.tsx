// Fonts
import { Tajawal } from "next/font/google";

// Styles
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/globals.scss";
import "@/styles/sections.scss";

//Hooks
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

// Types
interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
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
  return (
    <html>
      <NextIntlClientProvider messages={messages}>
        <body className={tajawal.className}>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
