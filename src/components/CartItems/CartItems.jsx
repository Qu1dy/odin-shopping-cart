import CartItem from "../CartItem";
import PropTypes from "prop-types";
import styles from "./CartItems.module.css";

const CartItems = ({ cartItems, setCartItems }) => {
    const onRemove = (id) =>
        setCartItems(cartItems.filter((item) => item.id !== id));

    const updateQuantity = (id, newQuantity) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    return (
        <>
            <h2 className={styles.title}>Cart items</h2>
            {cartItems.length ? (
                <ul className={styles.items}>
                    {cartItems.map((item) => (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            savedQuantity={item.quantity}
                            imageURL={item.imageURL}
                            title={item.title}
                            price={item.price}
                            onRemove={() => onRemove(item.id)}
                            updateQuantity={updateQuantity}
                        />
                    ))}
                </ul>
            ) : (
                <h3 className={styles.status}>No items in cart.</h3>
            )}
        </>
    );
};

CartItems.propTypes = {
    cartItems: PropTypes.array.isRequired,
    setCartItems: PropTypes.func.isRequired,
};

export default CartItems;
