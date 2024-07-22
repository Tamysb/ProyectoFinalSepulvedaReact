import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import { carritoContexto } from "../../CarritoProvider"
import { useContext, useState } from "react"

function Navbar(){
    const {agregarAlCarrito}= useContext(carritoContexto)
    // const [cantidad, setCantidad]=useState(0)
    // const handleOnAdd=(contador)=>{
    //     setCantidad(contador)
    //     const item={
    //         id,title,price
    //     }
    //     agregarAlCarrito(item,contador)
    // }
    return(
    <nav className="flex items-center justify-between">
        <Link to="/"className="flex items-center gap-2 text-3xl font-blod">Ecomerce</Link> 
        <nav className="flex items-center justify-between gap-2 p-4 text-xl">
            
            <NavLink to="/category/beauty">Belleza</NavLink>
            <NavLink to="/category/fragrances">Perfume</NavLink>
            <NavLink to="/category/skin-care">Skin Care</NavLink>
        </nav>
        {agregarAlCarrito.contador> 0 ?(<Link to="/carrito">0</Link>):(<CartWidget/>)}
        {/* {agregarAlCarrito
        ?(<CartWidget/>)
        :(<Link to="/carrito">0</Link>)
        
    } */}
    </nav>
    
        
    )

}
export default Navbar