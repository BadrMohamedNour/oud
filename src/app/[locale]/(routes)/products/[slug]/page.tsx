//Components
import ProductComponent from "@/components/product/product";

// Types
import { Metadata } from "next";

const ProductPage: React.FC<{ params: { slug: string } }> = async ({
  params,
}) => {
  return <ProductComponent />;
};

export default ProductPage;

export const metadata: Metadata = {
  title: "منتج",
};
