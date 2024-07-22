import { useContext, useState } from "react"
import { carritoContexto } from "../../CarritoProvider"
import { Link } from "react-router-dom"
import CarritoItem from "../CarritoItem/CarritoItem"


function Carrito(){
    const {carrito,clearCarrito,total,totalCantidad}= useContext(carritoContexto)
    
    if(totalCantidad===0){
        return(
            <div>
                <h1 >No hay productos en el carrito</h1>
                <Link to="/" className="flex justify-center gap-4 p-2 m-4 text-black bg-red-300 rounded-md shadow-xl"> Ir a productos</Link>
            </div>
        )
    }

console.log({total})
    return(
        <div>
        {carrito.map((producto)=><CarritoItem key={producto.id}{...producto}/>)}
        <h3 className="flex justify-center gap-4 p-2 m-4 text-black bg-red-300 rounded-md shadow-xl">Total:${total}</h3>
        <button onClick={()=>clearCarrito()} className="flex justify-end gap-4 p-2 m-4 text-black bg-red-500 rounded-md shadow-xl">limpiar carrito</button><br/>
        <Link to="/checkout" className="flex justify-center gap-4 p-2 m-4 text-black bg-red-400 rounded-md shadow-xl">Ir Checkout</Link>
       </div>
    )
}
export default Carrito