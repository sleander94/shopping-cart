import React from 'react';
import Product from './Product';
import productList from '../products';
import '../styles/Shop.css';

const Shop = ({ addToCart }) => {
  return (
    <div id="shop">
      <div className="products">
        {productList.map((product) => (
          <Product
            key={productList.indexOf(product)}
            {...product}
            index={productList.indexOf(product)}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
