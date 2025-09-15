import { AntdRegistry } from "@ant-design/nextjs-registry";
import { NextIntlClientProvider } from "next-intl";
import { Metadata } from "next";

// Components
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import MobileFooter from "@/components/layout/mobile-footer/mobile-footer";

// Fonts
import ExpoArabicFont from "@/assets/font/fontFamily";

// Hooks
import { getMessages } from "next-intl/server";

// Actions
import { getAppData } from "@/apiCalls/appApiCall";
import { getCategories } from "@/apiCalls/categoriesApiCall";

// Context
import { CartProvider } from "@/context/cart-context";

// Styles
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/globals.scss";

// Types
interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

// Constants
const METADATA_BASE_URL = "https://almokhlifoud.com";

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const [messages, appData, categories] = await Promise.all([
    getMessages(),
    getAppData(),
    getCategories(),
  ]);

  return (
    <html lang={locale}>
      <body className={ExpoArabicFont.variable}>
        <AntdRegistry>
          <NextIntlClientProvider messages={messages}>
            <CartProvider>
              <Header categories={categories} />
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

export async function generateMetadata(): Promise<Metadata> {
  const { store_settings } = await getAppData();
  const storeName = store_settings.store_name.value;
  const favicon = store_settings.favicon.value;

  return {
    title: storeName,
    description: storeName,
    metadataBase: new URL(METADATA_BASE_URL),
    icons: { icon: favicon },
    keywords: [],
    openGraph: {
      title: storeName,
      description: "",
      images: [],
      url: METADATA_BASE_URL,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: storeName,
      description: "",
      site: storeName,
      creator: "",
      images: [],
    },
  };
}
