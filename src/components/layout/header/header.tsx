"use client";

// Styles
import style from "./styles/header.module.scss";

// Components
import { Badge } from "antd";
import Link from "next/link";
import MainDrawer from "@/components/layout/header/sections/mainDrawer";
import ButtonS1 from "@/components/common/ui/buttons/buttonS1/buttonS1";
import LangSwitcher from "./sections/langSwitcher";

// Images & Icons
import SvgLogo from "@/assets/svg/logo";
import SvgUser from "@/assets/svg/user";
import SvgLogoText from "@/assets/svg/logoText";
import SvgShoppingBag from "@/assets/svg/shoppingBag";

// Hooks
import { useCart } from "@/hook/use-cart";

const categories = [
  {
    name: "هندي",
    id: "109",
    path: `/17`,
  },
  {
    name: "سيلاني",
    id: "110",
    path: `/17`,
  },
  {
    name: "مروكي",
    id: "108",
    path: `/17`,
  },
  {
    name: "فلبيني",
    id: "150",
    path: `/17`,
  },
  {
    name: "كلمنتان",
    id: "111",
    path: `/17`,
  },
  {
    name: "ماليزي",
    id: "149",
    path: `/17`,
  },
  {
    name: "جنوب تايلند",
    id: "123",
    path: `/17`,
  },
  {
    name: "كوياي",
    id: "192",
    path: `/17`,
  },
  {
    name: "براشين",
    id: "187",
    path: `/17`,
  },
  {
    name: "ترات",
    id: "134",
    path: `/17`,
  },
  {
    name: "لاوسي",
    id: "133",
    path: `/17`,
  },
  {
    name: "كمبودي",
    id: "122",
    path: `/17`,
  },
  {
    name: "سومطري",
    id: "151",
    path: `/17`,
  },
];

const Header = () => {
  const { getItemCount } = useCart();

  return (
    <header className={`${style.header} container`}>
      <div className="content">
        <div className="logo">
          <Link href="/" title="">
            <span>
              <SvgLogo />
            </span>
            <span>
              <SvgLogoText />
            </span>
          </Link>
        </div>

        <div className="actions">
          <LangSwitcher />

          <Badge count={getItemCount()}>
            <ButtonS1
              icon
              type="link"
              styles="cart"
              path="/cart"
              text={<SvgShoppingBag />}
            />
          </Badge>

          <MainDrawer />

          <div className="auth">
            <ButtonS1
              path={false ? "/profile" : "/login"}
              styles="login"
              icon={false}
              text={false ? <SvgUser /> : "تسجيل دخول"}
            />
          </div>
        </div>
      </div>

      <ul className="categories">
        {categories.map(({ id, name, path }) => (
          <li key={id}>
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
