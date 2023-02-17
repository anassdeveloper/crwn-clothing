import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
//import { ReactComponent as Logo } from "../../asset/crown.svg.svg";
/**<Link to="/" className="logo-container">
               <Logo className="logo" />
           </Link> */
const Header = () => {
    return(
        <div className="header">
          
           <nav className="options">
              <Link to="/shop" className="option">
                  SHOP
              </Link>
              <Link to="/signin" className="option">
                  SIGN IN
              </Link>
              <Link to="/contact" className="option">
                  CONTACT
              </Link>
            </nav>
        </div>
    )
}

export default Header;