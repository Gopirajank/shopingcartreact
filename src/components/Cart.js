// Cart.js
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../styles/cart.css';
import { removeFromCart,updateCartItem } from './actions';

const Cart = ({ cart, dispatch }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.forEach((item) => {
      ans += item.amount * item.price;
    });
    setPrice(ans);
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    // handlePrice();
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  return (
    <article>
      {cart?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => dispatch(updateCartItem(item, 1))}> + </button>
            <button>{item.amount}</button>
            <button onClick={() => dispatch(updateCartItem(item, -1))}> - </button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>
    </article>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state,
  };
};

export default connect(mapStateToProps)(Cart);
