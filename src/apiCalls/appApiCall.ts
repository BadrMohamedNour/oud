import axios from "@/lib/axios";

// Types
import { StoreData } from "@/types/store";

export async function getAppData() {
  try {
    const response = await axios.get(`/ping`);

    return response.data.data;
  } catch (error: any) {
    console.log(error);
  }
}
