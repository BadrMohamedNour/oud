"use client"

import Link from "next/link"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

import { Banners } from "@/types/home"

const BannerSection: React.FC<{ style?: string; banners: Banners }> = ({ style, banners }) => {
  if (!banners?.length) {
    return null
  }

  return (
    <div className={`banner-section ${style}`}>
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
              <Image src={image} alt={title} fill priority={true} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default BannerSection
