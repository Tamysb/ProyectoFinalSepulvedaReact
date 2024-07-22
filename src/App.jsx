import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Carrito from "./components/Carrito/Carrito"
import CarritoProvider from "./CarritoProvider"
import Checkout from "./components/Checkout/Checkout"
function App(){
  return (
  <BrowserRouter>
  <CarritoProvider>
  <Navbar/>
  <Routes>
    <Route path="/" element={<ItemListContainer/>}/>
    <Route path="/category/:id" element={<ItemListContainer/>}/>
    <Route path="/products/:id" element={<ItemDetailContainer/>}/>
    <Route path="/carrito" element={<Carrito/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
  </Routes>
  </CarritoProvider>
  </BrowserRouter>
  )
}
export default App