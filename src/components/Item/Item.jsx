import { Link } from "react-router-dom"
const Item = ({id,title,images,price})=>{
    
    return(
        <div >
            <section className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
                <article className="p-4 text-black transition-all bg-white rounded-md shadow-xl hover:scale-105">
                <img src={images[0]} alt={title} className="object-contain aspect-square"/>
                <h2 className="font-bold truncate">{title}</h2>
                <p className="p-2 text-gray-400">${price}</p>
                <Link to={`/products/${id}`}className="p-2 bg-red-200 rounded-md shadow-xl hover:scale-105">Ver mas</Link>
            </article>
            </section>
            
        </div>
    
    )
}
export default Item