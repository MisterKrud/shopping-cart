import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"
import { ShoppingBasket, House, Store } from "lucide-react";

const NavBar = ({items}) =>{
    return (
        <div className={styles.navContainer}>
        <nav className = {styles.nav}>
            <Link to = "/home" className={styles.link}><House className={styles.Icon}/>Home</Link>
            <Link to = "/shop" className={styles.link}><Store className={styles.Icon}/>Shop</Link>
           
            <Link to = "/cart" className={styles.link}><ShoppingBasket className={styles.Icon}/><span className={styles.cartNumber}>{items}</span></Link>
       
        </nav>
        </div>
        
    )
}


export default NavBar