import PropTypes from "prop-types"


const Products = ({products, onIncrementClick, onDecrementClick, addToCart, filter, onChange})  => {
    let filteredProducts
    
   
   filter && filter != "all" ?  filteredProducts = products.filter(product=> product.category === filter) : filteredProducts = products
   console.log('FilteredProducts')
   console.log(filter)
   console.log(filteredProducts)
  
     
    return (
        <div>{filteredProducts.map(product => {
        return(
            <div key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick = {() =>onIncrementClick(product.id)}>+</button>
            <input type="number" value={product.number} onChange={(e)=>onChange(e,product.id)} />
            <button onClick = {()=> onDecrementClick(product.id)}>-</button>
            <br />
            <button onClick ={()=> addToCart(product.id)}>Add to cart</button>
            <hr />
            </div>
        )
    })}</div>
    )
}

Products.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inCart: PropTypes.bool.isRequired
        })
    ),
    onIncrementClick: PropTypes.func,
    onDecrementClick: PropTypes.func,
    addToCart: PropTypes.func,
    filter: PropTypes.string,
    onChange: PropTypes.func,

}

export default Products