import { Link } from "react-router"

const Home = () =>{

    return(
        <>
            <h1>Homepage</h1>
            <Link to = "/appstate/shop">Shop</Link>
            <Link to = "/appstate/cart">Cart</Link>
        </>
    )

}









export default Home