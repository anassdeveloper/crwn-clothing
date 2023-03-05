import React from 'react';
import "./checkout.style.scss";

import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectTotalPrice } from '../../redux/cart/reselector/cart.selector';

const CheckOut = ({cartItems, total}) => (
<div className='checkout-page'>
  <div className='checkout-header'>
    <div className='header-block'>
       <span>Product</span>
    </div>
    <div className='header-block'>
       <span>Description</span>
    </div>
    <div className='header-block'>
       <span>Quantity</span>
    </div>
    <div className='header-block'>
       <span>Price</span>
    </div>
    <div className='header-block'>
       <span>Remove</span>
    </div>
  </div>
  {
    cartItems.map(cartItem => <CheckOutItem item = { cartItem} />)
  }
  <div className='total'>
   <span>Total: ${total}</span>
  </div>
</div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectTotalPrice
})

export default connect(mapStateToProps)(CheckOut);
