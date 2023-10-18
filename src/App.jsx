import { products as initialProducts} from './mocks/products.json'
import { Products } from './components/Products'
import { Footer } from './components/Footer'
import './App.css'
import { Header } from './components/Header'
import {useFilters} from './hooks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'


function App() {  
  const { filterProducts } = useFilters()//pedimos los métodos llamando al custom hook useFilters
//Context= Quitamos el filters y setFilters que pasabamos por props, 
//porque ahora lo puede llamar cada componente que lo necesite desde useFilters()
const filteredProducts = filterProducts(initialProducts)
//renderizamos los productos ya filtrados
  return (
    //Context= Quitamos las props para evitar el prop drilling
    //Envolvemos los componentes con el provider doel contexto del cart "CartProvider"
    <> 
    <CartProvider> 
     <Header />
     <Cart />
     <Products products={filteredProducts}/>
     <Footer />
     </CartProvider>
    </>
  )
}

export default App
