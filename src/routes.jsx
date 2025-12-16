import App from "./App";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "../pages/Categories";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";

const routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "home",
        element: <Home />
    },
    {
        path: "shop",
        element: <Shop />
    }

]


export default routes;
