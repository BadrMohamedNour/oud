"use client"

import { usePathname, useRouter } from "@/i18n/navigation"
import { useLocale, useTranslations } from "next-intl"
import { useTransition } from "react"
import { Dropdown, type MenuProps } from "antd"
import Image from "next/image"

// Assets
import langIcon from "../../../../../public/icons/langs/langIcon.svg"
import en from "../../../../../public/icons/langs/en.png"
import ar from "../../../../../public/icons/langs/ar.webp"

// Types
import { Locale } from "next-intl"

const LangSwitcher = () => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const locale = useLocale()
  const t = useTranslations("Header")

  const switchLanguage = (nextLocale: Locale) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  const menuItems: MenuProps["items"] = [
    {
      key: "en",
      label: (
        <button onClick={() => switchLanguage("en")} disabled={locale === "en"}>
          <Image src={en} alt="English" width={24} height={24} />
        </button>
      ),
    },
    {
      key: "ar",
      label: (
        <button onClick={() => switchLanguage("ar")} disabled={locale === "ar"}>
          <Image src={ar} alt="العربية" width={24} height={24} />
        </button>
      ),
    },
  ]

  return (
    <Dropdown
      menu={{ items: menuItems }}
      trigger={["click"]}
      overlayClassName="lang-dropdown-items"
      className="lang-dropdown"
      disabled={isPending}
    >
      <a onClick={(e) => e.preventDefault()} className="flexCenter">
        <Image height={22} width={22} src={langIcon} alt={t("Language")} />
      </a>
    </Dropdown>
  )
}

export default LangSwitcher
