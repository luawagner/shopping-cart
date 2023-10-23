//necesitamos un estado global para nuestro carrito
import { createContext, useReducer } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart";
//crear contexto
export const CartContext = createContext();




//crear provider
export function CartProvider({ children }) {
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
  const clearCart = () => dispatch({ type: "CLEAN_CART" });

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
