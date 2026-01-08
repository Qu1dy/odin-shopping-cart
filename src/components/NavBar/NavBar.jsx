import { Home, ShoppingCart, Store } from "lucide-react";
import styles from "./NavBar.module.css";
import { Link } from "react-router";
const NavBar = () => (
    <nav>
        <ul className={styles.nav}>
            <li className={styles["nav-item"]}>
                <Link to="/" className={styles.icon}>
                    <Home size={16} />
                </Link>
            </li>
            <li>
                <Link to="/shop" className={styles.icon}>
                    <Store size={16} />
                </Link>
            </li>
            <li>
                <Link to="/cart" className={styles.icon}>
                    <ShoppingCart size={16} />
                </Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;
