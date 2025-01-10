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
        <div className="sm:col-end-4 sm:col-start-2">
            <form className="grid grid-cols-1 m-4 text-slate-500 " onSubmit={handleConfirm}>
                <label className="gap-2">Nombre:</label>
                <input className="text-black bg-red-100 rounded-md shadow-xl " type="text" value={name} onChange={({target})=>setName(target.value)}/>
                <label className="gap-2">Telefono:</label>
                <input className="text-black bg-red-100 rounded-md shadow-xl " type="text" value={phone} onChange={({target})=>setPhone(target.value)}/>
                <label className="gap-2">Correo:</label>
                <input className="text-black bg-red-100 rounded-md shadow-xl " type="text" value={email} onChange={({target})=>setEmail(target.value)}/>
                <button type="submit" className="flex justify-center p-2 m-4 text-black bg-red-300 rounded-md shadow-xl hover:scale-105 hover:bg-red-400 hover:text-gray-200">Terminar Compra</button>
            </form>
        </div>
    )
}
export default CheckoutForm