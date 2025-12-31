import { createBrowserRouter } from "react-router";
import Home from "./pages/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);

export default router;
