import {createContext, useState} from "react"
export const carritoContexto = createContext({carrito:[]})
const Provider = carritoContexto.Provider
function CarritoProvider(props){
    const [carrito,setCarrito]= useState([])
    const [total,setTotal]= useState("")
    const [totalCantidad,setTotalCantidad]=useState(0)
    const agregarAlCarrito=(item, contador)=>{
        if(!isInCarrito(item.id)){
            setCarrito(prev=>[...prev,{...item,contador}])
            setTotalCantidad(item.id * contador)
            setTotal(item.precio * contador)
            console.log(total)

        }else{
            console.log("el producto ya fue agregado")
        }
        
        
    }
    const removerCarrito=(producto)=>{
        console.log(carrito) 
        const eliminar= carrito.filter((item) =>item.id !== producto.id)
        // const newTotal = eliminar.reduce((acc, item) => acc + item.precio * item.contador, 0);
        setTotal(total-producto.precio*producto.contador);
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