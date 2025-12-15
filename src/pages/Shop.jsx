import { useState, useEffect} from "react";



const Shop = () => {
    const [products, setProducts] = useState(null);
    const [data, setData] = useState(null);

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
                return {key: d.id, title: d.title, price: d.price, description: d.description, category: d.category, image: d.image}
            })
            setProducts(productList)
        }
    },[data])

    return(
        products && (
    <div>{products.map(product => {
        return(
            <>
            <hr />
            <h3>{product.title}</h3>
            <img src={product.image} alt="" />
            <p>{product.description}</p>
            <p>${product.price}</p>
            </>
        )
    })}</div>
        )
    )
}

export default Shop
