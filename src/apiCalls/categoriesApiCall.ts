import axios from "@/lib/axios";

// Types
import { Categories } from "@/types/categories";

export async function getCategories(): Promise<Categories> {
  const response = await axios.get(`/home-page-settings`);

  return response.data.data;
}
