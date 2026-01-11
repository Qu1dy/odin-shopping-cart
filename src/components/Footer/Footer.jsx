import styles from "./Footer.module.css";

const Footer = () => (
    <footer className={styles.footer}>
        <p className={styles.footerText}>
            Made by{" "}
            <a
                href="https://github.com/Qu1dy"
                target="_blank"
                className={styles.link}
            >
                Qu1dy
            </a>
        </p>
    </footer>
);

export default Footer;
