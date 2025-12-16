import { useState, useEffect} from "react";
import Cart from "./Cart";
import Categories from "../../pages/Categories";
import Products from "./Products";



const Shop = () => {
    const [data, setData] = useState(null);
    const [products, setProducts] = useState([]);
  
    

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
                return {id: d.id, title: d.title, price: d.price, description: d.description, category: d.category, image: d.image, number: 0, inCart: false }
            })
            setProducts(productList)
        }
    },[data])

 



    const handleIncrement = (id) =>{
        const newArray = [...products]
        const currentItemIndex = newArray.findIndex(product => product.id === id); 
        const newProduct = newArray.find(product => product.id === id);              
        newProduct.number = newProduct.number+1;
       newArray.splice(currentItemIndex, 1, newProduct);
        setProducts(newArray);
  
        console.log('inCart...')
   
        console.log('products')
        console.log(products)
    }

    const handleDecrement = (id) =>{
        const newArray = [...products]
        const currentItemIndex = newArray.findIndex(product => product.id === id); 
        const newProduct = newArray.find(product => product.id === id);        
        newProduct.number> 0 ? newProduct.number= newProduct.number-1 : newProduct.number = 0;
        newArray.splice(currentItemIndex,1 , newProduct);
        setProducts(newArray);
     
    }


    const addToCart = (id) => {
        const newArray = [...products]
        const currentItemIndex = newArray.findIndex(product => product.id === id); 
        const newProduct = newArray.find(product => product.id === id);     
        newProduct.inCart = true
         newArray.splice(currentItemIndex,1 , newProduct);
        setProducts(newArray);
        console.log(newProduct)
        console.log(products)
    }

    const removeFromCart = (id) => {
         const newArray = [...products]
        const currentItemIndex = newArray.findIndex(product => product.id === id); 
        const newProduct = newArray.find(product => product.id === id);     
        newProduct.inCart = false
        newProduct.number=0;
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


   

    return(
        products.length>0 && (
            <>
            {/* <Categories products = {products}/> */}
        <Products products = {products}  onIncrementClick={handleIncrement} onDecrementClick={handleDecrement} addToCart={addToCart} />
        <hr />
        <Cart products = {products} onClick={removeFromCart} />

        </>
        )
        
    )
}

export default Shop
