import App from "@/App";
import Prices from "@/pages/Prices/Prices";
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
    }
])