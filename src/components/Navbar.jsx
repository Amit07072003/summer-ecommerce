import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartcontext'; // Import context
import '../styles/Navbar.css';

const Navbar = () => {
  const { totalItems } = useContext(CartContext); // Get total items from context

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>
          <Link to="/">
            <span role="img" aria-label="sun">🌞</span> SummerStyle
          </Link>
        </h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Shop</Link></li>
        <li>
          <Link to="/cart" className="cart-link">
            Cart <span role="img" aria-label="shopping cart">🛒</span>
            {totalItems > 0 && (
              <span className="cart-count">{totalItems}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
