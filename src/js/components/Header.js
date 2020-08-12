import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from 'react-bootstrap-icons/dist/icons/cart';

function Header() {
  return (
    <header>
      <h5 className="ml-3 mb-0">Unconventional Arrangements</h5>
      <Link to={'/cart'}>
        <CartIcon size={25} className="mr-3 ml-2 cart-icon" />
      </Link>
    </header>
  );
}

export default Header;
