"use client";

import { Provider } from "react-redux";
import store from "./store";
import Cookies from "js-cookie";

function Providers({
  children,
  cart_token,
}: {
  children: React.ReactNode;
  cart_token: string;
}) {
  Cookies.set("cart-token", cart_token);

  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
