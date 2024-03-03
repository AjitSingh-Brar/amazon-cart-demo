import React from "react";
import "./CartItems.css";
import CartItem from "./CartItem";

const CartItems = ({ items }) => {
  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="CartItems-items">
        {items.map((item, index) => (
          <CartItem
            key={index}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default CartItems;
