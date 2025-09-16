// Fonts
import { Tajawal } from "next/font/google";

// Styles
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/globals.scss";
import "@/styles/sections.scss";

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
  return (
    <html>
      <body className={tajawal.className}>{children}</body>
    </html>
  );
}
