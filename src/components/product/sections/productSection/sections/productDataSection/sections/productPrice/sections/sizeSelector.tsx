"use client";

import Image from "next/image";
import { Radio, RadioChangeEvent } from "antd";

// Icons
import currency from "../../../../../../../../../../public/icons/currency.svg";
import { useTranslations } from "next-intl";
import { PackagingUnit } from "@/types/product";

interface SizeSelectorProps {
  packagingUnits: PackagingUnit[];
  selectedProductId: number;
  onSizeChange: (e: RadioChangeEvent) => void;
}

export const SizeSelector: React.FC<SizeSelectorProps> = ({
  packagingUnits,
  selectedProductId,
  onSizeChange,
}) => {
  const t = useTranslations("Product");

  return (
    <div className="size">
      <h3>{t("Size")}:</h3>
      <Radio.Group
        defaultValue={selectedProductId}
        className="sizes"
        block
        optionType="button"
        onChange={onSizeChange}
      >
        {packagingUnits.map((unit) => (
          <Radio key={unit.id} value={unit.id}>
            <div>
              <small>{unit.name}</small>
              <div className="size-price flexCenter">
                <span>{unit.price}</span>
                <Image src={currency} alt={t("SAR")} height={12} width={12} />
              </div>
            </div>
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );
};
