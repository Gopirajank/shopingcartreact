import React from 'react';
import '../styles/navbar.css';
import { connect } from 'react-redux';
const Navbar = ({ cartSize, setShow }) => {
    return (
      <nav>
        <div className="nav_box">
          <span className="my_shop" onClick={() => setShow(true)}>
            My Shopping
          </span>
          <div className="cart" onClick={() => setShow(false)}>
            <span>
              <i className="fas fa-cart-plus"></i>
            </span>
            <span>{cartSize}</span>
          </div>
        </div>
      </nav>
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      cartSize: state.length,
    };
  };
  
  export default connect(mapStateToProps)(Navbar);