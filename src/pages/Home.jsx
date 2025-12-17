import { Link } from "react-router"
import { ShoppingCart, ShoppingBag } from "lucide-react"
import styles from "./Home.module.css"

const Home = () =>{
    return(
        <div className={styles.homeContainer}>
            <h1 className={styles.h1}>$hopCart</h1>
            <div className={styles.subtitle}>Your one-stop-shop for putting your shopping in a cart!</div>
            <div className={styles.cardContainer}>
            <div className={styles.card}>
               
            <Link to = "/shop" className={styles.linkComponent}> <div>
            <div className={styles.frontPageLink}><ShoppingCart className={styles.icon} size={128}/></div><div className={styles.frontPageLink}>Start shopping!</div></div></Link>
            </div>
            <div className={styles.card}>  
                
            <Link to = "/cart" className={styles.linkComponent}><div>
            <div className={styles.frontPageLink}><ShoppingBag className={styles.icon} size={128}/></div><div className={styles.frontPageLink}>See what's in your shopping bag</div></div> </Link>
            </div>
            </div>
        </div>
    )
}

export default Home