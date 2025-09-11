import CartItemSkelton from "./cart-item-skeleton";

type Props = {
  count?: number;
};
function CartItemsListSkeleton({ count = 4 }: Props) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <CartItemSkelton key={index} />
      ))}
    </>
  );
}

export default CartItemsListSkeleton;
