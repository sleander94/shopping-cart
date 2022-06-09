import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import productList from './products';
import About from './components/About';

const App = () => {
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
    <BrowserRouter>
      <Routes>
        <Route path="/shopping-cart" element={<Main />}>
          <Route
            path="/shopping-cart"
            element={<Navigate to="/shopping-cart/home" />}
          />
          <Route path="/shopping-cart/home" element={<Home />} />
          <Route
            path="/shopping-cart/shop"
            element={
              <Shop
                cartProducts={cartProducts}
                addToCart={addToCart}
                changeQuantity={changeQuantity}
              />
            }
          />
          <Route path="/shopping-cart/about" element={<About />} />
        </Route>
      </Routes>
      <Cart cartProducts={cartProducts} changeQuantity={changeQuantity} />
    </BrowserRouter>
  );
};
export default App;
