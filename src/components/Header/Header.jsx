import styles from "./Header.module.css";
import PropTypes from "prop-types";
import NavBar from "../NavBar";
import SearchBar from "../SearchBar";

const Header = ({ handleSearch, cartItems }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>MEOW</h1>
            <SearchBar onSearch={handleSearch} />
            <NavBar cartItems={cartItems} />
        </header>
    );
};

Header.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    cartItems: PropTypes.array.isRequired,
};

export default Header;
