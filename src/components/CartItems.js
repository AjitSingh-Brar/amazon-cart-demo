import React from "react";
import "./CartItems.css";
import CartItem from "./CartItem";

const CartItems = ({ items, setCartItems }) => {
  const changeItemQuantity = (e, index) => {
    //when we select the qaunityt on item, we pass it in here
    // pass in the index
    // using the index changethe quantity
    // update the tems state
    const newItems = [...items];
    newItems[index].quantity = e.target.value;
    setCartItems(newItems);
  };

  const deleteItem = (itemIndex) => {
    const newItems = [...items];
    setCartItems(newItems.filter((item, index) => index !== itemIndex));
  };
  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="CartItems-items">
        {items.map((item, index) => (
          <CartItem
            key={index}
            index={index}
            item={item}
            changeItemQuantity={changeItemQuantity}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </div>
  );
};

export default CartItems;
