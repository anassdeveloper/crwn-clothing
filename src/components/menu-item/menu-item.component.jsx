import React from "react";
import "./menu-item.style.scss";

const MenuItem = ({title, imageUrl, key, size}) => {
    return(
        <div 
           className = {`${size} menu-item`} key={key}>
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

export default  MenuItem;