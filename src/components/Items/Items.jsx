import Item from "";
import PropTypes from "prop-types";

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
                <ul className={styles.container}>
                    {data.map((item) => (
                        <Item
                            key={item.id}
                            {...item}
                            cartItems={cartItems}
                            inCart={inCart(item.id)}
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
