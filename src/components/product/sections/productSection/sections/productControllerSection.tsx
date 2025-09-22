"use client";

// Hooks
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
// Components
import { Button, notification } from "antd";
import ButtonS1 from "@/components/tools/buttons/buttonS1";

// Icons
import { FaMinus, FaPlus } from "react-icons/fa";

// Types
import { Product, Placement } from "@/types/product";

const ProductControllerSection: React.FC<{ product: Product }> = ({
  product,
}) => {
  const [quantity, setQuantity] = useState(1);
  const t = useTranslations("Product");
  const lang = useLocale();
  const [loading, setLoading] = useState(false);

  const openNotification = () => {
    let placement: Placement = "topRight";

    if (lang === "ar") {
      placement = "topLeft";
    }

    notification.success({
      message: t("Item Added  To Cart Successfully"),
      placement,
    });
  };

  const openErrorNotification = () => {
    let placement: Placement = "topRight";

    if (lang === "ar") {
      placement = "topLeft";
    }

    notification.error({
      message: t("Quantity is not available"),
      placement,
    });
  };

  const increaseQuantityHandler = () => {
    if (quantity >= product.quantity) {
      openErrorNotification();
      return;
    }
    setQuantity(quantity + 1);
  };

  const decreaseQuantityHandler = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  };

  const addToCart = () => {
    setLoading(true);
    openNotification();
    setLoading(false);
  };

  return (
    <div className="AddToCartSection flexCenter flexStart">
      <div className="quantityBtns flexCenter flexStart">
        <Button onClick={decreaseQuantityHandler}>
          <FaMinus />
        </Button>
        <input className="quantity" value={quantity} onChange={() => {}} />

        <Button onClick={increaseQuantityHandler}>
          <FaPlus />
        </Button>
      </div>

      <ButtonS1 text={t("Add to cart")} onClick={addToCart} loading={loading} />
    </div>
  );
};

export default ProductControllerSection;
