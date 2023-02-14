import React from "react";
import "./menu-item.style.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({title, imageUrl, history,key, size, linkUrl, match}) => {
    return(
        <div 
           key = { key }
           className = {`${size} menu-item`} 
           onClick = {() => history.push(`${match.url}${linkUrl}`)}
           >
            <div 
            className="background-image"
            style={{
            backgroundImage: `url("${imageUrl}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            
         }}/>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default  withRouter(MenuItem);