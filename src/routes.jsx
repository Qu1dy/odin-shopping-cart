import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import ErrorPage from "./components/ErrorPage";
import Root from "./pages/Root";
import ShopPage from "./pages/Shop";
import CartPage from "./pages/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Root />,
            },
            {
                path: "/shop",
                element: <ShopPage />,
            },
            {
                path: "/cart",
                element: <CartPage />,
            },
        ],
    },
]);

export default router;
