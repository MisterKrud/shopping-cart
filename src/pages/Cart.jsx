import PropTypes from "prop-types";
// import Shop from "./Shop"

const Cart = ({ products, onClick }) => {
  const cartItems = products.filter((product) => product.inCart === true);
  let priceArray = [];
  return cartItems.length > 0 ? (
    <div>
      <div>
        {cartItems.map((item) => {
          priceArray.push(item.price * item.number);
          return (
            <div key={item.id}>
              
              <p>
                <span>
                  <strong>{cartItems.indexOf(item)+1}. {item.title}:</strong>
                </span>{" "}
                ${item.price * item.number} ({item.number})
              </p>
              <button onClick={()=>onClick(item.id)}>Remove</button>
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
