// Compoents
import { Col, Row } from "antd"
import CartProduct from "./sections/cartProduct"

// Styles
import styles from "./styles/cart.module.scss"

// Hooks
import { useTranslations } from "next-intl"

// Types
import { Cart, ProductItem } from "@/types/cart"
import OrderSummary from "./sections/orderSummary"

const CartComponent: React.FC<{ cart: Cart }> = ({ cart }) => {
  const t = useTranslations("Cart")

  return (
    <main className={`${styles.cartComponent} page container`}>
      <section className="page-header flexCenter flexStart">
        <h1>{t("shopping cart")}</h1>
        <div className="count flexCenter">
          (<span>{cart.items_count}</span>
          <span>{t("Product")}</span>)
        </div>
      </section>

      <section>
        <Row gutter={[30, 30]}>
          <Col lg={16}>
            <div className="products">
              {cart.items.map((item: ProductItem) => (
                <CartProduct key={item.id} item={item} />
              ))}
            </div>
          </Col>

          <Col lg={8}>
            <OrderSummary cart={cart} />
          </Col>
        </Row>
      </section>
    </main>
  )
}

export default CartComponent
