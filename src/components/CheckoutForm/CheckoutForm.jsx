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
            <form onSubmit={handleConfirm}>
                <label>
                    nombre
                    <input type="text" value={name} onChange={({target})=>setName(target.value)}/>
                </label>
                <label>
                    telefono
                    <input type="text" value={phone} onChange={({target})=>setPhone(target.value)}/>
                </label>
                <label>
                    correo
                    <input type="text" value={email} onChange={({target})=>setEmail(target.value)}/>
                </label>

            </form>
        </div>
    )
}
export default CheckoutForm