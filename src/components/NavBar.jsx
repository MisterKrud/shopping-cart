import { Link } from "react-router"
import styles from "./NavBar.module.css"

const NavBar = ({items, price}) =>{
    return (
        
        <nav className = {styles.nav}>
            <Link to = "home">Home</Link>
            <Link to = "shop">Shop</Link>
            <Link to = "cart">Cart : {items} - ${price}</Link>
        </nav>
        
    )
}


export default NavBar