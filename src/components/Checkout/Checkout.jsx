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
        <h1>Compra Exitosa</h1>
        <p>Orden de compra :{orderId}</p>
        <Link to="/" className="flex justify-center gap-4 p-2 m-4 text-black bg-red-400 rounded-md shadow-xl">Volver a productos</Link>
       </div>
      )
  }

  return (
    <div >
      <CheckoutForm onConfirm={createNewOrder}/>
    </div>
  )
}
export default Checkout