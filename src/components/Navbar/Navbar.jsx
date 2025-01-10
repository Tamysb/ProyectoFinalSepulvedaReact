import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import { carritoContexto } from "../../CarritoProvider"
import { useContext, useState } from "react"

function Navbar(){
    const {agregarAlCarrito}= useContext(carritoContexto)
    const [Open,setOpen]=useState(false)
    return(
    <nav className="flex items-end justify-between m-4 border-b-2 border-black ">
        
        <div className="flex justify-end sm:hidden">
            <div className="relative"></div>
            <button className="inline-flex justify-center w-full text-lg font-normal uppercase text-slate-600 hover:text-pink-200" onClick={()=>setOpen(!Open)}>
                Menu
            </button>
            {Open&&(
                <div className="absolute left-0 w-56 ml-4 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <button className="flex items-center justify-end w-56 px-4 py-2 text-lg font-normal text-slate-600 hover:bg-pink-200 hover:font-bold" onClick={()=>setOpen(!Open)}> x</button>
                    <NavLink to="/category/beauty" className={"group flex items-center px-4 py-2 text-lg font-normal  text-slate-600 hover:bg-pink-200 "}>Belleza</NavLink>
                    <NavLink to="/category/fragrances" className={"group flex items-center px-4 py-2 text-lg font-normal  text-slate-600 hover:bg-pink-200 "}>Perfume</NavLink>
                    <NavLink to="/category/skin-care" className={"group flex items-center px-4 py-2 text-lg font-normal  text-slate-600 hover:bg-pink-200"}>Skin Care</NavLink>
                    
                    </div>
                </div>
            )}

        </div>
        
        <Link to="/"className="text-3xl font-blod text-slate-600 hover:text-red-300" >Ecomerce</Link> 
        <nav className="flex items-center justify-between gap-8 text-lg px-5 font-normal uppercase text-slate-600 max-[637px]:hidden">
            <NavLink to="/category/beauty" className={"hover:text-red-300"}>Belleza</NavLink>
            <NavLink to="/category/fragrances" className={"hover:text-red-300"}>Perfume</NavLink>
            <NavLink to="/category/skin-care" className={"hover:text-red-300"}>Skin Care</NavLink>
        </nav>
        {agregarAlCarrito.contador> 0 ?(<Link to="/carrito">0</Link>):(<CartWidget/>)}
    </nav>   
    )

}
export default Navbar