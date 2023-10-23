//necesitamos un estado global para nuestro carrito
import { createContext } from "react";
import { useCartReducer } from "../hooks/useCartReducer";
//crear contexto
export const CartContext = createContext();


//crear provider
export function CartProvider({ children }) {
//Pido los dispatch al hook useCartReducer
const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
