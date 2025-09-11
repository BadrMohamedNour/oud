export interface CartItemType {
  title?: string;
  productId: number;
  productVariation: {
    id: number;
    size: string;
    price?: number;
  };
  quantity: number;
}

export interface CartType {
  items: CartItemType[];
}

export type CartTypeRequest = {
  product_id: number;
  attributes: {
    "pa_%d8%a7%d9%84%d8%ad%d8%ac%d9%85": string;
  };
  quantity: number;
};

export interface CartContextType {
  cart: CartType;
  isLoading: boolean;
  error: string | null;
  isRedirectToCheckout: boolean;
  addToCart: (item: CartItemType) => void;
  removeFromCart: (productId: number, variationId: number) => void;
  updateQuantity: (
    productId: number,
    variationId: number,
    quantity: number
  ) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getCartTotal: () => number;
  redirectToCheckout: () => void;
}
