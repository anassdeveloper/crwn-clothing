import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase-utils";
//import { crown } from "../../asset/crown.svg";
import { connect } from "react-redux";
            
const Header = ({ currentUser }) => {
    return(
        <div className="header">
           <Link to="/" className="logo">
              Logo
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
            </nav>
        </div>
    )
}
//connect hiya high order function 
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Header);