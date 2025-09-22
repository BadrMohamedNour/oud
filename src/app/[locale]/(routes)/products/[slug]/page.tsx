//Components
import { getProductData } from "@/apiCalls/productApiCall";

// Actions
import ProductComponent from "@/components/product/product";

// Types
import { Metadata } from "next";

const ProductPage: React.FC<{ params: { slug: string } }> = async ({
  params,
}) => {
  const { slug } = await params;
  const productData = await getProductData(slug);
  return <ProductComponent productData={productData} />;
};

export default ProductPage;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;

  const productData = await getProductData(slug);

  return {
    title: productData?.meta_title,
    description: productData?.meta_description,
    keywords: productData?.meta_keywords,
    openGraph: {
      title: productData?.meta_title,
      description: productData?.meta_description,
      images: [
        {
          url: productData?.meta_image,
          width: 800,
          height: 600,
        },
      ],
      siteName: "Almokhlif Oud",
    },
    twitter: {
      card: "summary_large_image",
      title: productData?.meta_title,
      description: productData?.meta_description,
      images: [productData?.meta_image],
    },
  };
}
