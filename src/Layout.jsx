import Header from "./components/Header";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import GamesService from "./GamesService";
const Layout = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    const totalQuantity = cartItems.reduce(
        (prev, current) => prev + current.quantity,
        0
    );

    const handleSearch = async (query) => {
        navigate("/shop");
        setLoading(true);
        try {
            const result = await GamesService.getGames(query);
            setData(result);
        } catch (err) {
            setError(err.message);
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header handleSearch={handleSearch} totalQuantity={totalQuantity} />
            <main>
                <Outlet
                    context={{ data, error, loading, cartItems, setCartItems }}
                ></Outlet>
            </main>
        </>
    );
};

export default Layout;
