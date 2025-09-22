// COmponents
import Image from "next/image";
import Link from "next/link";

// TYpes
import { Product } from "@/types/home";
import { useTranslations } from "next-intl";

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
          <p>
            {product.price} {t("SAR")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
