import React, { useState } from 'react';
import CartProduct from './CartProduct';
import '../styles/Cart.css';

const Cart = ({ cartProducts, changeQuantity }) => {
  const [isShown, setIsShown] = useState(false);

  const showCart = () => {
    if (!isShown) {
      setIsShown(true);
    } else {
      setIsShown(false);
    }
  };

  let total = 0;
  cartProducts.forEach((product) => {
    total += product.price * product.quantity;
  });

  return (
    <div id="cart">
      <button id="cartButton" onClick={showCart}>
        Cart
      </button>
      {isShown && (
        <div id="cartDisplay">
          {cartProducts
            .filter((product) => product.quantity > 0)
            .map((product) => (
              <CartProduct
                key={cartProducts.indexOf(product)}
                {...product}
                index={cartProducts.indexOf(product)}
                changeQuantity={changeQuantity}
              />
            ))}
          <div className="total">Total: ${total}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
