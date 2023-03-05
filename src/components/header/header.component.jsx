import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase-utils";
import { ReactComponent as Logo } from "../../asset/crown.svg";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/reselector/cart.selector";
import { selectCurrentUser } from '../../redux/user/user-selector';


const Header = ({ currentUser, hidden }) => {
    return(
        <div className="header">
           <Link to="/" className="logo">
              <Logo />
           </Link>
           <nav className="options">
              <Link to="/shop" className="option">
                  SHOP
              </Link>
              <Link to="/contact" className="option">
                  CONTACT
              </Link>
              {
                currentUser ? 
                <div className="option" onClick = {() => auth.signOut()}>SIGN OUT</div>
                :
                <Link to="/signin" className="option">SIGN IN</Link>
              }
              <CartIcon />
            </nav>
            {
                hidden ? null : <CartDropdown />
            }
            
        </div>
    )
}
//connect hiya high order function 
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

/**
 * const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})
 */
export default connect(mapStateToProps)(Header);