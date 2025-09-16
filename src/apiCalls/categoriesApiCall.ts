import axios from "@/lib/axios";

// Types
import { Categories } from "@/types/categories";

export async function getCategories() {
  try {
    const response = await axios.get(`/home-page-settings`);

    return response.data.data;
  } catch (error: any) {
    console.log(error);
  }
}
