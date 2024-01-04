
import React from 'react';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import './styles/amazon.css';
import store from './components/store';
const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Navbar />
        <Amazon />
        <Cart />
      </React.Fragment>
    </Provider>
  );
};

export default App;
