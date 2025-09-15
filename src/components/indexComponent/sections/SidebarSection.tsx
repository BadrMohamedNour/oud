"use client"

import Link from "next/link"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"

import { Banners } from "@/types/home"

const SidebarSection: React.FC<{ banners: Banners }> = ({ banners }) => {
  return (
    <aside className="sidebar-section">
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
    </aside>
  )
}

export default SidebarSection
