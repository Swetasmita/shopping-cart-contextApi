import React, {useContext} from 'react';
import {CartContext} from "../contexts/CartContext";

const Item = (props) => {
    const cart = useContext(CartContext);
    const addToCart = () =>{
        cart.setItems([...cart.items, props]);
    }
  return (
    <div className="item-card">
        <h4>Item Name: {props.name}</h4>
        <p>Price: ${props.price}</p>
        <button onClick={addToCart}>Add To Cart</button>
    </div>
  )
}

export default Item