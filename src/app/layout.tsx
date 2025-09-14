// Wraaper
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { NextIntlClientProvider } from "next-intl";

// Components
import Footer from "@/components/layout/footer/footer";
import MobileFooter from "@/components/layout/mobile-footer/mobile-footer";

// Fonts
import ExpoArabicFont from "@/assets/font/fontFamily";

// Hooks
import { getMessages, getTranslations } from "next-intl/server";

// Styles
import "@/styles/globals.scss";

// Types
import { Metadata } from "next";

// Actions
import { getAppData } from "@/apiCalls/appApiCall";

// Context
import { CartProvider } from "@/context/cart-context";

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  const appData = await getAppData();

  return (
    <html lang={locale} dir="rtl">
      <body className={ExpoArabicFont.variable}>
        <AntdRegistry>
          <NextIntlClientProvider messages={messages}>
            <CartProvider>
              {children}
              <Footer appData={appData} />
              <MobileFooter />
            </CartProvider>
          </NextIntlClientProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}

export const generateMetadata = async (): Promise<Metadata> => {
  const { store_settings } = await getAppData();

  return {
    title: store_settings.store_name.value,
    description: store_settings.store_name,
    metadataBase: new URL("https://almokhlifoud.com"),
    icons: { icon: store_settings.favicon.value },
    keywords: [""],
    openGraph: {
      title: store_settings.store_name.value,
      description: "",
      images: [""],
      url: "https://almokhlifoud.com",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: store_settings.store_name.value,
      description: "",
      site: store_settings.store_name.value,
      creator: "",
      images: [""],
    },
  };
};
