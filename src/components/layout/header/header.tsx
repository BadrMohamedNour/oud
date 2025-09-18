// Styles
import style from "./styles/header.module.scss";

// Components
import { Badge } from "antd";
import Link from "next/link";
import MainDrawer from "@/components/layout/header/sections/mainDrawer";
import ButtonS1 from "@/components/tools/buttons/buttonS1";
import LangSwitcher from "./sections/langSwitcher";
import CategoriesMenu from "./sections/categories";
import ModalLogin from "./sections/modals/modalLogin/modalLogin";

// Images & Icons
import SvgLogo from "@/assets/svg/logo";
import SvgUser from "@/assets/svg/user";
import SvgLogoText from "@/assets/svg/logoText";
import SvgShoppingBag from "@/assets/svg/shoppingBag";

// Hooks
import { cookies } from "next/headers";

// Types
import { Categories } from "@/types/categories";
import { getCookie } from "@/utils/getCookies";

const Header: React.FC<{ categories: Categories }> = async ({ categories }) => {
  const MToken = await getCookie("MToken");
  return (
    <header className={`${style.header} container`}>
      <div className="content">
        <div className="logoMenu flexCenter">
          <MainDrawer />

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
        </div>

        <div className="actions flexCenter">
          <div className="auth">
            {MToken ? (
              <Link href="/profile" className="flexCenter">
                <SvgUser />
              </Link>
            ) : (
              <ModalLogin />
            )}
          </div>

          <Badge count={0}>
            <Link href="/cart" className="flexCenter">
              <SvgShoppingBag />
            </Link>
          </Badge>

          <LangSwitcher />
        </div>
      </div>
      {/* <CategoriesMenu categories={categories} /> */}
    </header>
  );
};

export default Header;
