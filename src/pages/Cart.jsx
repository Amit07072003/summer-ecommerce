import React, { useContext } from 'react';
import { CartContext } from '../context/cartcontext.js';
import '../styles/cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (id, amount) => {
    const item = cartItems.find((item) => item.id === id);
    const newQuantity = item.quantity + amount;
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>
        <span role="img" aria-label="shopping cart">🛒</span> Your Cart
      </h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              
              <img src={item.images} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}</p>
                <div className="quantity-buttons">
                  <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3 className="total">Total: ₹{totalAmount}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
