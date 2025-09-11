"use client";

import { createContext, useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { CartContextType, CartType, CartItemType } from "@/types/cart";

const CART_COOKIE_KEY = "shopping-cart";
const CART_COOKIE_EXPIRES = 7; // days

export const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartType>({ items: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isRedirectToCheckout, setIsRedirectToCheckout] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize cart from cookie
  useEffect(() => {
    try {
      const savedCart = Cookies.get(CART_COOKIE_KEY);
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (err) {
      setError("Error loading cart data");
      console.error("Error parsing cart cookie:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save cart to cookie whenever it changes
  useEffect(() => {
    if (!isLoading) {
      try {
        Cookies.set(CART_COOKIE_KEY, JSON.stringify(cart), {
          expires: CART_COOKIE_EXPIRES,
          sameSite: "lax",
        });
        setError(null);
      } catch (err) {
        setError("Error saving cart data");
        console.error("Error saving cart:", err);
      }
    }
  }, [cart, isLoading]);

  const addToCart = useCallback((newItem: CartItemType) => {
    if (newItem.quantity <= 0) return;

    setCart((prevCart) => {
      const existingItem = prevCart.items.find(
        (item) => item.productVariation.id === newItem.productVariation.id
      );

      if (existingItem) {
        return {
          ...prevCart,
          items: prevCart.items.map((item) =>
            item.productVariation.id === newItem.productVariation.id
              ? {
                  ...item,
                  quantity: item.quantity + newItem.quantity,
                  price: newItem.productVariation.price,
                }
              : item
          ),
        };
      }

      return {
        ...prevCart,
        items: [...prevCart.items, { ...newItem }],
      };
    });
  }, []);

  const removeFromCart = useCallback(
    (productId: number, variationId: number) => {
      setCart((prevCart) => ({
        ...prevCart,
        items: prevCart.items.filter(
          (item) =>
            !(
              item.productId === productId &&
              item.productVariation.id === variationId
            )
        ),
      }));
    },
    []
  );

  const updateQuantity = useCallback(
    (productId: number, variationId: number, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(productId, variationId);
        return;
      }

      setCart((prevCart) => ({
        ...prevCart,
        items: prevCart.items.map((item) =>
          item.productId === productId &&
          item.productVariation.id === variationId
            ? {
                ...item,
                quantity,
              }
            : item
        ),
      }));
    },
    [removeFromCart]
  );

  const clearCart = useCallback(() => {
    setCart({ items: [] });
    Cookies.remove(CART_COOKIE_KEY);
  }, []);

  const getItemCount = useCallback(() => {
    return cart.items.reduce((total, item) => total + item.quantity, 0);
  }, [cart.items]);

  const getCartTotal = useCallback(() => {
    return cart.items.reduce((total, item) => {
      const itemPrice = item.productVariation?.price || 0;
      return total + itemPrice * item.quantity;
    }, 0);
  }, [cart.items]);

  const redirectToCheckout = useCallback(() => {
    setIsRedirectToCheckout(true);
  }, []);

  const value: CartContextType = {
    cart,
    isLoading,
    error,
    isRedirectToCheckout,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getItemCount,
    getCartTotal,
    redirectToCheckout,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
