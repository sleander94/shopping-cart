import React, { useState } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
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
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/shop"
            element={
              <Shop
                cartProducts={cartProducts}
                addToCart={addToCart}
                changeQuantity={changeQuantity}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
      <Cart cartProducts={cartProducts} changeQuantity={changeQuantity} />
    </Router>
  );
};
export default App;
