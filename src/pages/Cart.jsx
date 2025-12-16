import PropTypes from "prop-types";
// import Shop from "./Shop"

const Cart = ({ products }) => {
  const cartItems = products.filter((product) => product.inCart > 0);
  let priceArray = [];
  return cartItems.length > 0 ? (
    <div>
      <div>
        {cartItems.map((item) => {
          priceArray.push(item.price * item.inCart);
          return (
            <div key={item.id}>
              <p>
                <span>
                  <strong>{item.title}:</strong>
                </span>{" "}
                ${item.price * item.inCart} ({item.inCart})
              </p>
            </div>
          );
        })}
      </div>
      <div>
       
          <strong>Total: $
       
        {priceArray.reduce((total, value) => total + value)}
        </strong>
      </div>
    </div>
  ) : (
    <div>
      <p>No items in cart</p>
    </div>
  );


};

  Cart.propTypes = {
    products: PropTypes.array,
  };
export default Cart;
