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
        <div className="grid grid-cols-3 m-4 ">
            <button className="col-start-1 col-end-2 p-4 m-2 bg-red-200 rounded-md shadow-xl hover:scale-105 hover:bg-red-400 hover:text-gray-200" onClick={mas}>+</button>
            <p className="col-start-2 col-end-3 p-4 m-2 text-center bg-white rounded-md ">{contador}</p>
            <button className="col-start-3 col-end-4 p-4 m-2 bg-red-200 rounded-md shadow-xl hover:scale-105 hover:bg-red-400 hover:text-gray-200" onClick={menos}>-</button>
            <button onClick={()=> onAdd(contador)} className="col-start-1 col-end-4 px-6 py-4 m-2 bg-red-200 rounded-md shadow-xl md:m-4 hover:scale-105 hover:bg-red-400 hover:text-gray-200">Agregar</button>
        </div>
    )
    
}
export default ItemCount