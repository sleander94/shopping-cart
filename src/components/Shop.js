import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';
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
        // Updating state here to trigger rerender & show quantity change
        setCartProducts([...cartProducts]);
      }
    });
    if (added === false) {
      product.quantity = 1;
      setCartProducts([...cartProducts, product]);
    }
  };

  const changeQuantity = (operator, name) => {
    let updatedProducts = [...cartProducts];
    updatedProducts.forEach((product) => {
      if (product.name === name) {
        if (operator === '+') {
          product.quantity = product.quantity += 1;
        } else if (operator === '-') {
          product.quantity = product.quantity -= 1;
        }
      }
    });
    setCartProducts(updatedProducts);
  };
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
      <Cart cartProducts={cartProducts} changeQuantity={changeQuantity} />
    </div>
  );
};

export default Shop;
