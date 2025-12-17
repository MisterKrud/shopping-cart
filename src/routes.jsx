import App from "./App";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import AppState from "./pages/AppState";

const routes = [
  {
    path: "/",
    element: <AppState />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;
