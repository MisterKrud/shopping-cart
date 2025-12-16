import PropTypes from "prop-types"

const Categories = ({products}) => {
   
    let categoryArray = []

products.forEach(product =>  {
        categoryArray.push(product.category)
    })
   const categories = Array.from(new Set(categoryArray))
  
   console.log(categories)

    return (
        <>
        <div>Categories</div>
        <div>{categories.map(category =>{
            return (
                <p key={category}>{category}</p>
            )
        })}</div>
        </>
    )
}

Categories.propTypes = {
    products: PropTypes.array,
}

export default Categories