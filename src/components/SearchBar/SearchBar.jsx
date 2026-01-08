import styles from "./SearchBar.module.css";
import { Search } from "lucide-react";
import { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onSearch(inputValue);
    };

    return (
        <form className={styles.search} onSubmit={onSubmit}>
            <input
                type="search"
                placeholder="Search games..."
                value={inputValue}
                onChange={handleInputChange}
                className={styles["search-bar"]}
            />
            <button
                className={`${styles.btn} lucide-button`}
                type="submit"
                aria-label="Search game"
            >
                <Search size={20} />
            </button>
        </form>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
