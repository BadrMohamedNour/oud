"use client"

import { useTranslations } from "next-intl"
// Compoents
import HeroSection from "./sections/HeroSection"
import ProductsSection from "./sections/ProductsSection"

// Styles
import styles from "./styles/indexComponent.module.scss"

// TYpes
import { Banners, Products } from "@/types/home"
interface IndexComponentProps {
  banners: { hero: Banners }
  products: Products
}

const IndexComponent: React.FC<IndexComponentProps> = ({ banners, products }) => {
  const t = useTranslations("Home")

  return (
    <main className={`${styles.indexComponent} page container`}>
      <HeroSection banners={banners.hero} />

      <section className="">
        <div>
          <ProductsSection title={t("Best seller")} products={products.most_seller} />

          <ProductsSection title={t("New arrival")} products={products.new} />

          <ProductsSection title={t("Most Featured")} products={products.feature} />
        </div>
      </section>
    </main>
  )
}

export default IndexComponent
