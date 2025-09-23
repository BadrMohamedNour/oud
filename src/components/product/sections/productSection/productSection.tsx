import { Col, Row } from "antd";
import { ProductSlider } from "./sections/productSlider";
import ProductDataSection from "./sections/productDataSection/productDataSection";
import { Product } from "@/types/product";

const ProductSection: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <section className="productSection">
      <Row gutter={[35, 45]}>
        <Col xs={24} lg={14}>
          <ProductSlider product={product} />
        </Col>
        <Col xs={24} lg={10}>
          <ProductDataSection product={product} />
        </Col>
      </Row>
    </section>
  );
};

export default ProductSection;
