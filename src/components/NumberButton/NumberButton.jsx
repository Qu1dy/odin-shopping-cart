import { Plus, Minus } from "lucide-react";
import styles from "./NumberButton.module.css";

const NumberButton = ({ quantity, setQuantity }) => {
    const onIncrease = () => {
        setQuantity(quantity + 1);
    };

    const onDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className={styles.container}>
            <button
                onClick={onDecrease}
                className={`${styles.btn} lucide-button`}
                aria-label="Decrease quantity"
            >
                <Minus size={20} color={"black"} />
            </button>
            <span className={styles.quantity}>{quantity}</span>
            <button
                className={`${styles.btn} lucide-button`}
                aria-label="Increase quantity"
                onClick={onIncrease}
            >
                <Plus size={20} color={"black"} />
            </button>
        </div>
    );
};

export default NumberButton;
