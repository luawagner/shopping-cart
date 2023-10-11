import {Filters} from './Filters'

export function Header() {
    //Context= limpiamos las props del header y no le pasamos nada a filters
    return (
        <header>
        <h1>React shop</h1>
        <Filters /> 
        </header>
    )
}