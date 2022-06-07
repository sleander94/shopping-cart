import React from 'react';
import '../styles/Product.css';

const CartProduct = ({ name, price, image, alt, quantity, changeQuantity }) => {
  return (
    <div className="product">
      <img src={image} alt={alt}></img>
      <div className="name">{name}</div>
      <div className="price">${price}</div>
      <div className="quantity">
        <button className="increment" onClick={() => changeQuantity('+', name)}>
          +
        </button>
        <div>{quantity}</div>
        <button className="decrement" onClick={() => changeQuantity('-', name)}>
          -
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
