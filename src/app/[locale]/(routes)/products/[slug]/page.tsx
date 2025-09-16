//Components

// Types
import { Metadata } from "next"

const ProductPage: React.FC<{ params: { slug: string } }> = async ({ params }) => {
  const { slug } = params

  return <div>{slug}</div>
}

export default ProductPage

export const metadata: Metadata = {
  title: "منتج",
}
