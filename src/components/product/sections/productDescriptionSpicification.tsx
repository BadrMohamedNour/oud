import { Tabs, TabsProps } from "antd";
import { Product } from "@/types/product";
import { useTranslations } from "next-intl";

const ProductDescriptionSpicificationSection: React.FC<{
  product: Product;
}> = ({ product }) => {
  const t = useTranslations("Product");

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: t("Description"),
      children: (
        <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
      ),
    },
    {
      key: "2",
      label: t("Specification"),
      children: <div></div>,
    },
  ];

  return (
    <section className="productDescriptionSpicificationSection">
      <Tabs className="tabs" defaultActiveKey="1" items={items} />
    </section>
  );
};

export default ProductDescriptionSpicificationSection;
