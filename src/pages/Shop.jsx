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
            <div className = {style.card}key={product.id}>
            
           <div className={style.imgContainer}>
                
            <img className={style.img} src={product.image} alt={product.title}  />
            <div className={style.caption}>{product.description}</div>
            </div>
       
            <h5 className={style.productName}>{product.title}</h5>
            <p>${product.price}</p>
            <div className= {style.buttonContainer}>
            <button className={style.minusButton} onClick = {() =>handleDecrement(product.id)}>-</button>
            <input className={style.input} type="text" inputMode="numeric" value={product.number} onChange={(e)=>handleQuantityChange(e,product.id)} />
            <button className={style.addButton} onClick = {()=> handleIncrement(product.id)}>+</button>
           
            </div>
            <button className={style.addToCartButton} onClick ={()=> addToCart(product.id)}>Add to cart</button>
         
            </div>
        )
    })}</div>
    
    </>
    )
}



export default Shop