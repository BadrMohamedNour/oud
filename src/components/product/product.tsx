"use client";

// Compoents

// Styles
import styles from "./styles/product.module.scss";

// Hooks
import { useTranslations } from "next-intl";

// TYpes

const ProductComponent: React.FC = ({}) => {
  const t = useTranslations("Home");

  return <main className={`${styles.indexComponent} page container`}></main>;
};

export default ProductComponent;
