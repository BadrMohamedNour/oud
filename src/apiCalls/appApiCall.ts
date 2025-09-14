import axios from "@/lib/axios";

// Types
import { StoreData } from "@/types/store";

export async function getAppData(): Promise<StoreData> {
  const response = await axios.get(`/ping`);

  return response.data.data;
}
