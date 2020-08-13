import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from 'react-bootstrap-icons/dist/icons/cart';

function Header() {
  return (
    <header>
      <Link className="header-title" to="/">
        <h4 className="ml-3 mb-0"><em>Unconventional Arrangements</em></h4>
      </Link>
      <Link to="/cart">
        <CartIcon size={25} className="mr-3 ml-2 cart-icon" />
      </Link>
    </header>
  );
}

export default Header;
