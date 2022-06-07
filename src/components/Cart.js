import React, { useState } from 'react';
import Product from './Product';
import '../styles/Cart.css';

const Cart = ({ cartProducts }) => {
  const [isShown, setIsShown] = useState(false);

  const showCart = () => {
    if (!isShown) {
      setIsShown(true);
      console.log(cartProducts);
    } else {
      setIsShown(false);
    }
  };

  return (
    <div id="cart">
      <button id="cartButton" onClick={showCart}>
        Cart
      </button>
      {isShown && (
        <div id="cartDisplay">
          {cartProducts.map((product) => (
            <Product
              key={cartProducts.indexOf(product)}
              {...product}
              index={cartProducts.indexOf(product)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
