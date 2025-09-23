// COmponents
import Image from "next/image";
import Link from "next/link";

// TYpes
import { Product } from "@/types/home";
import { useTranslations } from "next-intl";

// Icons
import currency from "../../../../../public/icons/currency.svg";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const t = useTranslations("Common");

  return (
    <Link className="productCard" href={`/products/${product.slug}`}>
      <div className="content">
        <div className="img">
          <Image fill src={product.feature_image} alt={product.name} />
        </div>
        <div className="details">
          <h4>{product.name}</h4>
          <div className="price flexCenter">
            <span>{product.price}</span>
            <Image src={currency} alt={t("SAR")} height={14} width={14} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
