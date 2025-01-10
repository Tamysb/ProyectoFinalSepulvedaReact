import { useContext} from "react"
import { carritoContexto } from "../../CarritoProvider"
import { Link } from "react-router-dom"
import CarritoItem from "../CarritoItem/CarritoItem"


function Carrito(){
    const {carrito,clearCarrito,total,totalCantidad}= useContext(carritoContexto)
    
    if(totalCantidad===0){
        return(
            <div>
                <h1 className="flex justify-center gap-4 p-2 m-4 text-black">No hay productos en el carrito</h1>
                <Link to="/" className="flex justify-center gap-4 p-2 m-4 text-black bg-red-300 rounded-md shadow-xl hover:scale-105 hover:bg-red-200"> Ir a productos</Link>
            </div>
        )
    }

    return(
        <div>
        <h1 className="col-start-1 col-end-2 p-2 m-2 text-2xl font-blod text-slate-600 sm:col-start-1 sm:col-end-3"> Carrito</h1>
        {carrito.map((producto)=><CarritoItem key={producto.id}{...producto}/>)}
        <div className="grid grid-cols-4 ">
        <h3 className="col-start-2 col-end-5 gap-4 p-2 m-4 text-black bg-red-300 rounded-md shadow-xl text-end">Total:${total}</h3>
        <button onClick={()=>clearCarrito()} className="col-start-3 col-end-5 gap-4 p-2 m-4 text-black bg-red-500 rounded-md shadow-xl hover:scale-105 hover:bg-red-200">Vaciar carrito</button><br/>
        <Link to="/checkout" className="col-start-2 col-end-4 gap-4 p-2 m-4 text-center text-black bg-red-400 rounded-md shadow-xl hover:scale-105 hover:bg-red-200">Ir Checkout</Link>
        </div>
       </div>
    )
}
export default Carrito