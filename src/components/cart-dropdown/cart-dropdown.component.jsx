import React from 'react';
import CustomButton from '../costum-button/costum-button.component';
import './cart-dropdown.style.scss';

const CartDropdown= () => {
    return(
        <div className='cart-dropdown'>
           <div className='cart-items' />
           <CustomButton>Go to checkout</CustomButton>
        </div>
    )
}
export default CartDropdown;