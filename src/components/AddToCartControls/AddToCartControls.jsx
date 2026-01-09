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
                    <Check size={12} />
                    <span className={styles.status} role="status">
                        In cart ({quantity})
                    </span>
                </div>
                <button className={`lucide-button`} onClick={onRemove}>
                    <RotateCcwIcon className={styles.back} />
                </button>
            </>
        );
    }

    return (
        <>
            <button
                className={`${styles["add-to-cart"]} ${styles.status}`}
                onClick={onAdd}
            >
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
