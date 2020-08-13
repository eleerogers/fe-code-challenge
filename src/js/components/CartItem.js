import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ProductContext } from '../contexts/ProductContext';
import useHover from '../hooks/useHover';
import useLoading from '../hooks/useLoading';
import { cheapestVariant, findVariantImage, getRandomPicNumber } from '../utilities/dataParsingFunctions';
import Trash from 'react-bootstrap-icons/dist/icons/trash';
import TrashFill from 'react-bootstrap-icons/dist/icons/trash-fill';

function CartItem({ product }) {
  const { images, variants, id, name } = product;
  const [hovered, ref] = useHover();
  const { removeFromCart } = useContext(ProductContext);
  const [loading, setLoadingFalse] = useLoading();
  const { name: variantName, prices: { regular: price } } = cheapestVariant(variants);
  const { url } = findVariantImage(images, variantName);
  // ** I made the getRandomPicNumber util function to help get different pictures for each product, as browsers notice the same 'src' url being used and just use the same image... but I noticed lorempixum.com is very slow, so I didn't want to slow down the app. Leaving it in case you'd like to try it (see below).
  const picIdNum = getRandomPicNumber(id);
    
  const deleteIcon = <div className="mr-5" onClick={() => removeFromCart(id)} ref={ref}>
    {hovered ? <TrashFill size={20} /> : <Trash size={20} />}
  </div>;
    
  return (
    <div className="cart-item">
      {deleteIcon}   
      <img
        // ** if you want different images for different products switch out the 'src' attributes below, and also in the ProductThumb component.
        // src={`${url}/${picIdNum}`}
        src={`${url}`}
        width="100px"
        onLoad={setLoadingFalse}
        className={`cart-img transition ${loading ? 'opacity-0' : 'opacity-1'}`}
      />
      <div className="flex cart-item-info ml-3">
        <p>{name}</p>
        <p>${price}</p>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    variants: PropTypes.array.isRequired
  }).isRequired
};

export default CartItem;