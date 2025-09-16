import { memo } from "react"
import Link from "next/link"
import SocialMedia from "./sections/social-media"
import PaymentInfo from "./sections/payment-info"
import { StoreData } from "@/types/store"
import { Categories } from "@/types/categories"
import style from "./styles/footer.module.scss"
import { useTranslations } from "next-intl"
import Image from "next/image"

interface FooterProps {
  appData: StoreData
  categories: Categories
}

const Footer: React.FC<FooterProps> = ({ appData, categories }) => {
  const t = useTranslations("Footer")

  return (
    <footer className={`${style.footer} container`}>
      <div className="content">
        <div className="logo">
          <Link href="/">
            <Image
              src={appData?.store_settings.company_logo.value}
              fill
              alt={appData?.store_settings.company_logo.shown_name}
            />
          </Link>
        </div>

        <div className="categories">
          <h3>{t("Categories")}</h3>
          <ul>
            {categories?.active_categories?.map(({ id, slug, name }) => (
              <li key={id}>
                <Link href={slug}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="links">
          <h3>{t("Al Mukhlif Oud")}</h3>
          <ul>
            {appData?.store_policies?.map(({ key, name, value }) => (
              <li key={key}>
                <Link href={value}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <SocialMedia storeContact={appData?.store_contacts} />
      </div>

      <PaymentInfo storeSettings={appData?.store_settings} />

      <p className="copyright text-center text-gray-500 text-sm">{t("© All rights reserved to Al Mukhlif Oud")}</p>
    </footer>
  )
}

export default memo(Footer)
