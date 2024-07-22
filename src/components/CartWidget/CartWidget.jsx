import { useContext, useState } from "react"
import { carritoContexto } from "../../CarritoProvider"
import { Link } from "react-router-dom"
function CartWidget(){
    
    const {totalCantidad} = useContext(carritoContexto)
    
   
    return (
        <Link to="/carrito" >
            <img src="/carrito.png" alt="carrito" className="inline-block w-10 h-10 "/> 
            {totalCantidad}
            </Link>
  
    )
}
export default CartWidget