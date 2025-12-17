import App from "./App";
import Home from "./pages/Home";

import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import AppState from "./pages/AppState";

const routes = [
    // {
    //     path: "/",
    //     element: <App />,
    // },
  
    // {
    //     path: "/",
    //     element: <Home />
    // },

    {
        path: "/",
        element: <AppState />,
        children: [
            {index: true, element: <Home />},
            {path: "home", element: <Home />},
            {path: "shop", element: <Shop />},
            {path: "cart", element: <Cart />}
        ]
    }

    

]


export default routes;
