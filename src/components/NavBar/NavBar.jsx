import { Home, ShoppingCart, Store } from "lucide-react";
import styles from "./NavBar.module.css";
import { Link } from "react-router";
import PropTypes from "prop-types";

const NavBar = ({ totalQuantity, currentPath }) => {
    return (
        <nav>
            <ul className={styles.nav}>
                <li className={styles["nav-item"]}>
                    <LinkComponent path="/" currentPath={currentPath}>
                        <Home className={styles.icon} />
                    </LinkComponent>
                </li>
                <li>
                    <LinkComponent path="/shop" currentPath={currentPath}>
                        <Store className={styles.icon} />
                    </LinkComponent>
                </li>
                <li>
                    <LinkComponent
                        path="/cart"
                        currentPath={currentPath}
                        className={styles.cartLink}
                    >
                        <ShoppingCart className={styles.icon} />
                        <data className={styles.total} value={totalQuantity}>
                            {totalQuantity}
                        </data>
                    </LinkComponent>
                </li>
            </ul>
        </nav>
    );
};

const LinkComponent = ({ path, children, className = "", currentPath }) => {
    const finalClassName =
        path === currentPath ? `${className} ${styles.currentPath}` : className;
    return (
        <Link to={path} className={finalClassName}>
            {children}
        </Link>
    );
};

LinkComponent.propTypes = {
    path: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    currentPath: PropTypes.string.isRequired,
};

NavBar.propTypes = {
    totalQuantity: PropTypes.number.isRequired,
    currentPath: PropTypes.string.isRequired,
};

export default NavBar;
