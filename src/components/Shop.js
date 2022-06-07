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
        // Updating state here to trigger rerender to show quantity change
        setCartProducts([...cartProducts]);
      }
    });
    if (added === false) {
      product.quantity = 1;
      setCartProducts([...cartProducts, product]);
    }
  };
  return (
    <div id="shop">
      <div className="products">
        {productList.map((product) => (
          <Product
            key={productList.indexOf(product)}
            {...product}
            quantity={null}
            index={productList.indexOf(product)}
            addToCart={addToCart}
          />
        ))}
      </div>
      <Cart cartProducts={cartProducts} />
    </div>
  );
};

export default Shop;
