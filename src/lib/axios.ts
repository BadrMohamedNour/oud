import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import { getCookie } from "@/utils/getCookies";
import allUrl from "../configs/allUrl.json";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: allUrl.apiUrl,
  headers: {
    Accept: "application/json",
    "Accept-Language": Cookies.get("NEXT_LOCALE") || "ar",
  },
});

axiosInstance.interceptors.request.use(
  async (
    config: InternalAxiosRequestConfig
  ): Promise<InternalAxiosRequestConfig> => {
    const isServer: boolean = typeof window === "undefined";
    const locale: string = isServer
      ? (await getCookie("NEXT_LOCALE")) || "ar"
      : Cookies.get("NEXT_LOCALE") || "ar";

    // const cartToken: string | undefined = isServer
    //   ? await getCookie("cart-token")
    //   : Cookies.get("cart-token");

    config.headers = config.headers || {};
    // config.headers["cart-token"] = cartToken;
    config.headers["Accept-Language"] = locale;

    return config;
  },
  (error: unknown) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
