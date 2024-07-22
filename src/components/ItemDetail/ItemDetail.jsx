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
        <div className="grid grid-cols-2" >
            <article className="p-4 text-black bg-red-300 rounded-md shadow-xl">
              <img src={images} alt={title} className="object-contain aspect-square"/>
              <h2 className="font-bold truncate">{title}</h2>
              <p>{description}</p>
              <p>${price}</p>
              {cantidad> 0 ?(<Link to="/carrito">Ir al Carrito</Link>):(<ItemCount onAdd={handleOnAdd}/>)}
             
              
            </article>
              
        </div>
    )
}
export default ItemDetail