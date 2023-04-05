import { createContext, useReducer } from 'react';

export const CartStore = createContext();

const initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
      //If cart items exist in the local storage, use JSON to convert this history to JavaScript object. Otherwise, set it to empty array.
  },
};

// reducer function accept a state and action.
function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      // add to cart
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      //use map function on the cart item to update the current item with the new item that get from the action payload.
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      localStorage.setItem('cartItems', JSON.stringify(cartItems)); 
      //The first parameter is the key in the local storage, and second  is the string value to save in
      //using JSON to stringyify to convert the cart items to a string and save them in the cart item.
      return { ...state, cart: { ...state.cart, cartItems } };
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}
// use reducer use reducer accept two parameters.
//The first one is the reducer that need to implement and second one is default state or initialize
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <CartStore.Provider value={value}>{props.children} </CartStore.Provider>
  );
}
