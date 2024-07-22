import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Carrito from "../Carrito/Carrito"
function ItemDetailContainer(){
    const [producto,setProducto]=useState({})
    const {id}= useParams()
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) =>{
                return res.json()
            })
            .then((data)=>{
                console.log(data)
                setProducto(data)
            });
    },[id])
    return(
        <div>
            <ItemDetail {...producto}/>
        </div>

    )
}
export default ItemDetailContainer