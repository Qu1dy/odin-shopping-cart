import styles from "./SearchBar.module.css";
import { Search } from "lucide-react";
import { useState } from "react";
import LucideButton from "../LucideButton";

const SearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <form className={styles.search} onSubmit={onSearch}>
            <input
                type="search"
                placeholder="Search games..."
                value={inputValue}
                onChange={handleInputChange}
                className={styles["search-bar"]}
            />
            <LucideButton Icon={<Search size={20} />}></LucideButton>
        </form>
    );
};

export default SearchBar;
