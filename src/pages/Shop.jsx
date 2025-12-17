import { useOutletContext } from "react-router";
import Categories from "./Categories";
import styles from "./Shop.module.css";

const Shop = () => {
  const {
    products,
    handleIncrement,
    handleDecrement,
    addToCart,
    category,
    handleQuantityChange,
    handleFilter,
  } = useOutletContext();
  let filteredProducts;
  category && category != "all"
    ? (filteredProducts = products.filter(
        (product) => product.category === category
      ))
    : (filteredProducts = products);
  return (
    <>
      <Categories products={products} onClick={handleFilter} />
      <div className={styles.shopContainer}>
        {filteredProducts.map((product) => {
          return (
            <div className={styles.card} key={product.id}>
              <div className={styles.imgContainer}>
                <img
                  className={styles.img}
                  src={product.image}
                  alt={product.title}
                />
                <div className={styles.caption}>{product.description}</div>
              </div>

              <h5 className={styles.productName}>{product.title}</h5>
              <p>${product.price}</p>
              <div className={styles.buttonContainer}>
                <button
                  className={styles.minusButton}
                  onClick={() => handleDecrement(product.id)}
                >
                  -
                </button>
                <input
                  className={styles.input}
                  type="text"
                  inputMode="numeric"
                  value={product.number}
                  onChange={(e) => handleQuantityChange(e, product.id)}
                />
                <button
                  className={styles.addButton}
                  onClick={() => handleIncrement(product.id)}
                >
                  +
                </button>
              </div>
              <button
                className={styles.addToCartButton}
                onClick={() => addToCart(product.id)}
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shop;
