import React, { useState } from 'react';
import CartProduct from './CartProduct';
import icon from '../images/cart.svg';
import '../styles/Cart.css';

const Cart = ({ cartProducts, changeQuantity }) => {
  const [isShown, setIsShown] = useState(false);
  const [active, setActive] = useState('');

  const showCart = () => {
    if (!isShown) {
      setIsShown(true);
      setActive('active');
    } else {
      setIsShown(false);
      setActive('');
    }
  };

  let total = 0;
  let totalProducts = 0;
  cartProducts.forEach((product) => {
    total += product.price * product.quantity;
    totalProducts += product.quantity;
  });

  return (
    <div id="cart">
      <div id="cartButton" onClick={showCart} className={active}>
        <img src={icon} alt="shopping cart"></img>
        <div className="totalProducts">{totalProducts}</div>
      </div>
      {isShown && (
        <div id="cartContainer">
          <div id="cartDisplay">
            <h3 className="title">Your Cart</h3>
            <div className="cartLabels">
              <div className="name">Item</div>
              <div className="quantity">Qty.</div>
              <div className="price">Price</div>
            </div>
            <div id="cartProducts">
              {cartProducts.length < 1 && (
                <div className="empty">
                  Your cart is empty! Add some items to checkout.
                </div>
              )}
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
            </div>
            <div id="checkoutContainer">
              <div className="close" onClick={showCart}>
                Close
              </div>
              <div className="checkout">Checkout</div>
              <div className="total">Total: ${total.toFixed(2)}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
