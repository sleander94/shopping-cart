import React from 'react';
import '../styles/CartProduct.css';

const CartProduct = ({ name, price, image, alt, quantity, changeQuantity }) => {
  return (
    <div className="cartProduct">
      <img src={image} alt={alt}></img>
      <div className="name">{name}</div>
      <div className="quantity">
        <button className="decrement" onClick={() => changeQuantity('-', name)}>
          -
        </button>
        <div>{quantity}</div>
        <button className="increment" onClick={() => changeQuantity('+', name)}>
          +
        </button>
      </div>
      <div className="price">${(price * quantity).toFixed(2)}</div>
    </div>
  );
};

export default CartProduct;
