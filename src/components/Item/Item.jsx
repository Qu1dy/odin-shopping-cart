import { useState } from "react";
import styles from "./Item.module.css";

const Item = ({
    id,
    imageURL,
    dealURL,
    title,
    price,
    cartItems,
    setCartItems,
}) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <li className={styles.card}>
            <a href={dealURL} className={styles["img-container"]}>
                <img src={imageURL} alt="" />
            </a>
            <h3 className={styles.title}>{title}</h3>
            <data value={price}>${price}</data>
            <AddToCartControls
                id={id}
                cartItems={cartItems}
                setCartItems={setCartItems}
                quantity={quantity}
                setQuantity={setQuantity}
            />
        </li>
    );
};
