//Components
import IndexComponent from "@/components/indexComponent/indexComponent";
import axios from "@/lib/axios";
import { use } from "react";

const getBanners = async () => {
  const response = await axios.get("/banners-grouped-by-position");

  return response.data.data;
};

const HomePage: React.FC = () => {
  const banners = use(getBanners());
  return <IndexComponent banners={banners} />;
};

export default HomePage;
