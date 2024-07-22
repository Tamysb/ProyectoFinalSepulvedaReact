import { useState } from "react"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
const Checkout = () => {

  const [data, setData] = useState(0)
  const [loading,setLoading]= useState(false)
  const [orderId,setOrderId]= useState()
  if(loading){
    return <h1>Se esta generando su orden</h1>
  }
  if(orderId){
    return <h1>Orden de compra :{orderId}</h1>
  }

  return (
    <div>
      <CheckoutForm onConfirm={createOrder}/>
    </div>
  )
}
export default Checkout