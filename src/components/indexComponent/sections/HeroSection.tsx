"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Banners } from "@/types/home";

const HeroSection: React.FC<{ banners: Banners }> = ({ banners }) => {
  return (
    <div className="hero-section">
      <Swiper
        className="swiper"
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        dir="rtl"
      >
        {banners?.map(({ id, title, image }) => (
          <SwiperSlide key={id}>
            <Link href={image}>
              <Image src={"/photos/b.webp"} alt={title} fill priority={true} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
