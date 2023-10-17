import { useFilters } from '../hooks/useFilters'
import './Footer.css'
//Context= Limpiamos las props
export function Footer () {
const { filters } = useFilters()
  return (
    <footer className='footer'>
      <h4>Prueba técnica de React  ⚛️</h4>
    {JSON.stringify(filters, null, 2)}
    </footer>
  )
}