import { useState } from "react"
function ItemCount({onAdd}){
    const [contador,setContador]=useState(1)
    const mas=()=>{
        setContador(contador+1)
    }
    const menos=()=>{
        if(contador>1){
            setContador(contador-1)
        }
        
    }
    return(
        <div>
            <button className="p-4 bg-red-200 rounded-md shadow-xl hover:scale-105" onClick={mas}>+</button>
            <p>{contador}</p>
            <button className="p-4 bg-red-200 rounded-md shadow-xl hover:scale-105" onClick={menos}>-</button>
            <button onClick={()=> onAdd(contador)}>Agregar</button>
        </div>
    )
    
}
export default ItemCount