import { Col, Row } from "antd";
import { ProductSlider } from "./sections/productSlider";
import ProductDataSection from "./sections/productDataSection";
import { Product } from "@/types/product";

const ProductSection: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <section className="productSection">
      <Row gutter={[30, 15]}>
        <Col xs={24} xl={14}>
          <ProductSlider product={product} />
        </Col>
        <Col xs={24} xl={10}>
          <ProductDataSection product={product} />
        </Col>
      </Row>
    </section>
  );
};

export default ProductSection;
