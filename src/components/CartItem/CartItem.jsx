import PropTypes from "prop-types";
import NumberButton from "../NumberButton";
import styles from "./CartItem.module.css";
import { useState } from "react";

const CartItem = ({
    id,
    savedQuantity,
    imageURL,
    title,
    price,
    updateQuantity,
}) => {
    const [quantity, setQuantity] = useState(savedQuantity);

    const onSubmit = (e) => {
        e.preventDefault();
        updateQuantity(id, quantity);
    };

    return (
        <li className={styles.item}>
            <img src={imageURL} alt="" className={styles.img} />
            <h3 className={styles.title}>{title}</h3>
            <data value={price} className={styles.price}>
                ${price}
            </data>
            <NumberButton quantity={quantity} setQuantity={setQuantity} />
            <form onSubmit={onSubmit} className={styles["apply-quantity-form"]}>
                <button></button>
            </form>
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
};

export default CartItem;
