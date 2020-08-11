import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ProductContext } from '../contexts/ProductContext';
import useHover from '../hooks/useHover';
import { cheapestVariant, findVariantImage } from '../utilities/dataParsingFunctions';
import Trash from 'react-bootstrap-icons/dist/icons/trash';
import TrashFill from 'react-bootstrap-icons/dist/icons/trash-fill';

function CartItem({ product }) {
  const [hovered, ref] = useHover();
  const { removeFromCart } = useContext(ProductContext);
  const { images, variants, id } = product;
  const { name: variantName, prices: { regular: price } } = cheapestVariant(variants);
  const { url } = findVariantImage(images, variantName);

  useEffect(() => {
    console.log({product});
  }, []);
    
  const deleteIcon = <div onClick={() => removeFromCart(id)} ref={ref}>
    {hovered ? <TrashFill /> : <Trash onClick={() => removeFromCart(id)} ref={ref} />}
  </div>;
    
  return (
    <div className="cart-item">
      {deleteIcon}   
      <img src={url} width="130px" />
      <p>${price}</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
};

export default CartItem;