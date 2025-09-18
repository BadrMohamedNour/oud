import { memo } from "react";
import Link from "next/link";
import SocialMedia from "./sections/social-media";
import { StoreData } from "@/types/store";
import style from "./styles/footer.module.scss";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Col, Row } from "antd";

interface FooterProps {
  appData: StoreData;
}

const Footer: React.FC<FooterProps> = ({ appData }) => {
  const t = useTranslations("Footer");

  return (
    <footer className={`${style.footer} container`}>
      <div className="top-section">
        <div className="logo">
          <Link href="/">
            <Image
              src={appData?.store_settings.company_logo.value}
              fill
              alt={appData?.store_settings.company_logo.shown_name}
            />
          </Link>
        </div>

        <div className="links">
          <h3>{t("Al Mukhlif Oud")}</h3>
          <ul>
            {appData?.store_policies?.map(({ key, name, value }) => (
              <li key={key}>
                <Link href={value || ""}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <SocialMedia storeContact={appData?.store_contacts} />

        <ul className="logos">
          <li>
            <Image
              src="/icons/payments/layer_2.svg"
              width={145}
              height={65}
              alt="Logo 1"
            />
          </li>
          <li>
            <Image
              src="/icons/payments/layer_1.svg"
              width={85}
              height={106}
              alt="Logo 2"
            />
          </li>
        </ul>
      </div>

      <div className="bottom-section ">
        <Row gutter={[16, 16]}>
          <Col md={8}>
            <div className="flexCenter flexStart">
              <ul className="payment-info">
                <li>
                  <Image
                    src="/icons/payments/mada.svg"
                    width={61}
                    height={20}
                    alt="Mada payment"
                  />
                </li>
                <li>
                  <Image
                    src="/icons/payments/visa.svg"
                    width={58}
                    height={18}
                    alt="Visa payment"
                  />
                </li>
                <li>
                  <Image
                    src="/icons/payments/mastercard.svg"
                    width={44}
                    height={27}
                    alt="Mastercard payment"
                  />
                </li>
                <li>
                  <Image
                    src="/icons/payments/applepay.svg"
                    width={59}
                    height={24}
                    alt="Apple Pay payment"
                  />
                </li>
                <li>
                  <Image
                    src="/icons/payments/bank.svg"
                    width={32}
                    height={32}
                    alt="Bank payment"
                  />
                </li>
              </ul>
            </div>
          </Col>
          <Col md={8}>
            <div className="copyright flexCenter">
              <p>{t("© All rights reserved to Al Mukhlif Oud")}</p>
            </div>
          </Col>
          <Col md={8}>
            <div className="details flexCenter flexEnd">
              <span>
                {
                  appData.store_settings?.commercial_registration_number
                    .shown_name
                }
                :{appData.store_settings?.commercial_registration_number.value}
              </span>
              <span>
                {appData.store_settings?.tax_number.shown_name}:
                {appData.store_settings?.tax_number.value}
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default memo(Footer);
