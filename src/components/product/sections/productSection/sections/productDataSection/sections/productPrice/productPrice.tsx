"use client";

//Components
import Image from "next/image";
import { Radio, RadioChangeEvent } from "antd";

// Hooks
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

// TYpes
import { PackagingUnit, Product } from "@/types/product";

// Icons
import currency from "../../../../../../../../../public/icons/currency.svg";
import currencyS2 from "../../../../../../../../../public/icons/currencyS2.svg";

// Actions
import { setProduct } from "@/store/slices/cart/cartSlice";
import { SizeSelector } from "./sections/sizeSelector";

const ProductPrice: React.FC<{ product: Product }> = ({ product }) => {
  const dispatch = useDispatch();
  const t = useTranslations("Product");
  const initialProduct = useMemo(
    () => product.packaging_units?.[0] || product,
    [product]
  );

  const [selectedProduct, setSelectedProduct] =
    useState<PackagingUnit>(initialProduct);

  const hasPackagingUnits = useMemo(
    () => Boolean(product.packaging_units?.length),
    [product.packaging_units]
  );
  const handleSizeChange = useCallback(
    (e: RadioChangeEvent) => {
      if (!product.packaging_units) return;

      const selectedUnit = product.packaging_units.find(
        (unit) => unit.id === e.target.value
      );
      if (selectedUnit) {
        setSelectedProduct(selectedUnit);
        dispatch(setProduct(selectedUnit));
      }
    },
    [product.packaging_units, dispatch]
  );

  useEffect(() => {
    const productToSet = hasPackagingUnits
      ? product.packaging_units![0]
      : product;
    dispatch(setProduct(productToSet));
  }, [product, hasPackagingUnits, dispatch]);

  return (
    <div>
      <div className="price">
        {selectedProduct?.on_sale ? (
          <>
            <div className="old-price flexCenter flexStart">
              <span>{selectedProduct.price}</span>
              <Image src={currencyS2} alt={t("SAR")} height={16} width={16} />
            </div>
            <div className="current-price flexCenter flexStart">
              <span>{selectedProduct?.active_sale_price}</span>
              <Image src={currency} alt={t("SAR")} height={16} width={16} />
            </div>
          </>
        ) : (
          <div className="current-price flexCenter flexStart">
            <span>{selectedProduct?.price}</span>
            <Image src={currency} alt={t("SAR")} height={16} width={16} />
          </div>
        )}
      </div>

      {hasPackagingUnits && (
        <SizeSelector
          packagingUnits={product.packaging_units}
          selectedProductId={selectedProduct.id}
          onSizeChange={handleSizeChange}
        />
      )}
    </div>
  );
};
export default ProductPrice;
