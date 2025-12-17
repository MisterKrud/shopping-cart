import PropTypes from "prop-types";
import style from "./Categories.module.css";

const Categories = ({ products, onClick }) => {
  let categoryArray = [];

  products.forEach((product) => {
    categoryArray.push(product.category);
  });
  const categories = Array.from(new Set(categoryArray));
  categories.push("all");

  console.log(categories);

  return (
    <>
      <div>Categories</div>
      <div>
        <div className={style.categories}>
          {categories.map((category) => {
            return (
              <button
                className={style.p}
                key={category}
                onClick={() => onClick(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

Categories.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inCart: PropTypes.bool.isRequired,
    })
  ),
  onClick: PropTypes.func,
};

export default Categories;
