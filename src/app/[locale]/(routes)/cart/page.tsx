//Components
import CartComponent from "@/components/cart/cart"

// Hooks
import { getTranslations } from "next-intl/server"

// Actions
import { getCart } from "@/apiCalls/cartApiCall"

const CartPage: React.FC = async (): Promise<JSX.Element> => {
  const cart = await getCart()

  return <CartComponent cart={cart} />
}

export default CartPage

export const generateMetadata = async () => {
  const t = await getTranslations("Cart")

  return {
    title: t("shopping cart"),
  }
}
