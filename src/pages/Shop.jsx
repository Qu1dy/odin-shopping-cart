import Items from "../components/Items";
import { useOutletContext } from "react-router";

const ShopPage = () => {
    const { data, error, loading, cartItems, setCartItems } =
        useOutletContext();

    return (
        <Items
            data={data}
            error={error}
            loading={loading}
            cartItems={cartItems}
            setCartItems={setCartItems}
        />
    );
};

export default ShopPage;
