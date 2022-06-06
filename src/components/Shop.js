import React from 'react';
import Product from './Product';
import productList from '../products';

const Shop = () => {
  return (
    <div id="shop">
      <h1>Shop</h1>
      <div id="products">
        {productList.map((product) => (
          <Product key={productList.indexOf(product)} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
