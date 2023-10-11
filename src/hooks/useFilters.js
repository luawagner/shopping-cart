  
import { useContext } from "react"
import { FiltersContext } from "../context/filters"

//extraemos la logica de los filtros en un custom hook
export function useFilters () {

    /* 
    //creamos un estado inicial para los filtros
    const [ filters, setFilters ] = useState ({
      category: 'all',
      minPrice: 0
    }) */
    
    const {filters, setFilters} = useContext(FiltersContext)
    
    
    
    //filtramos los productos
    const filterProducts = (products) => {
      return products.filter( product => {
        return (
          //devuelve los products que tienen un precio mayor a 0
          product.price >= filters.minPrice && 
          (
            filters.category === "all" ||
            product.category === filters.category
          ) 
        )
      })
    }
    //necesitamos exportar una forma de filtrar los productos en base a los filtros y una forma de actulizar los filtros
    return { filters, filterProducts, setFilters}
    }
    