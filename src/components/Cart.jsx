import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const cart = useContext(CartContext);
  const total = cart.items.reduce((a, b) => a + b.price, 0);
  return (
    <div className="cart">
      <h4>Selected Items: </h4>
      {cart &&
        cart.items.map((cartItem, idx) => (
          <li key={idx}>
            {cartItem.name} - {cartItem.price}
          </li>
        ))}
      <h5>Total Bill: ${total} </h5>
    </div>
  );
};

export default Cart;
