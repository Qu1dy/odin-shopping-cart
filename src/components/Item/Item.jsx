import { useState } from "react";
import styles from "./Item.module.css";
import PropTypes from "prop-types";
import AddToCartControls from "../AddToCartControls/AddToCartControls";

const Item = ({
    id,
    imageURL,
    dealURL,
    title,
    price,
    cartItems,
    setCartItems,
}) => {
    const cartItem = cartItems.find((item) => item.id === id);
    const inCart = !!cartItem;
    //to synchronize between cart and shop page's quantity
    const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 1);

    const onAdd = () => {
        setCartItems([...cartItems, { quantity, id, imageURL, title, price }]);
    };

    const onRemove = () => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    return (
        <li className={styles.card}>
            <a href={dealURL} className={styles["img-container"]}>
                <img className={styles.img} src={imageURL} alt="" />
            </a>
            <h3 className={styles.title}>{title}</h3>
            <data value={price} className={styles.price}>
                ${price}
            </data>
            <AddToCartControls
                quantity={quantity}
                setQuantity={setQuantity}
                onAdd={onAdd}
                inCart={inCart}
                onRemove={onRemove}
            />
        </li>
    );
};

Item.propTypes = {
    id: PropTypes.number.isRequired,
    imageURL: PropTypes.string.isRequired,
    dealURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    cartItems: PropTypes.array.isRequired,
    setCartItems: PropTypes.func.isRequired,
};

export default Item;
