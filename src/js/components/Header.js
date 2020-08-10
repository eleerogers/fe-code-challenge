import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from 'react-bootstrap-icons/dist/icons/cart';

function Header() {
  return (
    <header className="p-3">
      <h2>Title</h2>
      <Link to={'/cart'}>
        <CartIcon size={30} className="mr-3 cart-icon" />
      </Link>
    </header>
  );
}

export default Header;
