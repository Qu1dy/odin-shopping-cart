import Header from "./components/Header";
import { useState } from "react";
import { Outlet } from "react-router";
const Layout = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    const handleSearch = async (query) => {
        setLoading(true);
        try {
            const result = await GamesService.getGames(query);
            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header handleSearch={handleSearch} />
            <main>
                <Outlet
                    context={{ data, error, loading, cartItems, setCartItems }}
                ></Outlet>
            </main>
        </>
    );
};

export default Layout;
