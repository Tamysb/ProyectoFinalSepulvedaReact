import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(){
    const [productos,setProductos]= useState([])
    const params = useParams()

    useEffect(() => {
      if(params.id){
        fetch('https://dummyjson.com/products/category/' + params.id)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setProductos(data.products)
        })  
       }
       else{
        fetch('https://dummyjson.com/products')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setProductos(data.products)
        })
       } 
    },[params.id])

    return (
        <div>
            <h1 className="text-2xl font-blod"></h1> 
            <ItemList productos={productos}/>

        </div>

    )
}
export default ItemListContainer