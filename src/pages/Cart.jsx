import PropTypes from "prop-types";
// import Shop from "./Shop"

const Cart = ({
  products,
  onIncrementClick,
  onDecrementClick,
  onRemoveClick,
  numberPurchased,
  totalPrice,
}) => {
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
              <button onClick={() => onIncrementClick(item.id)}>+</button>
              <p>{item.number}</p>
              <button onClick={() => onDecrementClick(item.id)}>-</button>
              <button onClick={() => onRemoveClick(item.id)}>Remove</button>
            </div>
          );
        })}
      </div>
      <div>
        <p>{numberPurchased} Items</p>
        <strong>Total: ${totalPrice}</strong>
      </div>
    </div>
  ) : (
    <div>
      <p>No items in cart</p>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inCart: PropTypes.bool.isRequired,
    })
  ),
  onIncrementClick: PropTypes.func,
  onDecrementClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
  numberPurcahsed: PropTypes.number,
  totalPrice: PropTypes.number,
};
export default Cart;
