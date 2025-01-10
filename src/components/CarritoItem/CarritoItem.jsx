import { useContext } from "react"
import { carritoContexto } from "../../CarritoProvider"
function CarritoItem ({...producto}){
    const {removerCarrito}= useContext(carritoContexto)
    
    return(
        <article className="grid grid-cols-4 gap-4 p-4 m-4 text-black bg-red-300 rounded-md shadow-xl">
            <h2 className="col-start-1 col-end-4 font-bold truncate text-start">{producto.title}</h2>
            <p className="col-start-1 col-end-2 text-start">precio</p>
            <p className="col-start-2 col-end-3 text-start">cantidad</p>
            <p className="col-start-3 col-end-4 text-start">total</p>
            <p className="col-start-1 col-end-2 text-start">{producto.price}</p>
            <p className="col-start-2 col-end-3 text-start">{producto.contador}</p>
            <p className="col-start-3 col-end-4 text-start">{`${producto.price*producto.contador}`}</p>
            <button onClick={()=>removerCarrito(producto)} className="bg-red-500 rounded-md shadow-xl hover:scale-105 hover:bg-red-200">x</button>
        </article>
    )
}
export default CarritoItem