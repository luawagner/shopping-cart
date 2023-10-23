export const cartInitialState = [];
 
 // reducer recibe un estado y lo transforma con una acción, debe devolver el estado.
 export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case "ADD_TO_CART": {
      //chequear si el producto ya está en el carrito
      //recupero el índice del producto en el carrito cuyo id coincide con el producto que le paso
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex((item) => item.id === id);

      //si encontré el producto en el carrito significa que tengo un índice que es igual o mayor a cero, INDICE! no cantidad.
      if (productInCartIndex >= 0) {
        //nuevo estado del carrito
        const newState = structuredClone(state); //hacemos un clon del carrito
        //porque no podemos trabajar sobre el estado original
        newState[productInCartIndex].quantity += 1;
        //le agrego 1 a la propiedad cantidad del prod que coincidió con el item
        return newState;
        //No llamo métodos, Devuelvo el estado.
      }
      //Si el producto no está en el carrito, pedimos el estado, lo desestructuramos,
      //dentro desestructuramos el producto para modificar la cantidad y agregar 1
      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ];
    }
    case "REMOVE_FROM_CART": {
      const { id } = actionPayload;
      return state.filter((item) => item.id !== id);
    }

    case "CLEAR_CART": {
      return cartInitialState;
    }
  }
  return state;
};

//con reducer agrupamos toda la lógica de actualización del carrito fuera del provider, antes estaba dentro
//podemos testear rápidamente si funciona, independientemente del provider

//test
/* expect(
    reducer([], {type: 'ADD_TO_CART', payload: { id: 1 }})
).toEqual([{ id: 1, quantity: 1 }])
*/