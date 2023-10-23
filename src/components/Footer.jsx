import { useFilters } from '../hooks/useFilters'
import './Footer.css'
import { useCart } from '../hooks/useCart'
//Context= Limpiamos las props
export function Footer () {
const { filters } = useFilters()
const { cart } = useCart()
  return (
    <footer className='footer'>
      <h4>Prueba técnica de React  ⚛️</h4>
   {// {JSON.stringify(cart, null, 2)} 
   }
    </footer>
  )
}