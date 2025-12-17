import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"

const NavBar = ({items, price}) =>{
    return (
        <div className={styles.navContainer}>
        <nav className = {styles.nav}>
            <Link to = "/home" className={styles.link}>Home</Link>
            <Link to = "/shop" className={styles.link}>Shop</Link>
            <Link to = "/cart" className={styles.link}>Cart : {items} - ${price}</Link>
        </nav>
        </div>
        
    )
}


export default NavBar