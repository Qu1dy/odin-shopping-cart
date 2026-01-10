import styles from "./Header.module.css";
import PropTypes from "prop-types";
import NavBar from "../NavBar";
import SearchBar from "../SearchBar";

const Header = ({ handleSearch, totalQuantity }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>MEOW</h1>
            <SearchBar onSearch={handleSearch} />
            <NavBar totalQuantity={totalQuantity} />
        </header>
    );
};

Header.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    totalQuantity: PropTypes.number.isRequired,
};

export default Header;
