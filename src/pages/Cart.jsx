// import { useEffect } from "react"
// import Shop from "./Shop"


const Cart = ({products}) => {
 const cartItems = products.filter(product => product.inCart > 0)
    return(
        cartItems.length>0 ? (
            <div>
                {cartItems.filter(item => {
                    return (
                        <div key={item.id}>
                        <p><span><strong>{item.title}:</strong></span> ${item.price} ({item.inCart})</p>
</div>
                    )
                })
}
            </div>
        ) : (
            <div>
            <p>No items in cart</p>
            </div>
        )
    )


}

export default Cart