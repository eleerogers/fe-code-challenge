import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { titleToSlug } from '../utilities/dataParsingFunctions';
import {
  CATEGORY_NAMES_CUSTOM,
  CATEGORY_NAMES_FLOWER_TYPES,
  CATEGORY_NAMES_OCCASIONS
} from '../../../api/apiConstants';

function CategoryDropdown() {
  const customMenuItems = CATEGORY_NAMES_CUSTOM.map(title => {
    const slug = titleToSlug(title);
    return <Dropdown.Item as={Link} key={slug} to={`./${slug}`}>{title}</Dropdown.Item>;
  });
  const flowerMenuItems = CATEGORY_NAMES_FLOWER_TYPES.map(title => {
    const slug = titleToSlug(title);
    return <Dropdown.Item as={Link} key={slug} to={`./${slug}`}>{title}</Dropdown.Item>;
  });
  const occasionsMenuItems = CATEGORY_NAMES_OCCASIONS.map(title => {
    const slug = titleToSlug(title);
    return <Dropdown.Item as={Link} key={slug} to={`./${slug}`}>{title}</Dropdown.Item>;
  });


  return (
    <div className="flex">
      <Dropdown className="centered margin-top-5rem">
        <Dropdown.Toggle variant="info" size="lg">
          Flower Selections
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {[...customMenuItems]}
          <Dropdown.Header>Flower Types</Dropdown.Header>
          {[...flowerMenuItems]}
          <Dropdown.Header>Occasions</Dropdown.Header>
          {[...occasionsMenuItems]}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default CategoryDropdown;
