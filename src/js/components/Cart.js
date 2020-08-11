import React, {useState, useEffect, useContext} from 'react';
import { ProductContext } from '../contexts/ProductContext';
import CartItem from './CartItem';
import { cheapestVariant } from '../utilities/dataParsingFunctions';
import Container from 'react-bootstrap/Container';


function Cart() {
  const { cartItems } = useContext(ProductContext);
  const [totalCost, setTotalCost] = useState(0);
  const totalCostDisplay = totalCost.toLocaleString('en-US', {style: 'currency', currency: 'USD'});

  useEffect(() => {
    const total = cartItems.reduce((acc, cv) => {
      const { variants } = cv;
      const { prices: { regular: price } } = cheapestVariant(variants);
      return acc + Number(price);
    }, 0);
    setTotalCost(total);
  });

  const cartItemsComponents = cartItems.map(prod => (<CartItem key={prod.id} product={prod} />));

  return (
    <Container className="mt-3 cart-page">
      <h1>Check out</h1>
      <div>
        {cartItemsComponents}
      </div>
      <p className="total-cost">Total: {totalCostDisplay}</p>
    </Container>
  );
}

export default Cart;