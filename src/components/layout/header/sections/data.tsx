import SvgAddress from "@/assets/svg/address";
import SvgBox from "@/assets/svg/box";
import SvgBoxReturn from "@/assets/svg/boxReturn";
import SvgCreditCard from "@/assets/svg/creditCard";
import SvgFavorite from "@/assets/svg/favorite";
import SvgHome from "@/assets/svg/home";
import SvgLogOut from "@/assets/svg/logOut";
import ROUTES from "@/utils/routes";

const links = [
  { label: ROUTES.ORDERS.name, path: ROUTES.ORDERS.path, icon: <SvgBox /> },
  // {
  //   label: ROUTES.FAVORITE.name,
  //   path: ROUTES.FAVORITE.path,
  //   icon: <SvgFavorite />,
  // },
  {
    label: ROUTES.ADDRESS.name,
    path: ROUTES.ADDRESS.path,
    icon: <SvgAddress />,
  },
  {
    label: ROUTES.RETURNS.name,
    path: ROUTES.RETURNS.path,
    icon: <SvgBoxReturn />,
  },
  // {
  //   label: ROUTES.PAYMENT_METHODS.name,
  //   path: ROUTES.PAYMENT_METHODS.path,
  //   icon: <SvgCreditCard />,
  // },
];

const otherLinks = [
  {
    label: "السياسات",
    path: "",
    icon: <SvgHome />,
  },
];

const subLinks = [
  {
    label: ROUTES.ABOUT_US.name,
    path: ROUTES.ABOUT_US.path,
    icon: <SvgHome />,
  },
  {
    label: ROUTES.PRIVACY_POLICY.name,
    path:  ROUTES.PRIVACY_POLICY.path,
    icon: <SvgHome />,
  },
  {
    label: ROUTES.TERMS.name,
    path:  ROUTES.TERMS.path,
    icon: <SvgHome />,
  },
  {
    label: ROUTES.BANK_TRANSFER.name,
    path:  ROUTES.BANK_TRANSFER.path,
    icon: <SvgHome />,
  },
  {
    label: ROUTES.RETURN_POLICY_TERMS.name,
    path:  ROUTES.RETURN_POLICY_TERMS.path,
    icon: <SvgHome />,
  },
];

const logOut = {
  label: "تسجيل الخروج",
  path: "",
  icon: <SvgLogOut />,
};

export { links, otherLinks, subLinks, logOut };
