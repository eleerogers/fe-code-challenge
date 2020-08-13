import React, { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import axios from 'axios';
import PropTypes from 'prop-types';

const ProductContext = React.createContext();


// Using Context for this app is probably overkill, but if the app were to grow Context could make things easier as it allows access to state throughout the app without prop drilling.
function ProductContextProvider({children}) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useLocalStorage('cartItems', []);
  const [category, setCategory] = useState('');

  useEffect(() => {
    let mounted = true;
    // since "API calls" here aren't really async in this app using cancelTokens is not really necessary, but this is how I would normally do it
    const source = axios.CancelToken.source();
    const url = `http://localhost:8081/api/categories?slug=${category}`;
    axios.get(url, { cancelToken: source.token })
      .then(results => {
        const {data} = results;
        if (mounted && data[0]) {
          const [{products}] = data;
          setProducts(products);
        }
      })
      .catch(err => {
        if (axios.isCancel(err)) {
          console.log('axios call was cancelled');
        } else {
          console.error(err);
        }
      });
    return () => {
      mounted = false;
      source.cancel();
    };
  }, [category]);
    
  function addToCart(newItem) {
    // We don't want to add the same item twice. If this were real we'd simply add to the quantity.
    const alreadyInCart = cartItems.find(item => newItem.id === item.id);
    if (!alreadyInCart) {
      setCartItems(prevItems => [...prevItems, newItem]);
    }
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
