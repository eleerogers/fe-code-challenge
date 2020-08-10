import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductThumb from './ProductThumb';
import ProductInfoModal from './ProductInfoModal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../style/index.scss';

function CategoryPage() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    console.log(category);
    axios.get(`http://localhost:8081/api/categories?slug=${category}`)
      .then(results => {
        const {data} = results;
        const [{products}] = data;
        setProducts(products);
      });
  }, []);

  useEffect(() => {
    console.log('products: ');
    console.log(products);
  }, [products]);

  const productsWithModalWrapper = products.map(prod => (
    <Col
      key={prod.id}
      sm={12}
      md={6}
      lg={4}
    >
      <ProductInfoModal
        product={prod}
      >
        <ProductThumb product={prod} />
      </ProductInfoModal>
    </Col>
  ));

  return (
    <div>
      <Row>
        {productsWithModalWrapper}
      </Row>
    </div>
  );
}

export default CategoryPage;
