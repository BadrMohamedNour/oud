"use client";

// Components
import { Badge } from "antd";
import Link from "next/link";
import SideBarMobile from "@/components/layout/header/sections/drawer";
import ButtonS1 from "@/components/common/ui/buttons/buttonS1/buttonS1";

// Images & Icons

import SvgLogo from "@/assets/svg/logo";
import SvgUser from "@/assets/svg/user";
import SvgLogoText from "@/assets/svg/logoText";
import SvgShoppingBag from "@/assets/svg/shoppingBag";

// Hooks
import { useCart } from "@/hook/use-cart";

const MainHeader = () => {
  const { getItemCount } = useCart();

  return (
    <div className="main-header">
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
        <Badge count={getItemCount()}>
          <ButtonS1
            icon
            type="link"
            styles="cart"
            path="/cart"
            text={<SvgShoppingBag />}
          />
        </Badge>

        <SideBarMobile />

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
  );
};

export default MainHeader;
