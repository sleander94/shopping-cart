import React from 'react';

const Product = ({ name, price, image, alt }) => {
  return (
    <div className="product">
      <div className="name">{name}</div>
      <div className="price">{price}</div>
      <img src={image} alt={alt}></img>
      <button className="addToCart">Add to cart</button>
    </div>
  );
};

export default Product;
