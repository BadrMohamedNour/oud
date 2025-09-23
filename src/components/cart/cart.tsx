// Compoents

// Styles
import styles from "./styles/cart.module.scss";

// Hooks
import { useTranslations } from "next-intl";

// TYpes
import { IndexComponentProps } from "@/types/home";

const CartComponent: React.FC<any> = async () => {
  const t = useTranslations("Cart");

  return (
    <main className={`${styles.cartComponent} page container`}>
      <section className="page-header flexCenter flexStart">
        <h1>{t("shopping cart")}</h1>
        <div className="count flexCenter">
          (<span>1</span>
          <span>{t("Product")}</span>)
        </div>
      </section>
    </main>
  );
};

export default CartComponent;
