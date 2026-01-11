import styles from "./Home.module.css";
import { Link } from "react-router";
const Home = () => (
    <>
        <section className={styles.hero}>
            <div className={styles.heroText}>
                <p className={styles.title}>
                    We sell games for{" "}
                    <span className={styles.highlighted}>cheap</span>.
                </p>
                <p className={styles.cta}>
                    Visit the{" "}
                    <Link to="/shop" className={styles.highlighted}>
                        shop
                    </Link>{" "}
                    to view our collection!
                </p>
                <p className={styles.p}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quia pariatur facilis doloribus tempore laboriosam incidunt
                    officia quo id, modi, cumque qui ullam vitae neque obcaecati
                    quibusdam, voluptatem animi sit earum.
                </p>
            </div>
            <div className={styles.heroImage}>
                <img src="/gaming-image.jpg" alt="" />
            </div>
        </section>
    </>
);

export default Home;
