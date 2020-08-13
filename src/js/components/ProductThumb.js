import React from 'react';
import Figure from 'react-bootstrap/Figure';
import useLoading from '../hooks/useLoading';
import PropTypes from 'prop-types';
import { cheapestVariant, findVariantImage, getRandomPicNumber } from '../utilities/dataParsingFunctions';


function CategoryPage({ product }) {
  const {
    name,
    images,
    variants,
    id
  } = product;
  const { name: variantName, prices: { regular } } = cheapestVariant(variants);
  const roundedPrice = Math.round(Number(regular));
  const {url} = findVariantImage(images, variantName);
  const [loading, setLoadingFalse] = useLoading();
  // I made the getRandomPicNumber util function to help get different pictures for each product, as browsers notice the same 'src' url being used and just use the same image... but I noticed lorempixum.com is very slow, so I didn't want to slow down the app.
  const picIdNum = getRandomPicNumber(id);

  return (
    <div>
      <Figure
        className={`img-fluid p-3 centered transition ${loading ? 'opacity-0' : 'opacity-1'}`}
      >
        <Figure.Image
          alt={name}
          // if you want different images for different products switch out the 'src' attributes below, and also in the CartItem component.
          // src={`${url}/${picIdNum}`}
          src={`${url}`}
          onLoad={setLoadingFalse}
        />
        <Figure.Caption className="flex space-between">
          <span>{name}</span>
          <span>${roundedPrice}</span>
        </Figure.Caption>
      </Figure>
    </div>
  );
}

CategoryPage.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    variants: PropTypes.array.isRequired
  }).isRequired
};

export default CategoryPage;
