import { useContext, useState } from "react"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { carritoContexto } from "../../CarritoProvider"
import { Link } from "react-router-dom"
import { addDoc, collection, getFirestore, serverTimestamp} from "firebase/firestore";
import { app } from "../../firebaseConfig";
const db= getFirestore(app)

const Checkout = () => {
  const [orderId,setOrderId]= useState()
  const {carrito,total,clearCarrito}=useContext(carritoContexto)
  const createNewOrder = async ({name,phone,email}) => {
    try{
    const orderData = {
    userData: {name,phone,email},
    items:carrito,
    total:total,
    status: 'Pending',
    createdAt: serverTimestamp()
    };
    const coleccionventas=collection(db,"orden")
    const cartRef = await addDoc(coleccionventas,orderData)
    setOrderId(cartRef.id)
    clearCarrito()
    }catch (error) {
    console.error(error);
    throw error;}
    }
    
  if(orderId){
    return (
       <div>
        <h1 className="flex justify-center gap-4 p-2 m-4 text-black">Compra Exitosa</h1>
        <p className="flex justify-center gap-4 p-2 m-4 font-bold text-red-400">Orden de compra :{orderId}</p>
        <Link to="/" className="flex justify-center gap-4 p-2 m-4 text-center text-black bg-red-400 rounded-md shadow-xl hover:scale-105 hover:bg-red-200">Volver a productos</Link>
       </div>
      )
  }

  return (
    <div className="grid sm:grid-cols-4">
      <h1 className="col-start-1 col-end-2 p-2 m-2 text-2xl font-blod text-slate-600 sm:col-start-1 sm:col-end-3">Formulario Checkout</h1>
      <CheckoutForm onConfirm={createNewOrder}/>
    </div>
  )
}
export default Checkout