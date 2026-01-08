import { Check, RotateCCW } from "lucide-react";
import styles from "";

const AddToCartControls = ({
    id,
    cartItems,
    setCartItems,
    quantity,
    setQuantity,
}) => {
    const inCart = (id) => cartItems.some((item) => item.id === id);

    const onRemove = () => cartItems.filter((item) => item.id !== id);

    if (inCart) {
        return (
            <>
                <span className={styles.status}>In cart</span>
                <button className="lucide-button"></button>
            </>
        );
    }
};
