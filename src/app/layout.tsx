// Wraaper
import { AntdRegistry } from "@ant-design/nextjs-registry";

// Components
import Footer from "@/components/layout/footer/footer";
import MobileFooter from "@/components/layout/mobile-footer/mobile-footer";

// Fonts
import ExpoArabicFont from "@/assets/font/fontFamily";

// Context
import { CartProvider } from "@/context/cart-context";

// Styles
import "@/styles/globals.scss";

// Types
import type { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={ExpoArabicFont.variable}>
        <AntdRegistry>
          <CartProvider>
            {children}
            <Footer />
            <MobileFooter />
          </CartProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: "المخلف للعود",
    template: `المخلف للعود - %s`,
  },
  description:
    "نتخصص باستيراد البخور ودهن العود من مصادرنا في شرق آسيا، نسعى لنشر ثقافة العود وإحياء هذه الثروة الطبيعية.",
  icons: { icon: "/icons/favIcon.png" },
};
