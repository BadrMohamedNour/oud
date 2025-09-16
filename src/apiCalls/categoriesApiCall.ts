import axios from "@/lib/axios"

export async function getCategories() {
  try {
    const response = await axios.get(`/home-page-settings`)
    return response.data.data
  } catch (error) {
    console.log(error)
  }
}
