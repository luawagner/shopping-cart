import { products as initialProducts} from './mocks/products.json'
import { Products } from './components/Products'
import './App.css'
import { useState } from 'react'
import { Header } from './components/Header'


//extraemos la logica de los filtros en un custom hook
function useFilters () {
  //creamos un estado inicial para los filtros
const [ filters, setFilters ] = useState ({
  category: 'all',
  minPrice: 0
})
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
return { filterProducts, setFilters}
}


function App() {
  const [ products ] = useState(initialProducts)

  
  const { filterProducts, setFilters } = useFilters()//pedimos los métodos llamando al custom hook useFilters

const filteredProducts = filterProducts(products)
//renderizamos los productos ya filtrados
  return (
    <>
     <Header changeFilters={setFilters} />
     <Products products={filteredProducts}/>
    </>
  )
}

export default App
