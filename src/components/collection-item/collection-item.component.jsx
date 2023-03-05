import React from "react";
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';
import "./collection-item.style.scss";
import CustomButton from "../costum-button/costum-button.component";

const CollectionItem = ({item, addItem}) => {
   const {id, name, price, imageUrl} = item;

    return <div className="collection-item" key={id}>
        <div
           className="image"
           style={{
            backgroundImage: `url(${imageUrl})`
           }}
        ></div>
        <div className="collection-footer">
            <span className="name">{ name }</span>
            <span className="price"> { price }</span>
        </div>
        <CustomButton onClick = {() => addItem(item)} inverted>
        Add to Cart</CustomButton>
    </div>
}
const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);