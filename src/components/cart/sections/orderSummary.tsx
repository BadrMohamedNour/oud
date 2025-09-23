"use client"
// Components
import Image from "next/image"

// Icons
import currency from "../../../../public/icons/currency.svg"

// Hooks
import { useTranslations } from "next-intl"

// Types
import { Cart } from "@/types/cart"
import { Form, Input } from "antd"
import ButtonS1 from "@/components/tools/buttons/buttonS1"

const OrderSummary: React.FC<{ cart: Cart }> = ({ cart }) => {
  const t = useTranslations("Cart")

  return (
    <div className="order-summary">
      <h2>{t("Order Summary")}</h2>

      <div className="coupon-form">
        <Form layout="inline">
          <Form.Item>
            <Input placeholder={t("Type your promo here")} />
          </Form.Item>

          <ButtonS1 text={t("Apply")} />
        </Form>
      </div>

      <ul>
        <li>
          <div>{t("Subtotal")}</div>
          <div className="flexCenter">
            <span>{cart.total_amount}</span>
            <Image src={currency} alt={t("SAR")} height={16} width={16} />
          </div>
        </li>
        <li>
          <div>{t("Shipping Fee")}</div>
          <div className="flexCenter">
            <span>{cart.total_amount}</span>
            <Image src={currency} alt={t("SAR")} height={16} width={16} />
          </div>
        </li>
      </ul>

      <div className="total flexCenter">
        <div>{t("Total")}</div>
        <div className="flexCenter">
          <span>{cart.total_amount}</span>
          <Image src={currency} alt={t("SAR")} height={20} width={20} />
        </div>
      </div>

      <ButtonS1 text={t("Checkout")} />
    </div>
  )
}

export default OrderSummary
