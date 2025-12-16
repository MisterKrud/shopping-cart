// import { useEffect } from "react"
// import Shop from "./Shop"


const Cart = ({products}) => {
 const cartItems = products.filter(product => product.inCart > 0)
 let priceArray = []
 console.log('Cart Items from Cart Component')
 console.log(cartItems)
    return(
        cartItems.length>0 ? (
            <div>
                <div>
                {cartItems.map(item => {
                    priceArray.push(item.price*item.inCart)
                    return (
                        <div key={item.id}>
                            <p><span><strong>{item.title}:</strong></span> ${item.price*item.inCart} ({item.inCart})</p>
                        </div>
                    )
                })
}
                </div>
                    <div><span><strong>Total:</strong></span>{priceArray.reduce((total, value)=>total+value)}</div>
            </div>
        ) : (
            <div>
            <p>No items in cart</p>
            </div>
        )
    )


}

export default Cart