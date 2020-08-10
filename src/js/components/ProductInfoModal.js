import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

function ProductInfoModal({ product, children }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleConfirmDelete = () => {
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
            {children}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this
          {' '}
          {product.name}
          ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

ProductInfoModal.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  children: PropTypes.object.isRequired
};

export default ProductInfoModal;