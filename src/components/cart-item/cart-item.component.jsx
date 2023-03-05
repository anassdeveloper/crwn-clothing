import React from "react";
import './cart-item.style.scss';

const CartItem = ({key, item: {imageUrl, name, price, quantity}}) => 
(<div className="cart-item" key={key}>
    <img src={imageUrl} alt="item" />
    <div className="item-details">
        <span>{name}</span>
        <span>{quantity} X ${price}</span>
    </div>
</div>);

export default CartItem;