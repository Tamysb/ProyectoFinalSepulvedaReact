import { useContext } from "react"
import { carritoContexto } from "../../CarritoProvider"
function CarritoItem ({...producto}){
    const {removerCarrito}= useContext(carritoContexto)
    
    return(
        <article className="flex flex-row justify-center gap-4 p-4 m-4 text-black bg-red-300 rounded-md shadow-xl">
            <h2 className="font-bold truncate">{producto.title}</h2>
            <p>precio:{producto.price}</p>
            <p>cantidad:{producto.contador}</p>
            <p>{`${producto.price*producto.contador}`}</p>
            <button onClick={()=>removerCarrito(producto)} className="p-2 bg-red-500 rounded-md shadow-xl">eliminar</button>
        </article>
    )
}
export default CarritoItem