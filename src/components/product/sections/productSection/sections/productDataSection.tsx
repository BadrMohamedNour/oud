// Components
import Image from "next/image";
import { Form, Radio } from "antd";

import ProductControllerSection from "./productControllerSection";

// Types
import { Product } from "@/types/product";
import type { CheckboxGroupProps } from "antd/es/checkbox";

// Icons
import currency from "../../../../../../public/icons/currency.svg";

// Hooks
import { useTranslations } from "next-intl";
import ProductSizes from "./productSizes";

const ProductDataSection: React.FC<{ product: Product }> = ({ product }) => {
  const t = useTranslations("Product");

  const options: CheckboxGroupProps<string>["options"] = [
    { label: "Apple", value: "Apple" },
    { label: "Pear", value: "Pear" },
    { label: "Orange", value: "Orange" },
  ];

  return (
    <div className="productData">
      <div>
        <h2>{product?.category.name}</h2>
        <h1>{product?.name}</h1>
      </div>

      <div className="divider"></div>

      <div>
        <div className="price">
          <div className="old-price flexCenter flexStart">
            <span>{product.active_sale_price}</span>
            <Image src={currency} alt="" height={16} width={16} />
          </div>
          <div className="current-price flexCenter flexStart">
            <span>{product.price}</span>
            <Image src={currency} alt="" height={16} width={16} />
          </div>
        </div>

        <ProductSizes product={product} />
      </div>

      <div className="divider"></div>

      <ProductControllerSection product={product} />
    </div>
  );
};

export default ProductDataSection;
