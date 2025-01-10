import { useContext} from "react"
import { carritoContexto } from "../../CarritoProvider"
import { Link } from "react-router-dom"
function CartWidget(){
    
    const {totalCantidad} = useContext(carritoContexto)
    
   
    return (
        <Link to="/carrito" className="font-bold text-red-400 hover:scale-105">
            <img src="/carrito.png" alt="carrito" className="inline-block p-1 w-9 h-9"/> 
            {totalCantidad}
            </Link>
  
    )
}
export default CartWidget