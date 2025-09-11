import { IsInStock } from "@/utils/helpers";
import { ProductType, ProductVariation } from "@/services/types/types";
import { useState } from "react";

export const useProductDetails = (productData: ProductType) => {
  // Selected variation
  const [selectedVariation, setSelectedVariation] = useState(
    productData?.default_variaton
  );

  // Product quantity
  const [productQuantity, setProductQuantity] = useState(1);

  const handleSelectVariation = (variation: ProductVariation) => {
    if (!IsInStock(variation.stock_status)) return;
    setSelectedVariation(variation);
  };

  const handleQuantityChange = (quantity: number) => {
    if (quantity === 0) return;
    setProductQuantity(quantity);
  };

  // Product images
  const images = [
    productData?.image, // main image
    ...(productData?.gallery || []), // gallery images
  ];

  return {
    selectedVariation,
    productQuantity,
    images,
    handleSelectVariation,
    handleQuantityChange,
  };
};
