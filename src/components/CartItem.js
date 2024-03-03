import React from "react";
import "./CartItem.css";

const CartItem = () => {
  return (
    <div className="CartItem">
      <div className="CartItem-image">
        <img
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-pro-11-wifi-spacegray-2021?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1674663706415"
          alt="amazon"
        />
      </div>
      <div className="CartItem-info">
        <div className="info-title">
          <h2>Apple Ipad Pro</h2>
        </div>
        <div className="info-stock">In Stock</div>
        <div className="item-actions">
          <div className="item-quantity">
            <select name="" id="">
              <option value="1">Qty:1</option>
              <option value="2">Qty:2</option>
              <option value="3">Qty:3</option>
            </select>
          </div>
          <div className="item-delete"></div>
        </div>
      </div>
      <div className="CartItem-price">$239.00</div>
    </div>
  );
};

export default CartItem;
