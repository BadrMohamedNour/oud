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
import "@ant-design/v5-patch-for-react-19";
import { AntdRegistry } from "@ant-design/nextjs-registry";

// Styles
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/globals.scss";
import "@/styles/sections.scss";
import { getAppSeo } from "@/apiCalls/seoApiCall ";

// Types
interface RootLayoutProps {
  children: React.ReactNode;
}

// Constants
const METADATA_BASE_URL = "https://almokhlifoud.com";

export default async function LocaleLayout({
  children,
}: Readonly<RootLayoutProps>) {
  const [appData, categories] = await Promise.all([
    getAppData(),
    getCategories(),
  ]);
  return (
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
  );
}

export async function generateMetadata() {
  try {
    const seo = await getAppSeo();
    const title = seo.title;
    const description = seo.meta_description;
    const image = seo.image;
    return {
      title: title,
      description: description,
      metadataBase: new URL(METADATA_BASE_URL),
      icons: { icon: "/icons/favIcon.png" },
      keywords: seo.meta_keywords,
      openGraph: {
        title: title,
        description: description,
        images: [image],
        url: METADATA_BASE_URL,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: title,
        description: description,
        site: title,
        creator: title,
        images: [image],
      },
    };
  } catch (error) {
    console.log(error);
  }
}
