import { useOutletContext } from "react-router"
import Categories from "./Categories"
import style from "./Shop.module.css"


const Shop = ()  => {
    const {products, handleIncrement, handleDecrement, addToCart, category, handleQuantityChange, handleFilter} = useOutletContext()
    let filteredProducts
    
   
   category && category != "all" ?  filteredProducts = products.filter(product=> product.category === category) : filteredProducts = products
   console.log('FilteredProducts')
   console.log(category)
   console.log(filteredProducts)
  
     
    return (
        <>
        <Categories products={products} onClick={handleFilter}/>
        <div>{filteredProducts.map(product => {
        return(
            <div key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>${product.price}</p>
            <div className= {style.buttonContainer}>
            <button className={style.changeButton} onClick = {() =>handleDecrement(product.id)}>-</button>
            <input className={style.input} type="text" inputmode="numeric" value={product.number} onChange={(e)=>handleQuantityChange(e,product.id)} />
            <button className={style.changeButton} onClick = {()=> handleIncrement(product.id)}>+</button>
           
            </div>
            <button className={style.addToCartButton} onClick ={()=> addToCart(product.id)}>Add to cart</button>
            
            <hr />
            </div>
        )
    })}</div>
    
    </>
    )
}



export default Shop