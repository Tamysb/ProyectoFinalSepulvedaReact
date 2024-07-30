import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getProductosById } from "../../actions"
function ItemDetailContainer(){
    const [producto,setProducto]=useState({})
    const {id}= useParams()
    useEffect(()=>{
        getProductosById(id).then((res) => { setProducto(res)}).catch((error)=>console.log(error))
    },[id])
    return(
        <div>
            <ItemDetail {...producto}/>
        </div>

    )
}
export default ItemDetailContainer