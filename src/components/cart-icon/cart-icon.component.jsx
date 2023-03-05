import React from "react";
import { connect } from 'react-redux';
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { ReactComponent as ShoppingIcon} from '../../asset/shopping.svg';
import './cart-icon.style.scss';
import { selectCartItemsCount } from "../../redux/cart/reselector/cart.selector";
import { createStructuredSelector } from "reselect";


const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className="item-count">{ itemCount }</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
})

/**
 * const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})
 */
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);