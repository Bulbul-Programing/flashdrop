import App from "@/App";
import Login from "@/pages/Login/Login";
import Prices from "@/pages/Prices/Prices";
import Register from "@/pages/Register/Register";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: '/prices',
                Component: Prices
            }
        ]
    },
    {
        path: '/register',
        Component: Register
    },
    {
        path: '/login',
        Component: Login
    }
])