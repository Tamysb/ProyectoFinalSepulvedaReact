import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore";
import { app } from "./firebaseConfig";
const db= getFirestore(app)
export const coleccionProductos= collection(db,"productos")
export function genereteProductos(){
    const consulta= addDoc(coleccionProductos,{
        "id": 1,
            "title": "Essence Mascara Lash Princess",
            "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
            "category": "beauty",
            "price": 9.99,
            "images": [
                "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
            ],
        "id": 2,
            "title": "Eyeshadow Palette with Mirror",
            "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
            "category": "beauty",
            "price": 19.99,
            "images": [
                "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
            ],    
        "id": 3,
            "title": "Powder Canister",
            "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
            "category": "beauty",
            "price": 14.99,
            "images": [
                "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"
            ],
        "id": 4,
            "title": "Red Lipstick",
            "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
            "category": "beauty",
            "price": 12.99,
            "images": [
                "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"
        ],
        "id": 5,
            "title": "Red Nail Polish",
            "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
            "category": "beauty",
            "price": 8.99,
            "images": [
                "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png"
        ],
        "id": 6,
            "title": "Calvin Klein CK One",
            "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
            "category": "fragrances",
            "price": 49.99,
            "images": [
                "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
                          
            ],                 
                  
             
    }).then((res)=>{
    console.log(res)
    console.log("ok")
    }).catch((error)=>{
    console.log(error)
    console.log("error")
    })
    console.log(consulta)
}
export function getProductos(){
    return getDocs(coleccionProductos)
    .then((res)=>{
        const productos=res.docs.map((doc)=>{
        const producto = doc.data()
        producto.id=doc.id
        return producto
        })
        return productos
    }).catch((error)=>{
        console.log(error)
        console.log("error")
        })
    
}
export function getProductosByCategory(category){
    const filtro = query(coleccionProductos,where("category","==",category))
    return getDocs(filtro)
     .then((res)=>{
        const productos=res.docs.map((doc)=>{
         const producto = doc.data()
         producto.id=doc.id
         return producto
        })
        return productos
    }).catch((error)=>{
        console.log(error)
        console.log("error")
        })
}
export function getProductosById(id){
    const filtro = doc(coleccionProductos,id)
    return getDoc(filtro)
    .then((res)=>{
        const producto=res.data()
        producto.id = res.id
        console.log(producto)
        return producto
        
    })
    .catch((err)=>{
        console.log(err)
    })
}
