"use client";

import { useState, useCallback, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

// Types
import { Product } from "@/types/product";

interface ProductSliderProps {
  product: Product;
}

// Component
export const ProductSlider: React.FC<ProductSliderProps> = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  // Memoize gallery array to prevent unnecessary re-renders
  const gallery = useMemo(() => product.gallery || [], [product.gallery]);

  // Callback to handle thumbs swiper initialization
  const handleThumbsSwiperInit = useCallback((swiper: SwiperType) => {
    setThumbsSwiper(swiper);
  }, []);

  // Early return if no gallery images
  if (gallery.length === 0) {
    return (
      <div className="productSliderWrapper">
        <div className="no-images">No images available</div>
      </div>
    );
  }

  return (
    <div className="productSliderWrapper">
      {/* Thumbnails Swiper */}
      <Swiper
        onSwiper={handleThumbsSwiperInit}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="productSliderThumbs"
        spaceBetween={10}
        slidesPerView="auto"
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        {gallery.map((img, index) => (
          <SwiperSlide key={`thumb-${index}`}>
            <div className="thumb-image-wrapper">
              <Image
                src={img}
                alt={`Product thumbnail ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 640px) 25vw, (max-width: 768px) 20vw, (max-width: 1024px) 16.66vw, 12.5vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Main Product Swiper */}
      <Swiper
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs]}
        className="productSlider"
        spaceBetween={20}
        loop={gallery.length > 1}
      >
        {gallery.map((img, index) => (
          <SwiperSlide key={`main-${index}`}>
            <div className="main-image-wrapper">
              <Image
                src={img}
                alt={`Product image ${index + 1}`}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
