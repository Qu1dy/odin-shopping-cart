import { Frown } from "lucide-react";
import { useRouteError } from "react-router";
import styles from "./ErrorPage.module.css";
const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className={styles["error"]}>
            <Frown size={"10rem"} color="hsl(0, 0%, 60%)" />
            <p className={styles["status"]}>
                {error.status} {error.statusText || error.message}
            </p>
            <p className={styles["message"]}>An error occurred 3:</p>
        </div>
    );
};

export default ErrorPage;
