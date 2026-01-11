import { Home, ShoppingCart, Store } from "lucide-react";
import styles from "./NavBar.module.css";
import { Link } from "react-router";
import PropTypes from "prop-types";
const NavBar = ({ totalQuantity }) => {
    return (
        <nav>
            <ul className={styles.nav}>
                <li className={styles["nav-item"]}>
                    <Link to="/" className={styles.icon}>
                        <Home size={18} />
                    </Link>
                </li>
                <li>
                    <Link to="/shop" className={styles.icon}>
                        <Store size={18} />
                    </Link>
                </li>
                <li>
                    <Link to="/cart" className={styles.icon}>
                        <ShoppingCart size={18} />
                    </Link>
                    <data className={styles.total} value={totalQuantity}>
                        {totalQuantity}
                    </data>
                </li>
            </ul>
        </nav>
    );
};

NavBar.propTypes = {
    totalQuantity: PropTypes.number.isRequired,
};

export default NavBar;
