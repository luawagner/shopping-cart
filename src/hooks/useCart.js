import { useContext } from "react";
import { CartContext } from "../context/cart";


//Es recomendable tener un hook para manejar el contexto, por si en el futuro cambiamos a otra alternativa de manejo de estados, como zustand
export const useCart = () => {
    const context = useContext(CartContext)

    if(context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }


    return context
}