import PropTypes from "prop-types";
import NumberButton from "../NumberButton";
import styles from "./CartItem.module.css";
import { Trash } from "lucide-react";
import { useState } from "react";

const CartItem = ({
    id,
    savedQuantity,
    imageURL,
    title,
    price,
    updateQuantity,
    onRemove,
}) => {
    const [quantity, setQuantity] = useState(savedQuantity);
    const total = (quantity * price).toFixed(2);

    const synchronizeQuantity = (newQuantity) => {
        setQuantity(newQuantity);
        updateQuantity(id, newQuantity);
    };

    return (
        <li className={styles.item}>
            <img src={imageURL} alt="" className={styles.img} />
            <h3 className={styles.title}>{title}</h3>
            <data value={price} className={styles.price}>
                Price: ${price}
            </data>
            <NumberButton
                quantity={quantity}
                setQuantity={synchronizeQuantity}
            />
            <button
                onClick={onRemove}
                className={`${styles.remove} lucide-button`}
            >
                <Trash size={20} color={"hsl(0, 65%, 35%)"} strokeWidth={3} />
            </button>
            <data value={total} className={styles.total}>
                Total: ${total}
            </data>
        </li>
    );
};

CartItem.propTypes = {
    id: PropTypes.number.isRequired,
    savedQuantity: PropTypes.number.isRequired,
    imageURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    updateQuantity: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default CartItem;
