import Header from "./components/Header";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import GamesService from "./GamesService";
import Footer from "./components/Footer";

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

    const getRandomLetter = () => {
        const lowercaseAsciiStart = 97;
        const letterIndex = Math.floor(Math.random() * 26);
        const letter = String.fromCharCode(lowercaseAsciiStart + letterIndex);
        return letter;
    };

    useEffect(() => {
        const search = async () => await getGameData(getRandomLetter());
        search();
    }, []);

    const getGameData = async (query) => {
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

    const performGameSearch = async (query) => {
        navigate("/shop");
        await getGameData(query);
    };

    return (
        <>
            <Header
                handleSearch={performGameSearch}
                totalQuantity={totalQuantity}
            />
            <main>
                <Outlet
                    context={{ data, error, loading, cartItems, setCartItems }}
                />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
