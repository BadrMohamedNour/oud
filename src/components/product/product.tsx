// Compoents
import { Breadcrumb } from "antd";
import ProductSection from "./sections/productSection/productSection";
import ProductDescriptionSpicificationSection from "./sections/productDescriptionSpicification";
import ProductsSection from "../tools/products/ProductsSection";

// Styles
import styles from "./styles/product.module.scss";

// Hooks
import { useTranslations } from "next-intl";

// TYpes
import { Product } from "@/types/product";

const ProductComponent: React.FC<{ productData: Product }> = ({
  productData,
}) => {
  const t = useTranslations("Product");
  return (
    <main className={`${styles.productComponent} page container`}>
      <Breadcrumb
        className="breadcrumb"
        items={[
          { title: t("Home") },
          {
            title: productData?.category.name,
            href: `/categories/${productData?.category.slug}`,
          },
          { title: productData?.name },
        ]}
      />

      <ProductSection product={productData} />

      <ProductDescriptionSpicificationSection product={productData} />

      <ProductsSection
        title={t("Similar Products")}
        products={Object.values(productData.similar_products)}
      />
    </main>
  );
};

export default ProductComponent;
