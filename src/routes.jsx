import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import ErrorPage from "./components/ErrorPage";
import Root from "./pages/Root";
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
        ],
    },
]);

export default router;
