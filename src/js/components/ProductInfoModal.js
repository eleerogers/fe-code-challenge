import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import AddToCartIcon from 'react-bootstrap-icons/dist/icons/cart-plus';
import PropTypes from 'prop-types';

function ProductInfoModal({ product, children }) {
  const [show, setShow] = useState(false);
  const { name, description, manufacturer: { name: manufacturerName, location} } = product;

  const handleShow = () => setShow(true);
  const handleAddToCart = () => {
    // handleDelete(itemObj, loggedInAsAdminBool);
    // setShow(false);
  };
  const handleCancelDelete = () => {
    setShow(false);
  };

  return (
    <>
      <Button
        size="sm"
        variant="light"
        onClick={handleShow}
        className="btn-square"
      >
        {children}
      </Button>

      <Modal show={show} onHide={handleCancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>
            {name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Manufacturer: {manufacturerName} ({location})</p>
          <p>Description: {description}</p>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button onClick={handleAddToCart}>
            {/* <AddToCartIcon /> */}
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

ProductInfoModal.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    manufacturer: PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired
    })
  }).isRequired,
  children: PropTypes.object.isRequired
};

export default ProductInfoModal;