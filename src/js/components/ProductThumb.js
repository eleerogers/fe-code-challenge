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
  const picIdNum = getRandomPicNumber(id);
  const [loading, setLoadingFalse] = useLoading();

  return (
    <div>
      <Figure
        className={`img-fluid p-3 centered transition ${loading ? 'loading' : 'done'}`}
      >
        <Figure.Image
          alt={name}
          src={`${url}/${picIdNum}`}
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
