// reducers.js
const cartReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return [...state, action.payload];
  
      case 'REMOVE_FROM_CART':
        return state.filter((item) => item.id !== action.payload);
  
      case 'UPDATE_CART_ITEM':
        return state.map((item) =>
          item.id === action.payload.item.id
            ? { ...item, amount: item.amount + action.payload.amount }
            : item
        );
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  