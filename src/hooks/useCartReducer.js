import { cartReducer, cartInitialState } from "../reducers/cart";
import { useReducer } from "react";

export function useCartReducer() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);
    
      const addToCart = (product) =>
        dispatch({
          type: "ADD_TO_CART",
          payload: product, //le paso el producto que recibo por parámetro al payload
        });
      const removeFromCart = (product) =>
        dispatch({
          type: "REMOVE_FROM_CART",
          payload: product,
        });
      const clearCart = () => dispatch({ type: "CLEAR_CART" });
    //devuelvo los dispatch y el state
      return { state, addToCart, removeFromCart, clearCart }
    
    }