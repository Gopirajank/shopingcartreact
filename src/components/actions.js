
export const addToCart = (item) => {
    return {
      type: 'ADD_TO_CART',
      payload: item,
    };
  };
  
  export const removeFromCart = (id) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: id,
    };
  };
  
  export const updateCartItem = (item, amount) => {
    return {
      type: 'UPDATE_CART_ITEM',
      payload: { item, amount },
    };
  };
  