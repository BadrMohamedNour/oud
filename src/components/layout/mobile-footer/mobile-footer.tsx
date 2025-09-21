"use client";

// Components
import Link from "next/link";

// Icons
import SvgHome from "@/assets/svg/home";
// import SvgShoppingBag from "@/assets/svg/shoppingBag";
import SvgProducts from "@/assets/svg/products";
import SvgUser from "@/assets/svg/user";

// Utils
import IsActiveLink from "@/utils/active-link";

// Styles
import style from "./styles/mobile-footer.module.scss";

export const MobileFooterData = [
  {
    icon: <SvgHome />,
    title: "الرئيسية",
    path: "/",
    text: "الرئيسية",
  },
  {
    // icon: <SvgShoppingBag color="#484E51" />,
    title: "السلة",
    path: "/cart",
    text: "السلة",
    isShoppingBag: true,
  },
  {
    icon: <SvgProducts />,
    title: "المنتجات",
    path: "products",
    text: "المنتجات",
  },
  {
    icon: <SvgUser />,
    title: "الحساب",
    path: "/profile",
    text: "الحساب",
  },
];

const MobileFooter = () => {
  return (
    <ul className={style.mobileFooter}>
      {MobileFooterData.map(
        ({ icon, path, text, title, isShoppingBag }, index) => (
          <li key={index}>
            <Link
              href={path}
              title={title}
              className={`${IsActiveLink({ path }) ? "active" : ""}`}
            >
              {isShoppingBag ? (
                <div
                  className="badge"
                  // data-badge={getItemCount() > 99 ? "99+" : getItemCount()}
                >
                  {icon}
                </div>
              ) : (
                icon
              )}
              <span>{text}</span>
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default MobileFooter;
