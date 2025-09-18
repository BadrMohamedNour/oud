import axios from "@/lib/axios"

export async function getAppData() {
  try {
    const response = await axios.get(`/ping`)

    return response.data.data
  } catch (error) {
    console.log(error)
  }
}
