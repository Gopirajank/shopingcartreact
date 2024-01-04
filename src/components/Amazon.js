import React from 'react';
import list from '../data';
import '../styles/amazon.css';
import Cards from './Cards';
import { connect } from 'react-redux';
import { addToCart } from './actions';

const Amazon = ({ handleClick, dispatch }) => {
  const  handleAddToCart = (item) => {
    dispatch(addToCart(item));
    handleClick(item);
  };


  return (
    <section>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
  )
}
export default connect()(Amazon);