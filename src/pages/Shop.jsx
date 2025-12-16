import { useState, useEffect} from "react";
import Cart from "./Cart";



const Shop = () => {
    const [data, setData] = useState(null);
    const [products, setProducts] = useState(null);
    const [inCart, setInCart] = useState([]);
    

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
                return {id: d.id, title: d.title, price: d.price, description: d.description, category: d.category, image: d.image, inCart: 0}
            })
            setProducts(productList)
        }
    },[data])




    const handleIncrement = (id) =>{
        const newArray = [...products]
        const currentItemIndex = newArray.findIndex(product => product.id === id); 
        const newProduct = newArray.find(product => product.id === id);              
        newProduct.inCart = newProduct.inCart+1;
       newArray.splice(currentItemIndex, 1, newProduct);
        setProducts(newArray);
        setInCart(products.filter(product => product.inCart>0))
        console.log('inCart...')
        console.log(inCart)
        console.log('products')
        console.log(products)
    }

    const handleDecrement = (id) =>{
        const newArray = [...products]
        const currentItemIndex = newArray.findIndex(product => product.id === id); 
        const newProduct = newArray.find(product => product.id === id);        
        newProduct.inCart> 0 ? newProduct.inCart= newProduct.inCart-1 : newProduct.inCart = 0;
        newArray.splice(currentItemIndex,1 , newProduct);
        setProducts(newArray);
        setInCart(products.filter(product => product.inCart>0))
    }

    return(
        products && (
            <>
    <div>{products.map(product => {
        return(
            <div key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt="" />
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick = {()=>handleIncrement(product.id)}>+</button>
            <p>{product.inCart}</p>
            <button onClick = {()=>handleDecrement(product.id)}>-</button>
            <hr />
            </div>
        )
    })}</div>
        <hr />
        <Cart cartItems = {inCart} />

        </>
        )
        
    )
}

export default Shop
