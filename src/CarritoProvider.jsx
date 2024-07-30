import {createContext, useState} from "react"
export const carritoContexto = createContext({carrito:[]})
const Provider = carritoContexto.Provider
function CarritoProvider(props){
    const [carrito,setCarrito]= useState([])
    const [total,setTotal]= useState(0)
    const [totalCantidad,setTotalCantidad]=useState(0)
    const agregarAlCarrito=(item, contador)=>{
        if(!isInCarrito(item.id)){
            setCarrito(prev=>[...prev,{...item,contador}])
            setTotalCantidad(totalCantidad+ contador)
            setTotal(total+item.price *contador)

        }else{
            
            console.log("agregado")
        }
        setCarrito([...carrito,{...item,contador}])
        setTotalCantidad(totalCantidad+ contador)
        setTotal(total+item.price *contador)
        console.log(total)
    }
    
    const removerCarrito=(producto)=>{
        console.log(carrito) 
        const eliminar= carrito.filter((item) =>item.id !== producto.id)
        setTotal(total-producto.price*producto.contador);
        setCarrito(eliminar)
        setTotalCantidad(totalCantidad-producto.contador)
        console.log(eliminar)
    }

    const clearCarrito=()=>{
        setCarrito([])
        setTotal(0)
        setTotalCantidad(0)
    }
    const isInCarrito=(itemId)=>{
        return carrito.some(producto=> producto.id === itemId)
        
    }
    return(
        <Provider value={{carrito,agregarAlCarrito,removerCarrito,clearCarrito,total,totalCantidad}}>
            {props.children}
        </Provider>
    )

}
export default CarritoProvider