// Components
import Link from "next/link"
import Links from "./sections/links"
import SocialMedia from "./sections/social-media"
import PaymentInfo from "./sections/payment-info"

// Styles
import style from "./styles/footer.module.scss"

// Images
import SvgLogoWhite from "@/assets/svg/logoWhite"

const categories = [
  {
    title: "الأقسام",
    links: [
      {
        name: "خشب العود",
        path: "",
      },
      {
        name: "خشب العود",
        path: "",
      },
      {
        name: "خشب العود",
        path: "",
      },
      {
        name: "خشب العود",
        path: "",
      },
    ],
  },
]

const links = [
  {
    title: "المخلف للعود",
    links: [
      {
        name: "عن المخلف",
        path: "about-us",
      },
      {
        name: "سياسة الخصوصية",
        path: "/privacy-policy",
      },
      {
        name: "شـــــروط الاســـــترجاع",
        path: "/refunds",
      },
      {
        name: "الشروط والأحكام",
        path: "/terms-conditions",
      },
      {
        name: "التحويل المصرفي",
        path: "/bank-transfer",
      },
    ],
  },
]

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="content">
        <div className="logo">
          <Link href={"/"} title={""}>
            <SvgLogoWhite />
          </Link>
        </div>

        <Links links={categories} />

        <Links links={links} />

        <SocialMedia />
      </div>

      <div className="divider" />

      <PaymentInfo />

      <div className="divider" />

      <p className="copyright">{"© جميع الحقوق محفوظة لـ المخلف للعود"}</p>
    </div>
  )
}

export default Footer
