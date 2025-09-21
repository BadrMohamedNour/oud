import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "@/components/tools/productCard/productCard";
import { Product } from "@/types/home";
import { Autoplay } from "swiper/modules";
import { Skeleton } from "antd";

interface ProductsSectionProps {
  title: string;
  products: Product[];
}

const SWIPER_BREAKPOINTS = {
  200: {
    slidesPerView: 1,
    spaceBetween: 8,
  },
  600: {
    slidesPerView: 2,
    spaceBetween: 8,
  },
  800: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  1300: {
    slidesPerView: 4,
    spaceBetween: 18,
  },
  1400: {
    slidesPerView: 5,
    spaceBetween: 18,
  },
} as const;

const ProductsSection: React.FC<ProductsSectionProps> = memo(
  ({ title, products }) => {
    if (!products?.length) {
      return null;
    }

    return (
      <section className="products-section">
        {!products ? (
          <Skeleton.Node active rootClassName="skeleton" />
        ) : (
          <>
            <h2>{title}</h2>
            <Swiper
              breakpoints={SWIPER_BREAKPOINTS}
              pagination={false}
              modules={[Autoplay]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </section>
    );
  }
);

ProductsSection.displayName = "ProductsSection";

export default ProductsSection;
