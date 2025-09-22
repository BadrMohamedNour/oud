"use client";
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

const ProductSizes: React.FC<{ product: Product }> = ({ product }) => {
  const t = useTranslations("Product");

  return (
    <div className="size">
      <h3>{t("Size")}:</h3>
      <Radio.Group className="sizes" block optionType="button">
        <Radio>
          <div>
            <small>100مل</small>
            <div>796.18</div>
          </div>
        </Radio>
      </Radio.Group>
    </div>
  );
};

export default ProductSizes;
