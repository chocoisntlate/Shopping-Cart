import { createBrowserRouter } from "react-router";
import Home from "./components/home";
import Shop from "./components/shop";
import Cart from "./components/cart";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children: [
            {path: "/shop", element: <Shop/>} ,
            {path: "/cart", element: <Cart/>}
        ]
    }
])

export default router