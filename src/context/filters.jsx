import { createContext, useState } from 'react'

/* El contexto es una forma de inyección de dependencias
podes inyectar información saltando las props de los componentes.
Se puede enviar información estática como también crear un estado global */ 


//crear el contexto
//este es el contexto que tenemos que consumir
export const FiltersContext = createContext()

//crear el provider para proveer el contexto, este envuelve nuestra aplicacion.
//este nos provee de acceso al contexto
export function FiltersProvider ({ children }) {
    const [filters, setFilters] = useState({
      category: 'all',
      minPrice: 0
    })
   
    return (
        //Accedemos a la propiedad provider y le asignamos el valor
        <FiltersContext.Provider value={{
            filters,
            setFilters
          }}
          >
            {children} 
        </FiltersContext.Provider>
        //Tiene que envolver a los children
    )
}