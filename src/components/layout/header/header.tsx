"use client";

// Styles
import style from "./styles/header.module.scss";

// Components
import { Badge } from "antd";
import Link from "next/link";
import MainDrawer from "@/components/layout/header/sections/mainDrawer";
import ButtonS1 from "@/components/tools/buttons/buttonS1/buttonS1";
import LangSwitcher from "./sections/langSwitcher";
import CategoriesMenu from "./sections/categoriesMenu";

// Images & Icons
import SvgLogo from "@/assets/svg/logo";
import SvgUser from "@/assets/svg/user";
import SvgLogoText from "@/assets/svg/logoText";
import SvgShoppingBag from "@/assets/svg/shoppingBag";

// Hooks
import { useCart } from "@/hook/use-cart";

// Types
import { Categories } from "@/types/categories";

const Header: React.FC<{ categories: Categories }> = ({ categories }) => {
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

      <CategoriesMenu categories={categories} />
    </header>
  );
};

export default Header;
