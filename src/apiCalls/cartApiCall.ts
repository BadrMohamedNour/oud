import axios from "@/lib/axios";

export async function getCart() {
  try {
    const response = await axios.get(`/cart`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}
