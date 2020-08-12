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
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const total = cartItems.reduce((acc, cv) => {
      const { variants } = cv;
      const { prices: { regular: price } } = cheapestVariant(variants);
      return acc + Number(price);
    }, 0);
    setTotalCost(total);
  }, [cartItems]);

  const cartItemsComponents = cartItems.map(prod => (<CartItem key={prod.id} product={prod} />));

  return (
    <Container className="mt-3 cart-page">
      <h3 className="text-centered mt-5 mb-5">Cart</h3>
      <div className="cart-container">
        <div>
          {cartItemsComponents}
        </div>
        <p className={`total-cost mt-5 mr-2 ${cartItems.length > 0 ? 'opacity-1' : 'opacity-0'}`}>
          Total: {totalCostDisplay}
        </p>
      </div>
    </Container>
  );
}

export default Cart;