import styles from "./Header.module.css";
import PropTypes from "prop-types";
import NavBar from "../NavBar";
import SearchBar from "../SearchBar";

const Header = ({ handleSearch }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>MEOW</h1>
            <SearchBar onSearch={handleSearch} />
            <NavBar />
        </header>
    );
};

Header.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};

export default Header;
