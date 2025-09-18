import axios from "@/lib/axios";

export async function getAppSeo() {
  try {
    const response = await axios.get(`/home-page-seo`);

    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}
