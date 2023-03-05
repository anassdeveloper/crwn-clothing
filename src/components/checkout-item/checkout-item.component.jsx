import React from 'react';
import "./checkout-item.style.scss";


const CheckOutItem = ({item}) => {
    const { id, imageUrl, name, quantity, price } = item;

    return (
        <div className='checkout-item' key={id}>
            <div className='image-container'>
                <img src={ imageUrl } alt='item' />
            </div>
            <span className='name'>{ name }</span>
            <span className='quantity'>{ quantity }</span>
            <span className='price'>{ price }</span>
            <div className='remove-button'>&#10005;</div>
        </div>
    )
}

export default CheckOutItem;