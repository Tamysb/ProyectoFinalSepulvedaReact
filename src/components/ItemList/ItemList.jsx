import Item from "../Item/Item"
function ItemList({ productos }) { 
    console.log(productos)
    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
            {productos.map((prod)=> {
                return (
                <Item key={prod.id}{...prod}/>)}
            )}
            
        </div>
    );
}

export default ItemList