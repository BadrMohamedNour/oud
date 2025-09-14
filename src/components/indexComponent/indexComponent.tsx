"use client";

import { Banners } from "@/types/home";
import HeroSection from "./sections/HeroSection";
import styles from "./styles/indexComponent.module.scss";

interface IndexComponentProps {
  banners: { hero: Banners };
}

const IndexComponent: React.FC<IndexComponentProps> = ({ banners }) => {
  return (
    <main className={`${styles.indexComponent} page container`}>
      <HeroSection banners={banners.hero} />
    </main>
  );
};

export default IndexComponent;
