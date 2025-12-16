import { useState, useEffect} from "react";
import Cart from "./Cart";
import Categories from "../../pages/Categories";
import Products from "./Products";
import PropTypes from "prop-types";
import { trackOrSetValue } from "@testing-library/user-event/dist/cjs/document/trackValue.js";



const Shop = () => {
    const [data, setData] = useState(null);
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState(null)
    const [numberofItems, setNumberOfItems] = useState(0)
    const [totalPrice, setTotalPrice] =useState(0)
  
  
    

    useEffect(() =>{
        const fetchData = async() =>{
            const response = await fetch('https://fakestoreapi.com/products')
            const result = await response.json();
            setData(result)
        }
        fetchData()
        data ? console.log(data) : console.log('nada')
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    useEffect(()=>{
        if(data){
            const productList = data.map(d =>{
                return {id: d.id, title: d.title, price: d.price.toFixed(2), description: d.description, category: d.category, image: d.image, number: 0, inCart: false }
            })
            setProducts(productList)
        }
    },[data])

 



    const handleIncrement = (id) =>{
        const newArray = [...products]
        const currentItemIndex = newArray.findIndex(product => product.id === id); 
        const newProduct = newArray[currentItemIndex]          
        newProduct.number = newProduct.number+1;

       newArray.splice(currentItemIndex, 1, newProduct);
        setProducts(newArray);
    }

    const handleDecrement = (id) =>{
        const newArray = [...products]
        const currentItemIndex = newArray.findIndex(product => product.id === id); 
       const newProduct = newArray[currentItemIndex]  
        if(newProduct.number> 1){
            newProduct.number= newProduct.number-1
         } else {
            newProduct.number = 0;
            newProduct.inCart = false;
        }
        newArray.splice(currentItemIndex,1 , newProduct);
        setProducts(newArray);
    }


    const addToCart = (id) => {
        const newArray = [...products]
        const currentItemIndex = newArray.findIndex(product => product.id === id); 
        const newProduct = newArray[currentItemIndex]   
        newProduct.inCart = true;
        newProduct.number === 0 ? newProduct.number = 1 : null;
         newArray.splice(currentItemIndex,1 , newProduct);
        setProducts(newArray);
       
    }

    const removeFromCart = (id) => {
         const newArray = [...products]
        const currentItemIndex = newArray.findIndex(product => product.id === id); 
        const newProduct = newArray[currentItemIndex];     
        newProduct.inCart = false
        newProduct.number=0;
         newArray.splice(currentItemIndex,1 , newProduct);
        setProducts(newArray);

    }

    const handleQuantityChange=(e, id) =>{
         const newArray = [...products]
        const currentItemIndex = newArray.findIndex(product => product.id === id); 
        const newProduct = newArray[currentItemIndex]     
        newProduct.number=parseInt(e.target.value);
         newArray.splice(currentItemIndex,1 , newProduct);
        setProducts(newArray);
    }

    // const handleProduct = (id) => {
    //     const newArray = [...products]
    //     const currentItemIndex = newArray.findIndex(product => product.id === id); 
    //     const newProduct = newArray.find(product => product.id === id);     
    //     newProduct.inCart === true
    //      newArray.splice(currentItemIndex,1 , newProduct);
    //     setProducts(newArray);
    // }

    
   const handleFilter = (newCategory) => {
    console.log('newCategory')
    console.log(newCategory)
    category === "all" ? setCategory(null) : setCategory(newCategory)
    console.log(category)

   }


   useEffect(() => {
    const purchasedItems = [];
    products.forEach(product=> {
        purchasedItems.push(product.number)
    })
    purchasedItems.length>0 ? setNumberOfItems(purchasedItems.reduce((total, value) => total + value)) : null;
    
   },[products])


   useEffect(() => {
      const purchasedItems = [];
    products.forEach(product=> {
        purchasedItems.push(product.price*product.number)
     purchasedItems.length>0 ?  setTotalPrice(purchasedItems.reduce((total, value) => total + value)) : null
    })
   },[products])
   
   
    return(
        products.length>0 && (
            <>
            <Categories products = {products} onClick = {handleFilter} />
        <Products products = {products} filter={category} onIncrementClick={handleIncrement} onDecrementClick={handleDecrement} addToCart={addToCart} onChange={handleQuantityChange} />
        <hr />
        <Cart products = {products} onIncrementClick={handleIncrement} onDecrementClick={handleDecrement} onRemoveClick={removeFromCart} numberPurchased={numberofItems} totalPrice={totalPrice} />

        </>
        )
        
    )
}


Shop.propTypes = {

}

export default Shop
