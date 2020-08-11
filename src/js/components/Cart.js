import React, {useState, useEffect, useContext} from 'react';
import { ProductContext } from '../contexts/ProductContext';

import ProductThumb from './ProductThumb';
import ProductInfoModal from './ProductInfoModal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import '../../style/index.scss';

function Cart() {
  const { cartItems, removeFromCart } = useContext(ProductContext);
  // const { category } = useParams();
  // useEffect(() => {
  //   console.log(category);
  //   axios.get(`http://localhost:8081/api/categories?slug=${category}`)
  //     .then(results => {
  //       const {data} = results;
  //       const [{products}] = data;
  //       setProducts(products);
  //     });
  // }, []);

  // useEffect(() => {
  //   console.log('products: ');
  //   console.log(products);
  // }, [products]);

  const productsWithModalWrapper = cartItems.map(prod => (
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
      <h1>HOWDY DOODY</h1>
      <Row>
        {productsWithModalWrapper}
      </Row>
    </Container>
  );
}

export default Cart;