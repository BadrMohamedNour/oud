// Components
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "@/components/tools/productCard/productCard";

// TYpes
import { Product } from "@/types/home";

const ProductsSection: React.FC<{ title: string; products: Product[] }> = ({
  title,
  products,
}) => {
  const breakpoints = {
    200: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 32,
    },
  };

  return products.length > 0 ? (
    <section className="products-section">
      <h2>{title}</h2>
      <Swiper
        breakpoints={breakpoints}
        className="mySwiper showMore"
        pagination={false}
      >
        {products?.map((product: Product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  ) : null;
};

export default ProductsSection;
