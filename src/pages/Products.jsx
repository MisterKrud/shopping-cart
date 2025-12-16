import PropTypes from "prop-types"


const Products = ({products, onIncrementClick, onDecrementClick, addToCart})  => {
    return (
        <div>{products.map(product => {
        return(
            <div key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick = {() =>onIncrementClick(product.id)}>+</button>
            <p>{product.number}</p>
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
    products: PropTypes.array,
    onIncrementClick: PropTypes.func,
    onDecrementClick: PropTypes.func,
}

export default Products