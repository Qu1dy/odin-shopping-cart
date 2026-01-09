import { Check, RotateCcwIcon } from "lucide-react";
import NumberButton from "../NumberButton";
import styles from "./AddToCartControls.module.css";
import PropTypes from "prop-types";

const AddToCartControls = ({
    quantity,
    setQuantity,
    onAdd,
    onRemove,
    inCart,
}) => {
    if (inCart) {
        return (
            <>
                <div className={styles.container}>
                    <Check size={16} />
                    <span role="status">In cart ({quantity})</span>
                </div>
                <button
                    className={`lucide-button ${styles.back}`}
                    onClick={onRemove}
                >
                    <RotateCcwIcon
                        className={styles.back}
                        color={"hsl(0,60%,40%)"}
                        strokeWidth={2.5}
                    />
                </button>
            </>
        );
    }

    return (
        <>
            <button className={styles["add-to-cart"]} onClick={onAdd}>
                Add to cart
            </button>
            <NumberButton quantity={quantity} setQuantity={setQuantity} />
        </>
    );
};

AddToCartControls.propTypes = {
    quantity: PropTypes.number.isRequired,
    setQuantity: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    inCart: PropTypes.bool.isRequired,
};

export default AddToCartControls;
