import React from "react";
import "./CartTotal.css";

const CartTotal = ({ items }) => {
  const getTotalPrice = () => {
    //  init total price to 0
    // loop through all the iem sin the cart
    // Add the price to the quantity to the total price
    // return the total price
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div className="CartTotal">
      <h3>
        Subtotal({items.length} items):
        <span className="CartTotal-price">${getTotalPrice()}</span>
      </h3>
      <button>Proceed to checkout</button>
    </div>
  );
};

export default CartTotal;
