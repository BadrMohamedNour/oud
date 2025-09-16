//Components
import IndexComponent from "@/components/index";
import axios from "@/lib/axios";
import { use } from "react";

const getBanners = async () => {
  try {
    const response = await axios.get("/banners-grouped-by-position");

    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const getProducts = async () => {
  try {
    const response = await axios.get("/home-page-products");

    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

const HomePage: React.FC = () => {
  const banners = use(getBanners());
  const products = use(getProducts());

  return <IndexComponent banners={banners} products={products} />;
};

export default HomePage;
