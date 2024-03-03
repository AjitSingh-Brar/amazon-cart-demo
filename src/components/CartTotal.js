import React from "react";
import "./CartTotal.css";
import { NumericFormat } from "react-number-format";

const CartTotal = ({ items }) => {
  const getTotalPrice = () => {
    //  init total price to 0
    // loop through all the iem sin the cart
    // Add the price to the quantity to the total price
    // return the total price
    let total = 0;
    let quantityTotal = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
      quantityTotal += item.quantity;
    });
    return { total, quantityTotal };
  };

  return (
    <div className="CartTotal">
      <h3>
        Subtotal({getTotalPrice().quantityTotal} items):
        <span className="CartTotal-price">
          <NumericFormat
            value={getTotalPrice().total}
            displayType="text"
            thousandSeparator={true}
            prefix="$"
            decimalScale={2}
          />
        </span>
      </h3>
      <button>Proceed to checkout</button>
    </div>
  );
};

export default CartTotal;
