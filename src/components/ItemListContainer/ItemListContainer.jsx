import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { genereteProductos, getProductosByCategory, getProductos } from "../../actions";
// genereteProductos()

function ItemListContainer(){
    const [productos,setProductos]= useState([])
    const {category} = useParams()

    useEffect(() => {
      if(category){
        getProductosByCategory(category).then((res)=>{setProductos(res)})
       }
       else{
        getProductos().then((res) => { setProductos(res) })
       } 
    },[category])

    return (
        <div>
            <h1 className="text-2xl font-blod"></h1> 
            <ItemList productos={productos}/>

        </div>

    )
}
export default ItemListContainer