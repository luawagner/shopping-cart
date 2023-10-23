//necesitamos un estado global para nuestro carrito
import { createContext, useState } from "react";

//crear contexto
export const CartContext = createContext()

//crear provider
export function CartProvider({ children }) {

    //creo un estado para el carrito
    const [cart, setCart] = useState([])
    const addToCart = product => {
        //chequear si el producto ya está en el carrito
        //recupero el índice del producto en el carrito cuyo id coincide con el producto que le paso
       const productInCartIndex = cart.findIndex(item => item.id === product.id) 

       //si encontré el producto en el carrito significa que tengo un índice que es igual o mayor a cero, INDICE! no cantidad.
        if(productInCartIndex >= 0) {
            const newCart = structuredClone(cart)//hacemos un clon del carrito
            //porque no podemos trabajar sobre el estado original
            newCart[productInCartIndex].quantity += 1
            //le agrego 1 a la propiedad cantidad del prod que coincidió con el item
            return setCart(newCart)
            //seteo el estado del carrito
        }

        //si el producto no está en el carrito
        //Es buena práctica pedir el estado previo. La función recibe como primer parámetro el valor anterior
        //A partir de ese nuevo valor, devolvemos el nuevo valor q tiene q tener el estado
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }

const removeFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
}

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={
           { cart,
            addToCart,
            removeFromCart,
            clearCart}
        }>
            {children}
        </CartContext.Provider>

    )
}