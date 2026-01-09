import Item from "../Item";
import PropTypes from "prop-types";
import styles from "./Items.module.css";

const Items = ({ data, loading, error, cartItems, setCartItems }) => {
    return (
        <>
            <h2 className={styles.title}>Games</h2>
            {loading || error ? (
                <h3 className={styles.status} role="status">
                    {loading
                        ? "Loading.. Please wait"
                        : "An error has occurred while fetching data."}
                </h3>
            ) : (
                <ul className={styles.items}>
                    {data.map((item) => (
                        <Item
                            key={item.id}
                            {...item}
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                        />
                    ))}
                </ul>
            )}
        </>
    );
};

Items.propTypes = {
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    cartItems: PropTypes.array.isRequired,
    setCartItems: PropTypes.func.isRequired,
};

export default Items;
