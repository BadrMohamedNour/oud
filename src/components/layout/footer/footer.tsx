// Components
import Link from "next/link";
import Links from "./sections/links";
import SocialMedia from "./sections/social-media";
import PaymentInfo from "./sections/payment-info";

// Styles
import style from "./styles/footer.module.scss";

// Images
import SvgLogoWhite from "@/assets/svg/logoWhite";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="content">
        <div className="logo">
          <Link href={"/"} title={""}>
            <SvgLogoWhite />
          </Link>
        </div>

        <Links />

        <SocialMedia />
      </div>

      <div className="divider" />

      <PaymentInfo />

      <div className="divider" />

      <p className="copyright">{"© جميع الحقوق محفوظة لـ المخلف للعود"}</p>
    </div>
  );
};

export default Footer;
