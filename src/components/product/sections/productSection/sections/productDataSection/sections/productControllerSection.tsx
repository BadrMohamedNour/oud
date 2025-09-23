"use client";

// Components
import { Button, notification } from "antd";
import ButtonS1 from "@/components/tools/buttons/buttonS1";

// Hooks
import { useState, useEffect } from "react"; // Add useEffect
import { useDispatch, useSelector } from "react-redux";
import { useLocale, useTranslations } from "next-intl";

// Icons
import { FaMinus, FaPlus } from "react-icons/fa";

// Types
import { Placement } from "@/types/product";
import { RootState, AppDispatch } from "@/store/store"; // Import AppDispatch
import { addToCartThunk } from "@/store/slices/cart/cartSlice";

const ProductControllerSection: React.FC = ({}) => {
  // Type the dispatch function properly
  const dispatch = useDispatch<AppDispatch>();
  const lang = useLocale();
  const t = useTranslations("Product");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const { productData } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    setQuantity(1);
  }, [productData?.id]);

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
    if (quantity >= productData.quantity) {
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

  const addToCart = async () => {
    setLoading(true);
    try {
      await dispatch(
        addToCartThunk({
          product_id: productData.product_id || productData.id,
          packaging_unit_product_id: productData.product_id
            ? productData.id
            : null,
          quantity: quantity,
        })
      ).unwrap();
      setQuantity(1);
      openNotification();
    } catch (error) {
      console.error("Failed to add to cart:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="AddToCartSection flexCenter flexStart">
      <div className="quantityBtns flexCenter flexStart">
        <Button onClick={decreaseQuantityHandler}>
          <FaMinus />
        </Button>
        <input
          id="quantity"
          name="quantity"
          className="quantity"
          value={quantity}
          onChange={() => {}}
        />

        <Button onClick={increaseQuantityHandler}>
          <FaPlus />
        </Button>
      </div>

      <ButtonS1 text={t("Add to cart")} onClick={addToCart} loading={loading} />
    </div>
  );
};

export default ProductControllerSection;
