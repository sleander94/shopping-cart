import React, { useState } from 'react';
import Product from './Product';
import productList from '../products';
import '../styles/Shop.css';

const Shop = () => {
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (index) => {
    let added = false;
    const product = productList[index];
    cartProducts.forEach((item) => {
      if (product.name === item.name) {
        item.quantity += 1;
        added = true;
      }
    });

    if (added === false) {
      product.quantity = 1;
      setCartProducts([...cartProducts, product]);
    }
    console.log(cartProducts);
  };
  return (
    <div id="shop">
      {productList.map((product) => (
        <Product
          key={productList.indexOf(product)}
          {...product}
          index={productList.indexOf(product)}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default Shop;
