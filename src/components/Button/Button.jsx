import { useState } from "react";
import styles from "./Button.module.css";

const Button = () => {
    const [times, setTimes] = useState(0);

    const onClick = () => setTimes(times + 1);

    return (
        <button className={styles.btn} onClick={onClick}>
            Clicked {times} times.
        </button>
    );
};

export default Button;
