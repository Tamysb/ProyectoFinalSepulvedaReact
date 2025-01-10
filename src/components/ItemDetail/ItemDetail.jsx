import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { carritoContexto } from "../../CarritoProvider"
import { Link } from "react-router-dom"
function ItemDetail({id,title,price,images,category,description}){
    const [cantidad, setCantidad]=useState(0)
    const {agregarAlCarrito} = useContext(carritoContexto)
    const handleOnAdd=(contador)=>{
        setCantidad(contador)
        const item={
            id,title,price
        }
        agregarAlCarrito(item,contador)
    }
    return(
        <div className="grid grid-cols-1 p-4 m-10 md:grid-cols-3" >
            <article className="flex flex-col justify-center p-4 text-black align-middle bg-red-300 rounded-md shadow-xl md:col-start-2">
              <img src={images} alt={title} className="flex items-center justify-center object-contain bg-white border rounded-lg shadow-sm"/>
              <h2 className="m-2 font-bold ">{title}</h2>
              <div className="flex justify-start"><p className="m-2 tex-start">{description}</p></div>
              <p className="m-2">${price}</p>
              {cantidad> 0 ?(<Link to="/carrito" className={"m-4  flex justify-center px-6 py-4 bg-red-200 rounded-md shadow-xl hover:scale-105 hover:bg-red-400 hover:text-gray-200"}>Ir al Carrito</Link>):(<ItemCount onAdd={handleOnAdd}/>)}
            </article>   
        </div>
    )
}
export default ItemDetail