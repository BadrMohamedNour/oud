// Components
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import MobileFooter from "@/components/layout/mobile-footer/mobile-footer";

// Actions
import { getAppData } from "@/apiCalls/appApiCall";
import { getCategories } from "@/apiCalls/categoriesApiCall";

// Context
import { CartProvider } from "@/context/cart-context";

// Wrrapers
import Providers from "@/store/provider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

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
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <CartProvider>
              <AntdRegistry>
                <Header categories={categories} />
                {children}
                <Footer appData={appData} />
                <MobileFooter />
              </AntdRegistry>
            </CartProvider>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export async function generateMetadata() {
  try {
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
  } catch (error) {
    console.log(error);
  }
}
