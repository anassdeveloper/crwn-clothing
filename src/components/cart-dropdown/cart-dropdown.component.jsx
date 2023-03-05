import React from 'react';
import CustomButton from '../costum-button/costum-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.style.scss';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/reselector/cart.selector';
import { withRouter } from 'react-router-dom';

const CartDropdown= ({cartItems, history}) => {
    return(
        <div className='cart-dropdown'>
           <div className='cart-items'>
            {
              cartItems.length ? 
              (cartItems.map(cartItem => (<CartItem key={cartItem.id} item = {cartItem} />)))
              :
              <span className='empty-message'>Your cart is empty</span>
            }
           </div>
           <CustomButton onClick = {() => history.push('/checkout')}>Go to checkout</CustomButton>
        </div>
    )
}
const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));