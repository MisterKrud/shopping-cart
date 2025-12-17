
import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const {
  products,
  handleDecrement,
  handleIncrement,
  removeFromCart,
  numberPurchased,
  totalPrice,
} = useOutletContext();
  const cartItems = products.filter((product) => product.inCart === true);
  let priceArray = [];
  let productNumber = [];
  return cartItems.length > 0 ? (
    <div>
      <h3>Your cart</h3>

      <div>
        {cartItems.map((item) => {
          priceArray.push(item.price * item.number);
          productNumber.push(item.number);
          return (
            <div key={item.id}>
              <p>
                <span>
                  <strong>
                    {cartItems.indexOf(item) + 1}. {item.title}:
                  </strong>
                </span>{" "}
                ${item.price * item.number}
              </p>
              <button onClick={() => handleDecrement(item.id)}>-</button>
              <p>{item.number}</p>
              <button onClick={() => handleIncrement(item.id)}>+</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          );
        })}
      </div>
      <div>
        <p>{numberPurchased} Items</p>
        <strong>Total: ${parseFloat(totalPrice).toFixed(2)}</strong>
      </div>
    </div>
  ) : (
    <div>
      <p>No items in cart</p>
    </div>
  );
};


export default Cart;
