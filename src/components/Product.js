import React from 'react';
import '../styles/Product.css';

const Product = ({ name, price, image, alt, index, addToCart }) => {
  return (
    <div className="product">
      <img src={image} alt={alt}></img>
      <div className="name">{name}</div>
      <div className="price">${price}</div>
      <button className="addToCart" onClick={() => addToCart(index)}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
