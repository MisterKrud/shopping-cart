
import { useOutletContext } from "react-router-dom";
import styles from "./Cart.module.css"
import { Trash2 } from "lucide-react";

const Cart = () => {
  const {
  products,
  handleDecrement,
  handleIncrement,
  removeFromCart,
  numberOfItems,
  totalPrice,
} = useOutletContext();
  const cartItems = products.filter((product) => product.inCart === true);
  let priceArray = [];
  let productNumber = [];
  console.log('cartItems')
  console.log(cartItems)
  return cartItems.length > 0 ? (
    <div>
        <div className={styles.cartHeader}>
      <h3>Your cart: </h3>
      <p>{numberOfItems} items</p>
</div>
      <div className={styles.cartContainer} >
        {cartItems.map((item) => {
          priceArray.push(item.price * item.number);
          productNumber.push(item.number);
          return (
            <div key={item.id} className={styles.card}>
                <div className={styles.productInfo}>
                <img src={item.image} />
                <div className={styles.namePrice}>
              <div className={styles.text}> {item.title} </div>
              <div className={styles.price}>${parseFloat(item.price * item.number).toFixed(2)}</div>
              </div>
              </div>
              <div className={styles.buttonContainer}>
                <div className={styles.changeNumber}>
              <button className={styles.minusButton} onClick={() => handleDecrement(item.id)}>-</button>
              <div className={styles.productNumber}>{item.number}</div>
              <button className={styles.addButton} onClick={() => handleIncrement(item.id)}>+</button>
              </div>
              <button className={styles.deleteButton} onClick={() => removeFromCart(item.id)}><Trash2 size={18} strokeWidth={1.5}/></button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.cartFooter}>
     
        <div className={styles.total}>Total: ${parseFloat(totalPrice).toFixed(2)}</div>
        <button className={styles.payNow}>Pay now</button>
      </div>
    </div>
  ) : (
    <div>
      <p>No items in cart</p>
    </div>
  );
};


export default Cart;
