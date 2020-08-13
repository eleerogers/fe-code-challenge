import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { useParams } from 'react-router-dom';
import ProductThumb from './ProductThumb';
import ProductInfoModal from './ProductInfoModal';
import { slugToTitle } from '../utilities/dataParsingFunctions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function CategoryPage() {
  const { products, setCategory } = useContext(ProductContext);
  const { category } = useParams();
  const title = slugToTitle(category);

  useEffect(() => {
    // setting the category in ProductContext to make correct API call
    setCategory(category);
  }, []);

  const productsWithModalWrapper = products.map(prod => (
    <Col
      key={prod.id}
      sm={12}
      md={6}
      lg={4}
      className="mt-3 mb-3"
    >
      <ProductInfoModal
        product={prod}
      >
        <ProductThumb product={prod} />
      </ProductInfoModal>
    </Col>
  ));

  return (
    <Container className="mt-3">
      <h5 className="text-centered mt-5 mb-3">{title}</h5>
      <Row>
        {productsWithModalWrapper}
      </Row>
    </Container>
  );
}

export default CategoryPage;
