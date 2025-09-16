"use client";

// Compoents
import BannerSection from "./sections/BannerSection";
import ProductsSection from "./sections/ProductsSection";

// Styles
import styles from "./styles/index.module.scss";

// Hooks
import { useTranslations } from "next-intl";

// TYpes
import { IndexComponentProps } from "@/types/home";

const IndexComponent: React.FC<IndexComponentProps> = ({
  banners,
  products,
}) => {
  const t = useTranslations("Home");

  return (
    <main className={`${styles.indexComponent} page container`}>
      <BannerSection banners={banners?.hero} />

      <div className="withSidebar-section">
        <BannerSection style="sidebar-section" banners={banners?.sidebar} />

        <div className="products-sections">
          <ProductsSection
            title={t("Best seller")}
            products={products?.most_seller}
          />

          <ProductsSection title={t("New arrival")} products={products?.new} />

          <ProductsSection
            title={t("Most Featured")}
            products={products?.feature}
          />
        </div>
      </div>

      <BannerSection banners={banners?.bottom} />
    </main>
  );
};

export default IndexComponent;
