import './Filters.css'
import { useState, useId } from 'react'

export function Filters ({ onChange }) {

const [minPrice, setMinPrice ] = useState(0)
const minPriceFilterId = useId()
const categoryFilterId = useId()

const handleChangeMinPrice = (event) => {
    //DOS FUENTES DE LA VERDAD
    setMinPrice(event.target.value)
    onChange(prevState => ({
        ...prevState,
        minPrice: event.target.value
    }))
}

const handleChangeCategory = (event) => {
    onChange(prevState => ({
        ...prevState,
        category: event.target.value
    }))
}

    return (

<section className="filters">
<div>
    <label htmlFor={minPriceFilterId}>Precio</label>
    <input type="range" id={minPriceFilterId} min='0' max='10000' onChange={handleChangeMinPrice}/>
    <span>${minPrice}</span>
</div>

<div>
    <label htmlFor={categoryFilterId}>Categoría</label>
    <select name="" id={categoryFilterId} onChange={handleChangeCategory}>
        <option value="all">Todas</option>
        <option value="laptops">Notebooks</option>
        <option value="smartphones">Celulares</option>
    </select>
</div>

</section> 

    )
}