import { useOutletContext } from "react-router";
import CartItems from "../components/CartItems";

const CartPage = () => {
    const { cartItems, setCartItems } = useOutletContext();

    return (
        <>
            <CartItems cartItems={cartItems} setCartItems={setCartItems} />
        </>
    );
};

export default CartPage;
