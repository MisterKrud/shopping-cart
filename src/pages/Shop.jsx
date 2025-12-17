import { useOutletContext } from "react-router"
import Categories from "./Categories"


const Shop = ()  => {
    const {products, handleIncrement, handleDecrement, addToCart, category, handleQuantityChange, handleFilter} = useOutletContext()
    let filteredProducts
    
   
   category && category != "all" ?  filteredProducts = products.filter(product=> product.category === category) : filteredProducts = products
   console.log('FilteredProducts')
   console.log(category)
   console.log(filteredProducts)
  
     
    return (
        <>
        <Categories products={products} onClick={()=>handleFilter(category)}/>
        <div>{filteredProducts.map(product => {
        return(
            <div key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick = {() =>handleDecrement(product.id)}>-</button>
            <input type="number" value={product.number} onChange={(e)=>handleQuantityChange(e,product.id)} />
            <button onClick = {()=> handleIncrement(product.id)}>+</button>
            <br />
            <button onClick ={()=> addToCart(product.id)}>Add to cart</button>
            <hr />
            </div>
        )
    })}</div>
    
    </>
    )
}



export default Shop