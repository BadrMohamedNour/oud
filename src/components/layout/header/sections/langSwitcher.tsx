// Components
import Image from "next/image";
import { Button, Dropdown } from "antd";

// Icons
import langIcon from "../../../../../public/icons/langs/langIcon.svg";
import en from "../../../../../public/icons/langs//en.png";
import ar from "../../../../../public/icons/langs/en.png";

// Types
import type { MenuProps } from "antd";

// Hooks
import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";

const LangSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("Header");
  const locale = useLocale();

  const items: MenuProps["items"] = [
    {
      label: (
        <button onClick={() => onSelectChange("en")} disabled={locale === "en"}>
          <Image src={en} alt="English" />
          <span>English</span>
        </button>
      ),
      key: "0",
    },
    {
      label: (
        <button onClick={() => onSelectChange("ar")} disabled={locale === "ar"}>
          <Image src={ar} alt="العربية" />
          <span>العربية</span>
        </button>
      ),
      key: "1",
    },
  ];

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
      window.location.reload();
    });
  };

  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      rootClassName="langDropdownItems"
      className="langDropdown"
      disabled={isPending}
    >
      <Button>
        <Image src={langIcon} alt={t("Language")} />
      </Button>
    </Dropdown>
  );
};

export default LangSwitcher;
