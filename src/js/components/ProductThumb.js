import React from 'react';
import Figure from 'react-bootstrap/Figure';
import PropTypes from 'prop-types';
import { cheapestVariant, findVariantImage } from '../utilities/dataParsingFunctions';
import '../../style/index.scss';

function CategoryPage({ product }) {
  const {
    name,
    images,
    variants
  } = product;
  const { name: variantName } = cheapestVariant(variants);
  const {url} = findVariantImage(images, variantName);

  return (
    <Figure>
      <Figure.Image
        src={url}
      />
      <Figure.Caption>
        <p>{name}</p>
      </Figure.Caption>
    </Figure>
  );
}

CategoryPage.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    variants: PropTypes.array.isRequired
  }).isRequired
};

export default CategoryPage;
