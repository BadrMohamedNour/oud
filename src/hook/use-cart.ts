"use client";

import { useContext } from "react";
import { CartContext } from "@/context/cart-context";
// import { CartContextType } from "@/types/cart";

export const useCart = (): any => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
