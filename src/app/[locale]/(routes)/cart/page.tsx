//Components
// import { getCart } from "@/apiCalls/cartApiCall";
import CartComponent from "@/components/cart/cart";

// Hooks
// import { getTranslations } from "next-intl/server";

const CartPage: React.FC = () => {
  // const cart = await getCart();

  return <CartComponent cart={{}} />;
};

export default CartPage;

// export const generateMetadata = async () => {
//   const t = await getTranslations("Cart");

//   return {
//     title: t("shopping cart"),
//   };
// };
