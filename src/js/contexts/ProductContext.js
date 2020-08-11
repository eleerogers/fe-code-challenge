import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const ProductContext = React.createContext();


function ProductContextProvider({children}) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8081/api/categories?slug=${category}`)
      .then(results => {
        const {data} = results;
        if (data[0]) {
          const [{products}] = data;
          setProducts(products);
        }
      });
  }, [category]);
    
  function addToCart(newItem) {
    setCartItems(prevItems => [...prevItems, newItem]);
  }
    
  function removeFromCart(id) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }
    
  return (
    <ProductContext.Provider value={{
      products,
      cartItems,
      setCategory,
      addToCart,
      removeFromCart
    }}>
      {children}
    </ProductContext.Provider>
  );
}

ProductContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export {ProductContextProvider, ProductContext};
