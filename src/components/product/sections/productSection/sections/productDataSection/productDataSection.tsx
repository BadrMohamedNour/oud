// Components
import ProductPrice from "./sections/productPrice/productPrice";
import ProductControllerSection from "./sections/productControllerSection";

// Types
import { Product } from "@/types/product";

// Hooks
import { useTranslations } from "next-intl";

const ProductDataSection: React.FC<{ product: Product }> = ({ product }) => {
  const t = useTranslations("Common");

  return (
    <div className="productData">
      <div>
        <h2>{product?.category.name}</h2>
        <h1>{product?.name}</h1>
      </div>

      <div className="divider"></div>

      <ProductPrice product={product} />

      <div className="divider"></div>

      <ProductControllerSection />
    </div>
  );
};

export default ProductDataSection;
