import axios from "@/lib/axios";

export async function getProductData(slug: string) {
  try {
    const response = await axios.get(`/products/${slug}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}
