import { useState } from "react"

function CheckoutForm ({onConfirm}){
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")

    const handleConfirm=(e)=>{
        e.preventDefault()
        const userData={
            name,phone,email
        }
        onConfirm(userData)
    }
    return(
        <div>
            <form className="flex flex-row m-4" onSubmit={handleConfirm}>
                <label>
                    nombre
                    <input className="text-black bg-red-300 rounded-md shadow-xl " type="text" value={name} onChange={({target})=>setName(target.value)}/>
                </label>
                <label>
                    telefono
                    <input className="text-black bg-red-300 rounded-md shadow-xl " type="text" value={phone} onChange={({target})=>setPhone(target.value)}/>
                </label>
                <label>
                    correo
                    <input className="text-black bg-red-300 rounded-md shadow-xl " type="text" value={email} onChange={({target})=>setEmail(target.value)}/>
                </label>
                <button type="submit" className="flex justify-center p-2 m-4 text-orange-900 bg-red-200 rounded-md shadow-xl hover:scale-105">terminar compra</button>
            </form>
        </div>
    )
}
export default CheckoutForm